import { useState,useEffect } from "react";
import { apiGet } from "../api";
import { UserEventDetails } from "./UserEventDetails";
import { Link,useNavigate } from "react-router-dom";
import "../assets/style.css";
import { UserSideBar } from "../components/UserSideBar";
import cash from "../assets/cash.jpg";
import arrow from "../assets/arrow3.png";
import Ticket from "../assets/ticket.png"
import Seat from "../assets/Seat.png";
import { Navbar } from "../components/Navbar";
export const UserEvents = () => {
    const [events,setEvents] = useState([]);
    const [searchQuery,setSearchQuery] = useState("")
    const navigate = useNavigate();
    useEffect(() => {
        apiGet("/events/all-events").then((data) => setEvents(data));
    },[]);
    const handleClick = (eventId) =>{
        navigate(`/${eventId}/Details`); };

        const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()));
  const upcomingEvents =filteredEvents.filter((e) => e.status === "Up-Coming");
  const pendingEvents = filteredEvents.filter((e) => e.status === "Pending");
  const closedEvents =  filteredEvents.filter((e) => e.status === "Closed");

  const renderEvents = (list) =>
    list.map((event) => (
      <div
        key={event._id}
        className="bg-[white] m-[20px] p-[10px] rounded-[10px] w-[330px] h-[200px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] pb-[0px]"
      >
        <p className="text-center mb-[10px] text-[17px] font-[600]">{event.title}</p>
        <div className="grid grid-cols-3 gap-[30px] mb-[0px]">
          <div className="flex flex-row">
            <img src={cash} className="w-[20px] h-[13px] mt-[15px] mr-[5px]" />
            <p className="text-[#0F5D13] text-[14px] font-[600]">{event.price}$</p>
          </div>
          <div className="flex flex-row">
            <img src={Seat} className="w-[20px] h-[19px] mt-[12px] mr-[5px]" />
            <p className="text-[#EB3223] text-[14px] font-[600]">{event.seats.length}</p>
          </div>
          <div className="flex flex-row">
            <img src={Ticket} className="w-[20px] h-[19px] mt-[15px] mr-[5px]" />
            <p className="text-[#8B2CF5] text-[14px] font-[600]">{event.ticketsSold}</p>
          </div>
        </div>
        <hr className="m-[0]" />
        <div className="flex flex-row">
          <p className="text-[#a2a1a1e2] mr-[10px] text-[14px] m-[0] font-[600]">Venue:</p>
          <p className="text-[14px] m-[0] font-[600]">{event.venue}</p>
        </div>
        <div className="flex flex-row">
          <p className="text-[#a2a1a1e2] mr-[10px] text-[14px] m-[0] font-[600]">Date:</p>
          <p className="text-[14px] m-[0] font-[600]">{event.date}</p>
        </div>
        <div className="flex flex-row">
          <p className="text-[#a2a1a1e2] mr-[10px] text-[14px] m-[0] font-[600]">Time:</p>
          <p className="text-[14px] m-[0] font-[600]">{event.time}</p>
        </div>
        <img
          src={arrow}
          onClick={() => handleClick(event._id)}
          className="w-[55px] float-end mr-[1px] mb-[80px] mt-[-30px] cursor-pointer"
        />
      </div>
    ));

  return (

    <div className="bg-[#eeeded] min-h-screen flex">
      <UserSideBar />
      <div className="flex flex-col">
              <div className="bg-[#ffffff] h-[120px] w-[1300px] sm:w-[640px]">
                <div className="mr-[50px] mt-[30px]"><Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} /></div>
              </div>
      <div className="flex flex-row  w-full ml-[20px] mt-[20px]">
        <div>
          <p className="text-[20px] font-[700] mb-[20px] ml-[120px] text-[#1e1ebd]">Upcoming Events</p>
          {renderEvents(upcomingEvents)}
        </div>
        <div>
          <p className="text-[20px] font-[700] mb-[20px] ml-[120px] text-[#2abe2c]">Pending Events</p>
          {renderEvents(pendingEvents)}
        </div>
        <div>
          <p className="text-[20px] font-[700] mb-[20px] ml-[120px] text-[#c32d2d]">Closed Events</p>
          {renderEvents(closedEvents)}
        </div></div>
      </div>
    </div>
  );
};