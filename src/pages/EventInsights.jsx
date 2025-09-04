import { useParams } from "react-router-dom"
import  { AgeRangeChart } from "../components/AgeRangeChart"
import { SideBar } from "../components/SideBar";
import { apiGet } from "../api";
import { useEffect, useState } from "react";
import leftarrow from "../assets/leftarrow.png";
import { Link } from "react-router-dom";
import { AgePieChart } from "../components/AgePieChart";
import { Navbar } from "../components/Navbar";
import { EventLocationBarChart } from "../components/EventLocationBarChart";
import { LocationTable } from "../components/LocationTable";
import { EventGenderChart } from "../components/EventGenderChart";


export const EventInsights = () => {
  const [eventDetails,setEventDetails] = useState("");
    const { id } = useParams();
        useEffect(() => {
            apiGet(`/events/${id}/EventDetails`).then((data) => setEventDetails(data));
        }, [id]);
  return (
    <div className="flex flex-row bg-[#ececec]">
      <SideBar />
      <div className="flex flex-col">
      <div className="mt-[0] bg-[#ffffff]  mb-[30px]">
              <div className="flex flex-row w-[1300px]">
      <Link to={`/${id}/EventDetails`}><img src={leftarrow} className="w-[90px] mt-[5px] mr-[0px]" /></Link>
        <p className="font-[600] text-[20px] mb-[0px] ml-[px] ">Attendee Insights - {eventDetails.title}</p></div>
        <p className="text-[13px] mt-[0px] ml-[80px] mb-[0px] w-[300px]">•Venue: {eventDetails.venue}</p>
        <p className="text-[13px] mt-[0px] ml-[80px] mb-[0px] w-[300px]">•Date: {eventDetails.date}</p>
        <p className="text-[13px] mt-[0px] ml-[80px] w-[300px]">•Time: {eventDetails.time}</p>
        <div className=" flex float-end mr-[200px] mt-[-120px] "><Navbar /></div></div>
           <div className="flex flex-col gap-[20px]">
            <div className="flex flex-row">
          <div className="bg-[#ffffff] h-[360px] w-[800px] rounded-[20px] ml-[30px]">
        <AgeRangeChart eventId={id}/>
        </div>
        <div className="bg-[white] w-[300px] p-[10px] rounded-[20px] mt-[px] ml-[80px]">
        <EventGenderChart eventId={id} /></div></div>
        <div className="bg-[#ffffff] rounded-[20px] h-[360px] w-[1000px] ml-[30px]">
        <EventLocationBarChart eventId={id} /></div>
        </div>
</div>
        </div>
      
  )
}
