import React from "react";
import Sidebar from "../../component/Admin_Comp/Sidebar/Sidebar";
import Box from "../../component/Admin_Comp/Dashboard/Box";
import Transaction from "../../component/Admin_Comp/Dashboard/Transaction";
import OrderGraph from "../../component/Admin_Comp/Dashboard/OrderGraph";
import Seles_Report from "../../component/Admin_Comp/Dashboard/Seles_Report";
import New_order from "../../component/Admin_Comp/Dashboard/New_order";
import Top_Products from "../../component/Admin_Comp/Dashboard/Top_Products";
import New_customers from "../../component/Admin_Comp/Dashboard/New_customers";
// import Sidebar from "../../component/Admin_Comp/Sidebar/Sidebar";
// // import Sidebar from "../../component/Header/Admin_comp/Sidebar/Sidebar";

export default function Dashboard() {
  return (
    <div className="mt-12 w- flex text-black">
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
            <div className="w-1/2 p-10 rounded-lg flex flex-col border border-x-gray-300">
              <div className="w-full h-10">
                <p className="text-2xl font-semibold -mt-8">Sales Report</p>
              </div>
              {/* Set a fixed height for the Sales Report container */}
              <div style={{ height: "250px" }} className="-mt-5">
                <Seles_Report />
              </div>
            </div>
          </div>

          <div className="flex gap-5">
            <div className=" w-1/4 h-[400px] rounded-lg  border border-gray-300 p-2">
              <div className="w-full h-10 flex items-center justify-center">
                <p className="text-2xl font-semibold">Sales Report</p>
              </div>
              <div className="w-full h-full -mt-16">
                <OrderGraph />
              </div>
              <div className="w-full h-auto flex flex-wrap items-center justify-center gap-3 -mt-14 p-1 rounded-lg  border border-gray-300">
                {/* <OrderGraph /> */}
                <div className="flex items-center gap-1 w-5/12">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <p className="text-xs">Order Complete</p>
                </div>
                <div className="flex items-center gap-1 w-5/12">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <p className="text-xs">Order Pending</p>
                </div>
                <div className="flex items-center gap-1 w-5/12">
                  <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                  <p className="text-xs">Order Unpaid</p>
                </div>
                <div className="flex items-center gap-1 w-5/12">
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <p className="text-xs">Order Canceled</p>
                </div>
                <div className="flex items-center gap-1 w-5/12">
                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  <p className="text-xs">Order Returned</p>
                </div>
              </div>
            </div>
            <div className="text w-3/4  rounded-lg border border-gray-300 p-4">
              <p className="text-2xl font-semibold mb-2">
                New Orders
              </p>
              <div className="p-2 flex flex-col gap-4">
                <New_order/>
              </div>
            </div>
          </div>

          <div className="flex  justify-between gap-7 w-full h-max">
            {/* top product */}
            <div className="p-5 w-3/4 flex flex-col bg-gray-200 border border-gray-300 rounded-lg">
              <p className="text-2xl font-semibold mb-2">
                Top Products
              </p>
              <div className="p-2 flex flex-col gap-4">
                <Top_Products />
              </div>
            </div>

            <div className="flex flex-col p-5 gap-5 bg-gray-200 border border-gray-300 rounded-lg w-2/5">
              <p className="text-2xl font-semibold mb-2">
                New Customers
              </p>
              <div className="p-2 flex flex-col gap-4">
                
                <New_customers />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
