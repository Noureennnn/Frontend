import { useState,useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { apiGet } from "../api";
import { Chart as ChartJS,ArcElement,Tooltip,Legend} from "chart.js"
ChartJS.register(ArcElement,Tooltip,Legend)
export const AgePieChart = () => {
    const [pieChartData,setpieChartData] = useState({datasets:[]});
    useEffect(() => {
        const fetchAgeData = async () => {
            try {
                const data = await apiGet("/events/agePieChart");
                const labels = Object.keys(data);
                const values = Object.values(data);
                const dataset = {
                  data:values,
                  backgroundColor : [
                    "#521cbd",
                    "#660428",
                    "#0483ba",
                    "#069912",

                  ],
                  borderWidth:1,
                };
                setpieChartData({labels,datasets:[dataset]});
            }catch (err){console.error("Error fetching data:", err.message);}
        };
        fetchAgeData();
    },[]);
    const options = {
      responsive : true,
      plugins : {
        legend:{position:'right',
        labels:{usePointStyle:true},},
        title: {display:true,text:"Attendees Age",font:{size:20 }},
     /* tooltip:{
        callbacks: {
          labels:(context) => {
            const label = context.label || '';
            const value = context.parsed || 0;
            return `${label}:${value} attendees`}}
      }, */
    },
  maintainAspectRatio : false,}
  return (
    <div className="h-[240px] w-[400px] mt-[15px] ">
      <Pie data={pieChartData} options={options} />
    </div>
  )
}
