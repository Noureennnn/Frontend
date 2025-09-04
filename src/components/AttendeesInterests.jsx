import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { apiGet } from "../api";

ChartJS.register(ArcElement, Tooltip, Legend);

export const AttendeesInterests = () => {
    const [interestsData,setInterestsData] = useState({labels:[],datasets:[{data:[]}]});
    useEffect(() => {
        apiGet("/events/AttendeesInterests").then((data) => {
        const events = data.map((item) => item.eventName );
        const perc = data.map((item) => item.percentage);

        setInterestsData({
        labels:events,
        datasets: [{
            data:perc,
            backgroundColor: [
                    "#f74040",
                    "#3896e8",
                    "#f7fa34",
                    "#ca48db",
                    "#880994",
                    "#c41064",
                    "#cc0e18",
            ],
            borderWidth:1,
        },],
    });
    }).catch((err) => console.error("Failed to load data",err));
    },
    []);
    const options = {
  responsive: true,
  plugins: {
    legend: { position: "right", labels: { usePointStyle: true } },
    title: { display: true, text: "Attendee Interests", font: { size: 20 } },
  },
  cutout: "70%",
};

  return (
    <div className="w-[300px] ml-[70px]">
    <Doughnut data={interestsData} options={options} />
    </div>
  )
};