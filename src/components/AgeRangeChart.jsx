import React, { useState, useEffect } from 'react';
import { Scatter } from 'react-chartjs-2';
import { apiGet } from "../api";
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    ChartDataLabels
);

export const AgeRangeChart = ({ eventId }) => {
    const [chartData, setChartData] = useState({ datasets: [] });

    useEffect(() => {
        const fetchAgeData = async () => {
            try {
                const data = await apiGet(`/events/${eventId}/ageRangeChart`);
                const dataset = {
                    label: 'Attendees by Age',
                    data: data,
                    backgroundColor: '#b30707',
                    pointRadius: 16,
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    hoverPointRadius: 20,
                };
                setChartData({ datasets: [dataset] });
            } catch (err) {
                console.error("Error fetching age data:", err.message);
            }
        };

        fetchAgeData();
    }, [eventId]);

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const age = context.parsed.y;
                        const count = context.parsed.x;
                        return `Age: ${age}, Count: ${count}`;
                    }
                }
            },
            datalabels: {
                display: true,
                color: '#fff',
                font: {size: 13 },
                formatter: function (value) {
                    return value.y;
                }
            }
        },
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                grid: { color: "#f5f2f2", drawBorder:false},

                min: 0,
                max:20,
                ticks: { stepSize: 1}
            },
            y: {
                beginAtZero: true,
                max:60,
                ticks: { stepSize: 10 },
                grid: { color: "#f5f2f2", drawBorder:false},
            }
        },
        maintainAspectRatio: false,
    };

    return (
        <div className='h-[300px] w-[690px] ml-[30px] mt-[0px] '>
            <p className='ml-[40px] mb-[0px]'>Attendees Age</p>
            {chartData.datasets[0]?.data.length > 0 ? (
                <Scatter data={chartData} options={options} />
            ) : (
                <p className='text-center'>No age data to display.</p>
            )}
        </div>
    );
};