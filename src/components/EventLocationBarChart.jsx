import { Bar } from 'react-chartjs-2';
import { apiGet } from "../api";
import { Chart as ChartJS,LinearScale,Tooltip,Legend,CategoryScale,BarElement,Title} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useState } from 'react';
import { useEffect } from 'react';
ChartJS.register(CategoryScale,LinearScale,BarElement,Tooltip,Legend,Title,ChartDataLabels);

export const EventLocationBarChart = ({eventId}) => {
    const [barChartData,setBarChartData] = useState({datasets : []});
    useEffect(() => {
      const fetchLocationData = async() => {
        try{
          const locationdata = await apiGet(`/events/${eventId}/eventLocationsBarChart`);
          const labels = locationdata.map(item=>item._id);
          const totals = locationdata.map(item=>item.total);
          
          const dataset = [{
            labels: 'Attendees by Age',
            data: totals,
            barThickness: 30,
            backgroundColor : [
                    "#521cbd",
                    "#660428",
                    "#069912",
                    "#c27b0a",
                    "#880994",
                    "#c41064",
                    "#cc0e18",],
            borderWidth:1,
            borderRadius:999
          }];
          setBarChartData({labels:labels,datasets:dataset});
        }catch(err){console.error("Couldn't fetch data");}
    }
  fetchLocationData();
      }, [eventId]);
      const options = {
      responsive : true,
      plugins: {
        legend: { display: false,},
        title: {display:true,text:"Attendee Locations", font: {size:20}}
      },
        scales: {
          x:{barPercentage: 0.5,categoryPercentage: 0.8,
            grid: {
                display: false
          },},
          y:{
            min:0,
            max:30,
            ticks:{stepSize:1,}
          },

        },
        maintainAspectRatio : false,}
  return (
    <div className='h-[300px] w-[900px]'>
      <Bar data={barChartData} options={options} />
    </div>
  )
}