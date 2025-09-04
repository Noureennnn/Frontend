import { Bar } from 'react-chartjs-2';
import { apiGet } from "../api";
import { Chart as ChartJS,LinearScale,Tooltip,Legend,CategoryScale,BarElement,Title, plugins} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useState } from 'react';
import { useEffect } from 'react';
ChartJS.register(CategoryScale,LinearScale,BarElement,Tooltip,Legend,Title,ChartDataLabels);

export const LocationsBarChart = () => {
    const [barChartData,setBarChartData] = useState({datasets : []});
    const colorMap = {
                    "Egypt":"#521cbd",
                    "United States":"#660428",
                    "Spain":"#069912",
                    "Italy":"#c27b0a",
                    "France":"#880994",
                    "Canada":"#c41064",
                    "Other":"#cc0e18",}
    useEffect(() => {
      const fetchLocationData = async() => {
        try{
          const locationdata = await apiGet("/events/locationsBarChart");
          const labels = locationdata.map(item=>item._id);
          const totals = locationdata.map(item=>item.total);
          const backgroundColors = labels.map((label) => colorMap[label]);
          const dataset = [{
            labels:"" ,
            data: totals,
            barThickness: 30,
            backgroundColor : backgroundColors,
            borderWidth:1,
            borderRadius:999
          }];
          setBarChartData({labels:labels,datasets:dataset});
        }catch(err){console.error("Couldn't fetch data");}
    }
  fetchLocationData();
      }, []);
      const options = {
      responsive : true,
      plugins: {
        legend: { display: false,},
        title: {display:true,text:"All Attendees Locations",font:{size:20}},
      },
        scales: {
          x:{barPercentage: 0.5,categoryPercentage: 0.1,
            grid: {display:false}
          },
          y:{
            min:0,
            max:100,
            ticks:{stepSize:1,}
          },

        },
        maintainAspectRatio : false,}
  return (
    <div className='h-[300px] w-[820px]'>
      <Bar data={barChartData} options={options} />
    </div>
  )
}
