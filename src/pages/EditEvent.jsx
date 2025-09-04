import { useState,useEffect } from "react";
import { apiDelete, apiGet, apiPut } from "../api";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { SideBar } from "../components/SideBar";

export const EditEvent = () => {
    const navigate = useNavigate();
const { id } = useParams();
        const [title,setTitle] = useState();
        const [date,setDate] = useState("");
        const [venue,setVenue] = useState("");
        const [time,setTime] = useState("");
        const [rows,setRows] = useState("");
        const [seatsPerRow,setSeatsPerRow] = useState("");
        const [price,setPrice] = useState("");
        const [description,setDescription] = useState("");
        const [status,setStatus] = useState("");
        const [popularity,setPopularity] = useState("")


useEffect(() => {
    const fetchEvent = async() => {
            const eventData = await apiGet(`/events/${id}/EventDetails`);
            setTitle(eventData.title);
            setVenue(eventData.venue);
            setTime(eventData.time);
            setRows(eventData.rows);
            setSeatsPerRow(eventData.seatsPerRow);
            setPrice(eventData.price);
            setDescription(eventData.description);
            setDate(eventData.date);
            setStatus(eventData.status);
            setPopularity(eventData.popularity)
                };
                fetchEvent();}, [id]);
const handleUpdate = async(e) =>{
    e.preventDefault();
    await apiPut(`/events/${id}/update`,{title,date,venue,rows,seatsPerRow,time,price,description,status,popularity});
    alert("Event Updated Successfully");
    navigate(`/${id}/EventDetails`)
}
const handleDelete = async(e) => {
    e.preventDefault();
    const isConfirmed = window.confirm("Are you Sure you Want to delete this event?")
    if(isConfirmed){
    e.preventDefault();
    await apiDelete(`/events/${id}/delete`);
        navigate("/Events")
}}
  return (
    <div> 
           <div className="flex flex-row">
        <SideBar />
        <div className="flex flex-col ml-[30px]">
        <p className="text-[30px] text-center mr-[15%] font-[600] mt-[15px]">Edit Event</p>
        <form onSubmit={(e) => handleUpdate(e)}>
        <div className="flex flex-row">
        <div className="flex flex-col"><p className="mb-[5px]">Event name </p>
        <input className="w-[860px] p-[15px] rounded-[10px] h-[30px] text-[19px]"
        type="text"
        value={title}
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        /></div>
        <div className="flex flex-col"><p className="ml-[40px] mb-[5px]">Event Date</p>
        <input className="w-[250px] p-[15px] rounded-[10px] ml-[40px] h-[30px] text-[19px]"
        type="text"
        value={date}
        id="date"
        onChange={(e)=> setDate(e.target.value)}
        /></div></div>
        <div className="flex flex-row">
        <div className="flex flex-col"><p className="mb-[5px]">Event Venue </p>
        <input className="w-[860px] p-[15px] rounded-[10px] h-[30px] text-[19px]"
        type="text"
        value={venue}
        id="venue"
        onChange={(e) => setVenue(e.target.value)}
        /></div>
        <div className="flex flex-col"><p className="ml-[40px] mb-[5px]">Event Time </p>
        <input className="w-[250px] p-[15px] rounded-[10px] ml-[40px] h-[30px] text-[19px]"
        type="text"
        value={time}
        id="time"
        onChange={(e) => setTime(e.target.value)}
        /></div></div>
        <div className="flex flex-col"><p className="mb-[5px]">Event Description </p>
        <input className="w-[1200px] h-[60px] p-[15px] rounded-[10px] text-[19px]"
        type="text"
        value={description}
        id="title"
        onChange={(e) => setDescription(e.target.value)} /></div>
        <div className="grid grid-cols-3 gap-[150px]">
        <div className="flex flex-col"><p className="mt-[20px] mb-[5px]">Ticket Price </p>
        <input className="w-[250px] p-[15px] rounded-[10px] text-[19px]"
        value={price}
        id="price"
        onChange={(e)=> setPrice(e.target.value)}
        /></div>
        <div className="flex flex-col"><p className="mt-[20px] mb-[5px]">Rows:  </p>
        <input className="w-[250px] p-[15px] rounded-[10px] ml-[0px] text-[19px]"
        value={rows}
        id="rows"
        onChange={(e)=> setRows(e.target.value)}
        /></div>
         <div className="flex flex-col"><p className="mt-[20px] mb-[5px]">Seats Per Row </p>
        <input className="w-[250px] p-[15px] rounded-[10px] ml-[0px] text-[19px]"
        value={seatsPerRow}
        id="seatsperrow"
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
                    </select>
        </div>
        </div>
        <button type="submit" className="text-[white] bg-[#CF730A] p-[20px] float-end rounded-[15px] mb-[0] mr-[50px] mt-[0px] text-[20px] w-[200px] h-[60px] font-[poppins] font-[800] pt-[0] pb-[0] border-[#CF730A] outline-none"
        >Save</button>
        <button type="submit" className="text-[white] bg-[#cf0a0a] p-[20px] float-end rounded-[15px] mr-[50px] mt-[0px] text-[20px] w-[200px] h-[60px] font-[poppins] font-[800] pt-[0] pb-[0] border-[#1A6291]"
        onClick={handleDelete}>Delete Event</button>
        </form></div>
    
        </div></div>
  )
}
