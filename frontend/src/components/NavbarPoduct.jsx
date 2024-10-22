import React from "react";
import { FaToiletPaper } from "react-icons/fa6";
import manProduct from "./navbarproduct/manProduct.jpeg";
function NavbarPoduct() {
  let imageArray = [
    { imgSrc: " ./navbarproduct/fragrance.jpeg", title: "fragrance" },
    { imgSrc: "./navbarproduct/skin.jpeg", title: "skin" },
    { imgSrc: "./navbarproduct/hair.jpeg", title: "hair" },
    { imgSrc: "./navbarproduct/face.jpeg", title: "face" },
  ];
  return (
    <div className="h-10 size-full px-24 border-b-[1px] border-[#808080] py-12 flex items-center justify-center">
 
      <div className="flex gap-x-10 py-10">
      <div  className="cursor-pointer">
            <img
              src="./navbarproduct/fragrance.jpeg"
              className="h-12"
              
            />
            <p className="text-center text-[13px]">fasf</p>
          </div>
      </div>
    </div>
  );
}

export default NavbarPoduct;
