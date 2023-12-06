import React, { useEffect, useState } from "react";
import { useStateValue } from "../../../context/StateProvider";
import { toast } from "react-toastify";
import axios from "axios";

export default function New_customers() {

    const [{ product, user,updateProd }, dispatch] = useStateValue();
    console.log(user);
    const [data, setData] = useState(null);

    async function gettingData() {
        console.log("holo");
        try {
            const response = await axios.get(`${import.meta.env.VITE_LINK}/auth/getalluser`);
            console.log(response.data.product);
          setData(response.data.product.slice(0, 8));
        //   toast.success("Product added succesfully..!");
        } catch (err) {
          const responseText = err.response.data;
    
          console.log(responseText);
          toast.error(responseText.msg);
          console.log(err);
        }
      }
      useEffect(() => {
        gettingData();
        console.log("jolo");
      }, []);
      console.log(data)

  return (
    <>
      {data &&
        data.map((item) => (
          <div key={item?._id} className="flex gap- w-full items-center justify-between">
            <div className="w-16 h-16 rounded-full text-black bg-gray-400 flex items-center justify-center text-4xl">
            <img src="https://i.ibb.co/gTnHqRV/pngegg.png" alt="pngegg" border="0" className="rounded-full"/>
            </div>
            <div className="flex flex-col items-start justify-center">
              <p className="font text-lg font-semibold">{item.name}</p>
              <p className="text-">{item.email}</p>
            </div>
            <div className="flex flex-col items-center justify-center text-sm font-semibold ml-10">
              <p>Purchased</p>
              <p>{item.purchased_product}</p>
            </div>
          </div>
        ))}
    </>
  );
}
