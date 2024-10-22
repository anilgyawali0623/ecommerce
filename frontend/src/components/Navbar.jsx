import React from "react";
import logo from "../pictures/logo.png";
import { IoMdSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { FaBagShopping } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="h-9 size-full  px-24  border-b-[1px] border-[#808080] py-9 flex  items-center justify-between">
      <div>
        <img src={logo} alt="" className="h-7 " />
      </div>
      <div className="text-[11px] ">
        <ul className="flex gap-x-4 text-[#262626] font-[500]">
          <li>Og Luxuray</li>
          <li>Og Natural</li>
          <li>Og Science</li>
          <li>Og Ayurverda</li>
          <li>Og wellness</li>
          <li>Offers</li>
        
        </ul>
      </div>

      <div className=" flex gap-x-4">
        <IoMdSearch />
        <CiUser />
        <FaBagShopping />
      </div>
    </div>
  );
}

export default Navbar;
