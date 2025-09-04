import React from 'react';
import pic from "../assets/Addevent.jpeg";
import { Link } from 'react-router-dom';
import { EventNotification } from "../components/NotificationPanel"

export const SideBar = () => {
  return (
    
    <div className='w-[230px] min-h-screen bg-[#282828] shadow-[0_20px_50px_rgba(0,0,0,0.3)] pl-[9px] mt-[0px]'>
      <EventNotification />
        <Link to='/Create'><div className='mt-[10px] ml-[9px] mr-[14px] mb-[19px] bg-[#454444] p-[12px] rounded-[10px] flex flex-row  hover:bg-[#515050] transition duration-300 ease-in-out'>
            <img src={pic}  className='w-[50px] rounded-[10px]'/>
            <p className='text-[white] text-[12px] w-[100px] ml-[10px]'>Add Quick Event</p>
        </div></Link>
        <hr className='ml-[7px] mr-[12px]' />
        <div>
        <p className='text-[#D9D9D9] text-[15px] ml-[7px]'>Main Navigation</p>
        <Link to="/Dashboard" className='no-underline'><p className='text-[#D9D9D9] text-[13px] ml-[16px]'>Dashboard</p></Link>
        <Link to="/Events" className='no-underline'><p className='text-[#D9D9D9] text-[13px] ml-[16px]'>Manage Events</p></Link>
        <p className='text-[#D9D9D9] text-[13px] ml-[16px]'>Booking & Tickets</p>
        <p className='text-[#D9D9D9] text-[13px] ml-[16px]'>Attendee Insights</p>
        <p className='text-[#D9D9D9] text-[13px] ml-[16px] mb-[20px]'>Analytics & Reports</p>
        </div>
        <hr className='ml-[7px] mr-[12px]' />
        <p className='text-[#D9D9D9] text-[15px] ml-[7px]'>Support & Management</p>
        <p className='text-[#D9D9D9] text-[13px] ml-[16px]'>Contact Support</p>
        <p className='text-[#D9D9D9] text-[13px] ml-[16px]'>Notifications</p>
        <p className='text-[#D9D9D9] text-[13px] ml-[16px] mb-[20px]'>Settings</p>
        <hr className='ml-[7px] mr-[12px]' />
        <p className='text-[#D9D9D9] text-[15px] ml-[7px]'>Additional Features</p>
        <p className='text-[#D9D9D9] text-[13px] ml-[16px]'>Marketing</p>
        <p className='text-[#D9D9D9] text-[13px] ml-[16px] mb-[20px]'>Event Categories</p>
        <hr className='ml-[7px] mr-[12px]' />
        <p className='text-[#D9D9D9] text-[15px] ml-[7px]'>Account Management</p>
        <p className='text-[#D9D9D9] text-[13px] ml-[16px]'>Manage Users</p>
        <Link to="/Login" className='no-underline'><p className='text-[#D9D9D9] text-[13px] ml-[16px] no-underline'>Logout</p></Link>
    </div>
  )
}
