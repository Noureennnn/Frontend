import { useState } from "react";
import { apiPost } from "../api";
import {SideBar} from "../components/SideBar";
export const CreateEvent = () => {
    const [title,setTitle] = useState("");
    const [date,setDate] = useState("");
    const [venue,setVenue] = useState("");
    const [time,setTime] = useState("");
    const [rows,setRows] = useState("");
    const [seatsPerRow,setSeatsPerRow] = useState("");
    const [price,setPrice] = useState("");
    const [description,setDescription] = useState("");
    const [status,setStatus] = useState("");
    const [popularity,setPopularity] = useState("")
    const handleCreate = async(e) =>{
        try{
        e.preventDefault();
        await apiPost("/events/create",{title,date,venue,time,price,rows,seatsPerRow,description,status,popularity});
        }catch(err) {alert("Server Error...Try Again Later")}
    }
    return (
    <div className="flex flex-row">
    <SideBar />
    <div className="flex flex-col ml-[30px]">
    <p className="text-[30px] text-center mr-[15%] font-[600] mt-[15px]">Create Event</p>
    <form onSubmit={(e) => handleCreate(e)}>
    <div className="flex flex-row">
    <div className="flex flex-col"><p className="mb-[5px]">Event name </p>
    <input className="w-[860px] p-[15px] rounded-[10px] h-[30px] text-[19px]"
    type="text"
    value={title}
    placeholder="Enter Event title"
    id="title"
    onChange={(e) => setTitle(e.target.value)}
    /></div>
    <div className="flex flex-col"><p className="ml-[40px] mb-[5px]">Event Date</p>
    <input className="w-[250px] p-[15px] rounded-[10px] ml-[40px] h-[30px] text-[19px]"
    type="text"
    value={date}
    placeholder="Enter Title Date"
    id="date"
    onChange={(e)=> setDate(e.target.value)}
    /></div></div>
    <div className="flex flex-row">
    <div className="flex flex-col"><p className="mb-[5px]">Event Venue </p>
    <input className="w-[860px] p-[15px] rounded-[10px] h-[30px] text-[19px]"
    type="text"
    value={venue}
    placeholder="Enter Event Venue"
    id="venue"
    onChange={(e) => setVenue(e.target.value)}
    /></div>
    <div className="flex flex-col"><p className="ml-[40px] mb-[5px]">Event Time </p>
    <input className="w-[250px] p-[15px] rounded-[10px] ml-[40px] h-[30px] text-[19px]"
    type="text"
    value={time}
    placeholder="Enter Event Time"
    id="time"
    onChange={(e) => setTime(e.target.value)}
    /></div></div>
    <div className="flex flex-col"><p className="mb-[5px]">Event Description </p>
    <input className="w-[1200px] h-[60px] p-[15px] rounded-[10px] text-[19px]"
    type="text"
    value={description}
    placeholder="Enter Event title"
    id="title"
    onChange={(e) => setDescription(e.target.value)} /></div>
    <div className="grid grid-cols-3 gap-[150px]">
    <div className="flex flex-col"><p className="mt-[20px] mb-[5px]">Ticket Price </p>
    <input className="w-[250px] p-[15px] rounded-[10px] text-[19px]"
    value={price}
    placeholder="Enter Title Price"
    onChange={(e)=> setPrice(e.target.value)}
    /></div>
    <div className="flex flex-col"><p className="mt-[20px] mb-[5px]">Rows:  </p>
    <input className="w-[250px] p-[15px] rounded-[10px] ml-[0px] text-[19px]"
    value={rows}
    placeholder="Enter rows"
    onChange={(e)=> setRows(e.target.value)}
    /></div>
     <div className="flex flex-col"><p className="mt-[20px] mb-[5px]">Seats Per Row </p>
    <input className="w-[250px] p-[15px] rounded-[10px] ml-[0px] text-[19px]"
    value={seatsPerRow}
    placeholder="Enter Seats Per Row"
    onChange={(e)=> setSeatsPerRow(e.target.value)}
    /></div></div>
    <div className="grid grid-cols-3">
    <div className="flex flex-col"><p className="mt-[20px] mb-[5px]">Status </p>
     <select className="w-[250px] p-[15px] rounded-[10px] ml-[0px] text-[19px]"
        value={status}
        onChange={(e)=>setStatus(e.target.value)}>
        <option value="" disabled selected>Status</option>
        <option value="Up-Coming">Up-Coming</option>
        <option value="Pending">Pending</option>
        <option value="Closed">Closed</option>
        </select></div>
        <div className="flex flex-col ml-[50px]"><p className="mt-[20px] mb-[5px]">Popularity </p>
     <select className="w-[250px] p-[15px] rounded-[10px] ml-[0px] text-[19px]"
        value={popularity}
        onChange={(e)=>setPopularity(e.target.value)}>
                    <option value="" disabled selected>Popularity</option>
                    <option value="Unpopular">Unpopular</option>
                    <option value="Neutral">Neutral</option>
                    <option value="Popular">Popular</option>
                    <option value="Highly Popular">Highly Popular</option>
                    </select></div></div>
    <button type="submit" className="text-[white] bg-[#1A6291] p-[20px] float-end rounded-[15px] mr-[50px] mt-[0px] text-[20px] w-[200px] h-[60px] font-[poppins] font-[800] pt-[0] pb-[0] border-[#1A6291]">Create Event</button>
    </form></div>

    </div>
    )
}
