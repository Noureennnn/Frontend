import { useEffect, useState } from "react";
import { apiGet } from "../api";
import { UserSideBar} from "../components/UserSideBar";

export const Tickets = () => {
    const [tickets, setTickets] = useState([]);
    useEffect(() => {
        apiGet("/Tickets/MyTickets").then((data) => setTickets(data))}
        ,[])
  return (
    <div className="bg-[#e3e3e3] flex">
      <UserSideBar />
      <div className="flex flex-col">
      <h1><p className="text-center">My Tickets</p></h1>
    <div className="grid grid-cols-3 gap-[80px] justify-center p-[20px]">
    {tickets.map((ticket) =>
    <div key={ticket.ticketCode} className="bg-[#ffffff] rounded-[30px] mt-[px] w-[350px] outline outline-[2px]">
    <img src={ticket.qrCode}  className="ml-[90px] mt-[10px]"/>
    <p className="font-[500] text-center">Ticket Code: {ticket.ticketCode}</p>
    <p className="font-[500] text-center">Event: {ticket.event.title}</p>
    <p className="font-[500] text-center">Seat Number: {ticket.seatNumber}</p>
    <h2>{ticket.event.venue}</h2>


    </div>
    )}</div></div>
    </div>
  )
}
