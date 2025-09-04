import React from 'react';
import pic from "../assets/Addevent.jpeg";
import { Link } from 'react-router-dom';

export const UserSideBar = () => {
  return (
    <div className='w-[230px] min-h-screen bg-[#282828] shadow-[0_20px_50px_rgba(0,0,0,0.3)] pl-[9px] mt-[0px]'>
        <div>
        <div>
        <p className='text-[#D9D9D9] text-[15px] ml-[7px]'>Main Navigation</p>
        <Link to="/EventList" className='no-underline'><p className='text-[#D9D9D9] text-[13px] ml-[16px]'>All Events</p></Link>
        <Link to="/MyTickets" className='no-underline'><p className='text-[#D9D9D9] text-[13px] ml-[16px]'>My Tickets</p></Link>
        <p className='text-[#D9D9D9] text-[13px] ml-[16px]'>My Past Events</p>
        <p className='text-[#D9D9D9] text-[13px] ml-[16px] mb-[20px]'>FAQs</p>
        </div>
        <hr className='ml-[7px] mr-[12px]' />
        <p className='text-[#D9D9D9] text-[15px] ml-[7px]'>Support & Management</p>
        <p className='text-[#D9D9D9] text-[13px] ml-[16px]'>Feedback</p>
        <p className='text-[#D9D9D9] text-[13px] ml-[16px]'>Notifications</p>
        <p className='text-[#D9D9D9] text-[13px] ml-[16px]'>Contact Us</p>
        <p className='text-[#D9D9D9] text-[13px] ml-[16px] mb-[20px]'>Refund Policy</p>
        <hr className='ml-[7px] mr-[12px]' />
        <p className='text-[#D9D9D9] text-[15px] ml-[7px]'>Additional Features</p>
        <p className='text-[#D9D9D9] text-[13px] ml-[16px]'>Rate an Event</p>
        <hr className='ml-[7px] mr-[12px]' />
        <p className='text-[#D9D9D9] text-[15px] ml-[7px]'>Account Management</p>
        <Link to="/Login" className='no-underline'><p className='text-[#D9D9D9] text-[13px] ml-[16px] no-underline'>Logout</p></Link>
    </div> </div>
  )
}
