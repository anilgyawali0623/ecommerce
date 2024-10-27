import React, { useState } from "react";
import logo from "../pictures/logo.png";
import { IoMdSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Navbar({ toggleModal }) {
  return (
    <div className="h-9 size-full  px-24  border-b-[1px] border-[#808080] py-9 flex  items-center justify-between">
      <div>
        <img src={logo} alt="" className="h-7 " />
      </div>
      <div className="text-[11px] ">
        <ul className="flex gap-x-4 text-[#262626] font-[500]">
          <Link to="/collections/og-luxuray">
            <li>Og Luxuray</li>
          </Link>

          <Link to="/collections/og-natural">
            <li>Og Natural</li>
          </Link>

          <Link to="/collections/og-science">
            <li>Og Science</li>
          </Link>

          <Link to="/collections/og-wellness">
            <li>Og Wellness</li>
          </Link>

          <Link to="/collections/offers">
            <li>Offers</li>
          </Link>
        </ul>
      </div>

      <div className=" flex gap-x-4">
        <IoMdSearch />
        <CiUser onClick={toggleModal} className="cursor-pointer" />
        <FaBagShopping />
      </div>
    </div>
  );
}

export default Navbar;
