import React from "react";
import HeroPic from "../../img/modern-living-room-interior-design (1).jpg";
import { useState, useEffect } from 'react';


  


export default function Home() {
  const [data, setData] = useState({ message: '' });

  useEffect(() => {
    fetch('http://localhost:4001/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);
  return (
    <div className="mt-20 m-10 p-10 z-40">
      <section>
        <div className="flex">
          <div>
            <p className="text-6xl font-bold">
              Perfect <br /> Harmony: <br />
              Comfort & Style{" "} 
            </p>
            <p>{data.message}</p>
            <p className="text-xl mt-5 text-gray-500">
              Explore furniture that harmoniously combines comfort <br /> and
              style to elevate your home
            </p>
            <button className="rounded-lg px-4 py-2 border-2 border-gray-900 text-gray-800 hover:bg-gray-900 hover:text-gray-100 duration-300 mt-5">
              Explore More
            </button>
          </div>
          <div>
            <img
              src={HeroPic}
              alt="hero pic"
              className="object-cover w-[550px] h-[400px] rounded-[3rem] ml-48"
            />
          </div>
        </div>
        <div className="h-20 w-3/4 rounded-[6rem] -mt-10 bg-slate-50 shadow-md shadow-gray-100 relative flex">
          <div className="flex flex-row items-center justify-between gap-5 w-full p- ">
            <div className="flex flex-col w-1/5 items-center justify-center">
              <p className="text-md font-semibold">Confort</p>
              <p>Cozy Seating</p>
            </div>
            <div className="flex flex-col w-1/5 items-center justify-center">
              <p className="text-md font-semibold">Confort</p>
              <p>Cozy Seating</p>
            </div>
            <div className="flex flex-col w-1/5 items-center justify-center">
              <p className="text-md font-semibold">Confort</p>
              <p>Cozy Seating</p>
            </div>
            <div className="flex flex-col w-1/5 items-center justify-center">
              <p className="text-md font-semibold">Confort</p>
              <p>Cozy Seating</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
