import React from "react";
import HeroPic from "../../img/modern-living-room-interior-design (1).jpg";
import { useState, useEffect } from 'react';

import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import Category from "../../component/Home/Category";
import InfoDiv_1 from "../../component/Home/InfoDiv_1";
// import Products from "../../component/Home/Cata_wise_product";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";
import axios from "axios";
import { toast } from "react-toastify";
import Cata_wise_product from "../../component/Home/Cata_wise_product";
import InfoDiv_2 from "../../component/Home/InfoDiv_2";
  


export default function Home() {
  const [data, setData] = useState({ message: '' });
  const [{ product, user,updateProd }, dispatch] = useStateValue();


  async function fetchingData() {
    console.log("holo");
    if (data) {
      try {
        // setUpdateFeature(!updateFeature);
        dispatch({
          type: actionType.UPDATE_PRODUCTS,
          updateProd: false,
        });
        console.log("jhda")

        const response = await axios.get(
          `${import.meta.env.VITE_LINK}/products`
        );
        
        console.log(response.data.product);
        setData(response.data.product);
        // toast.success("Product added succesfully..!");
        dispatch({
          type: actionType.SET_PRODUCTS,
          product: response.data.product,
        });
        localStorage.removeItem("product");
        localStorage.setItem("product", JSON.stringify(response.data.product));
      } catch (err) {
        const responseText = err.response.data;

        console.log(responseText);
        toast.error(responseText.msg);
        console.log(err);
      }
    }
  }



  useEffect(() => {

    fetchingData();

    // fetch('http://localhost:4001/')
    //   .then(response => response.json())
    //   .then(data => setData(data))
    //   .catch(error => console.error('Error:', error));
  }, []);

  console.log(data);
  return (
    <div className="mt-16 p-5 md:m-10 md:p-10 z-40">
      <section>
      <div className="bg-slate-30 block md:hidden mb-5">
            <img
              src={HeroPic}
              alt="hero pic"
              className="object-cover w-full rounded-[3rem]  xl:ml-32"
            />
          </div>
        <div className="flex flex-col md:flex-row">
          <div className="bg-slate-00 p-2 flex flex-col md:items-start md:justify-start items-center justify-center">
            <p className="text-3xl md:max-lg:text-4xl lg:text-5xl font-bold text-gray-900 flex flex-col md:items-start md:justify-start items-center justify-center">
              <p>Perfect</p>
               <p>Harmony:</p> 
             <p> Comfort & Style{" "} </p>
            </p>
            <p className="text-xl mt-5 text-gray-500 flex flex-col md:items-start md:justify-start items-center justify-center">
              <p className="hidden md:block">Explore furniture that harmoniously combines comfort </p>
              <p className="block md:hidden">Explore furniture that</p>
              <p className="block md:hidden"> combines comfort and
              style to </p>
              
              <p>elevate your home</p>
            </p>
            <button className="rounded-lg px-4 py-2 border-2 border-gray-900 text-gray-800 hover:bg-gray-900 hover:text-gray-100 duration-300 mt-5">
              Explore More
            </button>
          </div>
          <div className="bg-slate-30 hidden md:block">
            <img
              src={HeroPic}
              alt="hero pic"
              className="object-cover w-[590px] md:max-lg:h-[350px] lg:h-[420px] rounded-[3rem]  xl:ml-32"
            />
          </div>
        </div>
        <div className="hidden md:flex md:h-24 h-auto w-3/4 rounded-[6rem] md:-mt-10 bg-slate-100 shadow-md text-gray-800  shadow-gray-200 relative ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 w-full p-2 ">
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
      <section>
        <div className="text-black mt-10 p-5 flex flex-col">
          <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col items-center justify-center  md:items-start md:justify-between mt-10">
              <p className="hidden md:block text-2xl font-semibold text-gray-900">BROWSE BY CATEGORIES</p>
              <p className="md:hidden block text-2xl font-semibold text-gray-900">BROWSE</p>
              <p className="md:hidden block text-2xl font-semibold text-gray-900">BY CATEGORIES</p>
              <p className="text-gray-700">Check out our feature products</p>
            </div>
            <div>
            <button className="rounded-3xl px-5 py-2 text-lg border-2 border-gray-900 text-gray-800 hover:bg-gray-900 hover:text-gray-100 duration-300 mt-5">
              View All Categories
            </button>
            </div>
          </div>
          <Category/>
        </div>
      </section>

      <section className="hidden md:block">
        <InfoDiv_1/>
      </section>

      <section>
        
        <Cata_wise_product/>
      </section>

      <section className="hidden md:block">
        <InfoDiv_2/>
      </section>
    </div>
  );
}
