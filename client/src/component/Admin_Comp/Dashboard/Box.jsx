import React from "react";

export default function Box({text,ammount,data,color}) {
  return (
    <div className={`w-80 h-36 flex rounded-lg ${color}`}>
      <div className="flex flex-row gap-5">
        <div className="p-5">
          <p className="text-lg text-gray-900 font-semibold">{text}</p>
          <p className="text-2xl text-gray-800">$ {ammount}</p>
          <p>{data}</p>
        </div>
        <div className="flex items-end justify-end pr-4">
          {/* <div className="w-14 h-14 mb-5 rounded-full bg-slate-200"></div> */}
        </div>
      </div>
    </div>
  );
}
