import { useEffect } from "react";
import { apiGet } from "../api";
import { useState } from "react";
import { GenderChart } from "../components/GenderChart";
import { SideBar } from "../components/SideBar";
import "../assets/style.css";
import Event from "../assets/Event.png";
import Booking from "../assets/Booking.png";
import Revenue from "../assets/revenue.png";
import { LocationsBarChart } from "../components/LocationsBarChart";
import { AgePieChart } from "../components/AgePieChart";
import { AttendeesInterests } from "../components/AttendeesInterests";
import { LocationTable } from "../components/LocationTable";




export const Dashboard = () => {
const [dashboard,setDashboard] = useState(null);
      useEffect(() => {
        apiGet('/events/dashboard').then((data) => setDashboard(data));
    },[])
    if(!dashboard){return <div>Loading..</div>;}
  return (
    <div className="flex flex-row bg-[#eeeded]">
    <SideBar />
    <div className="grid grid-cols-3 gap-2">
    <div className="flex mt-[40px] ml-[40px] h-[65px] w-[200px] p-[10px] bg-[#ffffff] rounded-[10px]">
      <img src={Event}  className="w-[50px] h-[50px] mt-[10px] ml-[5px] flex"/>
      <div className="flex flex-col">
      <p className="text-[#797777e2] mt-[0px] ml-[25px] font-[600] flex mb-[2px]">Events</p>
    <p className="flex ml-[20px] mt-[0px] mb-[30px] text-[#1968AF] font-[700] text-[20px]">{dashboard.totalEvents} Events</p></div>
    </div>
    <div className="flex mt-[40px] ml-[40px] h-[65px] w-[200px] p-[10px] bg-[#ffffff] rounded-[10px]">
      <img src={Booking}  className="w-[60px] h-[60px] ml-[5px] flex"/>
      <div className="flex flex-col">
      <p className="text-[#797777e2] mt-[0px] ml-[25px] font-[600] flex mb-[2px]">Bookings</p>
    <p className="flex ml-[20px] mt-[0px] mb-[30px] text-[#F29D38] font-[700] text-[20px] text-center">{dashboard.totalTickets}</p></div>
    </div>
    <div className="flex mt-[40px] ml-[40px] h-[65px] w-[200px] p-[10px] bg-[#ffffff] rounded-[10px]">
      <img src={Revenue}  className="w-[60px] h-[60px] ml-[5px] flex"/>
      <div className="flex flex-col">
      <p className="text-[#797777e2] mt-[0px] ml-[25px] font-[600] flex mb-[2px]">Revenue</p>
    <p className="flex ml-[20px] mt-[0px] mb-[30px] text-[#197920] font-[700] text-[20px]">{dashboard.revenue}$</p></div>
    </div>
    <div className="flex flex-col">
      <div className="grid grid-cols-3 gap-[300px]">
        <div className="bg-[white] w-[300px] p-[10px] rounded-[20px] mb-[20px] mt-[30px] ml-[30px]">
          <GenderChart /></div>
          <div className="bg-[#ffffff] rounded-[20px] h-[280px] w-[400px] ml-[90px] mt-[30px]">
              <AgePieChart /></div>
              <div className="bg-[#ffffff] ml-[230px] w-[400px] h-[280px] mt-[30px] rounded-[20px]">
                <AttendeesInterests /></div>
      </div>
      <div className="flex flex-row">
    <div className='bg-[white] justify-end w-[840px] p-[20px] rounded-[20px]'>
      <LocationsBarChart /></div>
      <LocationTable /></div>
</div>
      </div>
    </div>
  )
}
