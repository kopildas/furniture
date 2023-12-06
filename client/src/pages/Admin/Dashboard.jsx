import React from "react";
import Sidebar from "../../component/Admin_Comp/Sidebar/Sidebar";
import Box from "../../component/Admin_Comp/Dashboard/Box";
import Transaction from "../../component/Admin_Comp/Dashboard/Transaction";
import TopProd from "../../component/Admin_Comp/Dashboard/TopProd";
import OrderGraph from "../../component/Admin_Comp/Dashboard/OrderGraph";
import Seles_Report from "../../component/Admin_Comp/Dashboard/Seles_Report";
// import Sidebar from "../../component/Admin_Comp/Sidebar/Sidebar";
// // import Sidebar from "../../component/Header/Admin_comp/Sidebar/Sidebar";

export default function Dashboard() {
  return (
    <div className="mt-10 w- flex text-black">
      <Sidebar className="sticky scroll-m-0 z-50" />
      <div className="p-10">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h3 className="text-4xl font-bold text-gray-700">Welcome Back</h3>
            <p className="text-xl mt-2">Home</p>
          </div>
          <button className="px-3 py-0 text-lg text-white duration-150 ease-in-out bg-blue-500 rounded hover:bg-blue-700 w-32 h-10">
            View All
          </button>
        </div>
        <div className="mt-5 bg-gray-100  rounded-lg p-5 flex flex-col gap-5 text-gray-600 ">
          <div className="flex gap-5">
            <div className="flex w-1/2 flex-col gap-5">
              <div className="flex gap-5">
                <Box
                  text={"Balance"}
                  ammount={"60900"}
                  data={"11.4% less then last month"}
                  color={"bg-green-200"}
                />
                <Box
                  text={"Spending"}
                  ammount={"1200"}
                  data={"11.4% less then last month"}
                  color={"bg-lime-100"}
                />
              </div>
              <div className="flex gap-5">
                <Box
                  text={"Portfolio"}
                  ammount={"14200"}
                  data={"11.4% less then last month"}
                  color={"bg-orange-100"}
                />
                <Box
                  text={"Investment"}
                  ammount={"323900"}
                  data={"11.4% less then last month"}
                  color={"bg-blue-200"}
                />
              </div>
            </div>
            <div className="w-1/2 p-10 rounded-lg">
              {/* <p>Seles Report</p> */}
              <Seles_Report/>
            </div>
          </div>

          <div className="flex gap-5">
            <div className=" w-1/4  rounded-lg bg-lime-300">
              <OrderGraph/>
            </div>
            <div className="text w-3/4 h-20 rounded-lg bg-fuchsia-400"></div>
          </div>

          <div className="flex  justify-between gap-7 w-full h-max">
            {/* top product */}
            <div className="p-5 w-3/4 flex flex-col bg-slate-200 rounded-lg">
              <p className="text-xl text-gray-800 font-semibold mb-2">
                Top Product
              </p>
              <div className="p-2 flex flex-col gap-4">
                <TopProd />
                <TopProd />
                <TopProd />
                <TopProd />
              </div>
            </div>
            
            
            <div className="flex flex-col p-5 gap-5 bg-slate-300 rounded-lg w-2/5">
              <p className="text-xl text-gray-800 font-semibold mb-2">
                New Customer
              </p>
              <div className="p-2 flex flex-col gap-4">
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
