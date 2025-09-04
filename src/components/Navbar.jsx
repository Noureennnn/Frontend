import { useState } from "react";
export const Navbar = ({searchQuery,onSearchChange}) => {
  return (
    <div className="float-end">
        <input type="text"
        value={searchQuery}
        placeholder="Search"
        onChange={(e)=>onSearchChange(e.target.value)}
        className="text-[15px] p-[20px] rounded-[20px]  border border-[#b5b2b2] focus:outline-none focus:border-[#b5b2b2] w-[200px]"/>
    </div>
  )
}
