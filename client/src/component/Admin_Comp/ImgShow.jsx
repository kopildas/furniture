import React from "react";
import { AiFillDelete } from "react-icons/ai";
export default function ImgShow({id, imgURL, deletImage }) {
  return (
    <>
      <img
        src={imgURL}
        alt=""
        className="w-full h-full rounded-lg object-cover"
      />
      <div  className="flex items-end justify-end">
        
        <AiFillDelete
          className="text absolute text-6xl opacity-70 hover:opacity-100 hover:text-7xl cursor-pointer"
          onClick={deletImage}
        />
      </div>
    </>
  );
}
