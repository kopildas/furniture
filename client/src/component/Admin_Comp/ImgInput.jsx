import React from "react";
import { BsFillPencilFill } from "react-icons/bs";
export default function ImgInput({id, uploadImage }) {
  return (
    <>
      <label>
        <div className="flex items-end justify-end p-2">
          <div className="w-8 h-8 bg-slate-400 rounded-lg flex items-center justify-center cursor-pointer">
            <BsFillPencilFill />
          </div>
          <input
            type="file"
            id={id}
            name={uploadImage}
            accept="image/*"
            onChange={uploadImage}
            className="w-0 h-0"
          />
        </div>
      </label>
    </>
  );
}
