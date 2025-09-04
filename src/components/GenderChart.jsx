import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { apiGet } from "../api";

ChartJS.register(ArcElement, Tooltip, Legend);

export const GenderChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{ data: [], label: "" }],
  });

  useEffect(() => {
    apiGet("/events/admingenderChart").then((data) => {
      setChartData({
        labels: data.labels,
        datasets: [
          {
            label: "Gender Distribution",
            data: data.data,
            backgroundColor: ["#e874d9", "#655ecc"],
          },
        ],
      });
    });
  }, []);

  const options = {
    responsive: true,
    
    plugins: {
      legend: { position: "right", labels: { usePointStyle: true } },
      title: {display:true,text:"Attendees Gender",font:{size:20}},
    },
  };

  return (
    <div className=" ml-[40px]">
      <Doughnut data={chartData} options={options} />
    </div>
  );
};


