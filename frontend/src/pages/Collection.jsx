import React from "react";
import { useParams } from "react-router-dom";
import BannerImage from "../components/BannerImage";
import { CiFilter } from "react-icons/ci";

function Collection() {
  const { name } = useParams();
  return (
    <div>
      <BannerImage />

      <div className="w-full h-full px-28 ">
        <div className="w-40 pb-4">
          <div className="flex justify-between items-center">
            <h1>filter</h1>
            <CiFilter />
          </div>
          <div className="w-[100%]">
            <div>
              <h1 className="py-2 px-1 bg-pink-300 rounded-2xl">Availabilty</h1>
           
            <div>
                <div  className="flex justify-between">
                  <p>sdasd</p>
                  <input type="radio" />
                  <input type="radio" /> 
                </div>
                
                <div  className="flex justify-between">
                  <p>sdasd</p>
                </div>
                <div  className="flex justify-between">
                  <p>sdasd</p>
                  <input type="radio" />
                </div>
            </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default Collection;
