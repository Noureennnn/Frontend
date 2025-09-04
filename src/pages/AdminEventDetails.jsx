import { useState } from "react";
import { apiGet } from "../api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { SideBar } from "../components/SideBar";
import { Link } from "react-router-dom";
import leftarrow from "../assets/leftarrow.png"
import {EventNotification } from "../components/NotificationPanel";
export const AdminEventDetails = () => {
    const [eventDetails, setEventDetails] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        apiGet(`/events/${id}/EventDetails`).then((data) => setEventDetails(data));
    }, [id]);
    const handleSeatClick = (seatId, isBooked) => {
        if (isBooked) {
            return;
        }
        setSelectedSeats((prevSelected) => {
            if (prevSelected.includes(seatId)) {
                return prevSelected.filter((id) => id !== seatId);
            } else {
                return [...prevSelected, seatId];
            }
        });
    };
    if (!eventDetails) {
        return <div>Loading event details...</div>;
    }
    const availableSeatsCount = eventDetails.seats.filter(seat => !seat.isBooked).length;
    return (
        <div className="flex flex-row">
            <EventNotification />
            <SideBar />
            <div className="flex flex-col ml-[50px]">
                  <Link to={"/Events"} className="w-[100px] mt-[10px] mr-[0px]"><img src={leftarrow} className="w-[100px] mt-[10px] mr-[10px]" /></Link>
            <p className="text-[30px] text-center mr-[15%] font-[600] mt-[15px] mb-[0]">Event Details</p>
            <div className="flex flex-row">
            <div className="flex flex-col"><p className="mb-[0px]">Event name </p>
            <p className="w-[860px] p-[12px] pb-[3px] rounded-[10px] h-[30px] text-[16px] outline mt-[6px]">{eventDetails.title}</p></div>
            <div className="flex flex-col"><p className="ml-[40px] mb-[0px]">Event Date</p>
            <p className="w-[250px] p-[12px]  rounded-[10px] pb-[3px] ml-[40px] h-[30px] text-[16px] outline mt-[6px]">{eventDetails.date}</p></div></div>
            <div className="flex flex-row">
            <div className="flex flex-col"><p className="mb-[0px] mt-[2px]">Event Venue </p>
            <p className="w-[860px] p-[15px] rounded-[10px] h-[30px] text-[16px] outline mt-[6px] pb-[3px]">{eventDetails.venue}</p></div>
            <div className="flex flex-col"><p className="ml-[40px] mb-[0px] mt-[2px]">Event Time </p>
            <p className="w-[250px] p-[15px] rounded-[10px] pb-[3px] ml-[40px] h-[30px] text-[16px] outline mt-[6px]">{eventDetails.time}</p></div>
            </div>
            <div className="flex flex-col"><p className="mb-[0px]">Event Description </p>
            <p className="w-[1200px] h-[60px] p-[15px] rounded-[10px] text-[16px] outline pb-[3px] mt-[6px]">{eventDetails.description}</p></div>
            <div className="grid grid-cols-3 gap-[10px]">
            <div className="flex flex-col"><p className="mt-[5px] mb-[0px]">Ticket Price </p>
            <p className="w-[250px] p-[15px] rounded-[10px] text-[16px] outline mt-[5px]">{eventDetails.price}</p></div>
            <div className="flex flex-col"><p className="mt-[5px] mb-[0px]">Seat Amount </p>
            <p className="w-[250px] p-[15px] rounded-[10px] text-[16px] outline mt-[5px]">{eventDetails.seats.length}</p></div>
            <div className="flex flex-col"><p className="mt-[5px] mb-[0px]">Available Seats </p>
            <p className="w-[250px] p-[15px] rounded-[10px] text-[16px] outline mt-[5px]">{availableSeatsCount}</p></div>
            <div className="flex flex-col ml-[850px]"><p className="mt-[5px] mb-[0px]">Popularity </p>
            <p className="w-[250px] p-[15px] rounded-[10px] text-[16px] outline">{eventDetails.popularity}</p></div>
            </div>
                        <div className="flex flex-row">
                        <div className="flex flex-col outline p-[20px] rounded-[20px] w-[700px] items-center ml-[30px]">
                        <p className="font-[500] text-[30px] w-[500px] ml-[300px]">Seat Selection</p>
                        <div className="grid grid-cols-2">
                            <p className="text-[#6340B6] font-[700]">Available Seats</p>
                            <p className="text-[#a7a6a6] font-[700]">Unavailable Seats</p>
                        </div>
            <div className="flex flex-wrap-reverse gap-[10px] w-[700px]  justify-center">
                {eventDetails.seats.map((seat) => (
                    <div className={`rounded-[10px] w-[50px] h-[50px] flex justify-center items-center cursor-pointer
                ${seat.isBooked ? 'bg-[#ADADAD]' : ''}
                ${!seat.isBooked && selectedSeats.includes(seat._id) ? 'bg-[#6340b669]' :''}
                ${!seat.isBooked && !selectedSeats.includes(seat._id) ? 'bg-[#6340B6]' :''}`}
                        key={seat._id}
                        onClick={() => handleSeatClick(seat._id, seat.isBooked)}              >
                    </div>
                ))}
                
            </div>
            
            </div>
            <div className="w-[400px] flex flex-row items-end ml-[30px] mb-[20px]">
            <Link to={`/${id}/Edit`}><button type="submit" className="text-[white] bg-[#CF730A] p-[10px] float-end rounded-[15px] mr-[50px] text-[17px] w-[150px] h-[60px] font-[poppins] font-[800] pt-[0] pb-[0] border-[#CF730A] outline-none">
                Edit</button></Link>
            <Link to={`/${id}/Insights`}><button type="submit" className="text-[white] bg-[#1A6291] p-[10px] float-end rounded-[15px] mr-[50px] text-[13px] w-[150px] h-[60px] font-[poppins] font-[800] pt-[0] pb-[0] border-[#1A6291] outline-none">
                Attendee Insights</button></Link></div></div>
            </div>

            <div>
                
            </div>
        </div>
    );
};