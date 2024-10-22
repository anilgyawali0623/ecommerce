import React from "react";
import logo from "../pictures/asset29.jpeg";
function ShopBrand() {
  return (
    <div  className="bg-white">
      <h1 className="text-center font-medium text-[20px] pb-4">
        Shop By Brands
      </h1>

      <div className="mx-[144px] py-5 flex gap-x-4">
        <img src={logo} className="h-48 rounded-xl cursor-pointer" alt="" />
        <img src={logo} className="h-48 rounded-xl cursor-pointer" alt="" />
        <img src={logo} className="h-48 rounded-xl cursor-pointer" alt="" />
        <img src={logo} className="h-48 rounded-xl cursor-pointer" alt="" />

      </div>
    </div>
  );
}

export default ShopBrand;
