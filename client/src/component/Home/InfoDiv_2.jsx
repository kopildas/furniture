import React from "react";
import {BsChatFill,BsCheckCircle} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
export default function InfoDiv_2() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row gap-20 items-center justify-between text-gray-900 md:p-16 md:mt-16 mt-20">

      <div className="flex flex-col text-lg md:ml-10 ">
        <p className="text-5xl font-semibold">Elevate your Space</p>
        <p className="text-5xl font-semibold"> With Uncompromising Quality</p>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto,
          doloribus!
        </p>
        <p className="mb-5">
          Dignissimos excepturi rem dolor consequuntur debitis
        </p>
        <p>Experience Unparalleled Quality</p>
        <p>Built to Last for generation</p>
        <p>Loved by Customers</p>
        <button className="rounded-lg px-4 w-44 py-2 border-2 border-gray-900 text-gray-800 hover:bg-gray-900 hover:text-gray-100 duration-300 mt-5" onClick={() => {
              navigate("/shop");
            }}>
          Shop Now
        </button>
      </div>


      <div className="relative">
        <img
          src="https://i.ibb.co/ynjCw3j/francesca-tosolini-9dyit-A0-YIHE-unsplash.jpg"
          alt="francesca-tosolini-9dyit-A0-YIHE-unsplash"
          className="w-72 md:w-[450px] rounded-md"
        />

        <div className="border rounded-lg py-1 -mt-80 -ml-8 md:-mt-[430px] md:-ml-24 bg-white absolute">
            <div className="flex p-2 gap-2">
            <img
          src="https://i.ibb.co/ynjCw3j/francesca-tosolini-9dyit-A0-YIHE-unsplash.jpg"
          alt="francesca-tosolini-9dyit-A0-YIHE-unsplash"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col">
            <p className="font font-semibold">Victor Adam </p>
            <p className="text text-sm">Interior Design and Styling </p>
        </div>
        <div className=" w-10 h-10 rounded-full bg-amber-700 flex items-center justify-center text-xl text-white
        ">
            <BsChatFill/>
        </div>
            </div>
        </div>
        <div className="md:block w-72 flex border rounded-lg -mt-7 md:-mt-[10px] md:ml-28 bg-white absolute">
            <div className="flex p-2 gap-2 items-center justify-center">
            <BsCheckCircle className="text-red-600"/>
        <div className="flex flex-col">
            <p className="text text-lg">We guarantee you comfort</p>
        </div>
            </div>
        </div>
      </div>


    </div>
  );
}
