import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import { toast } from "react-toastify";
import { useStateValue } from "../../../context/StateProvider";

export default function OrderGraph() {
  const [{ product, user }, dispatch] = useStateValue();

  const [data, setData] = useState(product);
  const [userData, setUserData] = useState(null);
  const chartRef = useRef(null); // Create a ref for the chart component

  async function fetchData() {
    // Your fetchData function here
  }

  function graphData() {
    if (data) {
      // Your graphData function here

        const category = [
          { value: "Chair", label: "Chair" },
          { value: "Table", label: "Table" },
          { value: "Bed", label: "Bed" },
          { value: "Closet", label: "Closet" },
          { value: "Sofa", label: "Sofa" },
        ];
  
        const categoryCounts = data.reduce((counts, item) => {
          const category = item.category;
          counts[category] = (counts[category] || 0) + 1;
          return counts;
        }, {});
  
        const updatedCategoryList = category.map((category) => ({
          value: category.value,
          label: `${categoryCounts[category.value] || 0}`,
        }));
  
        const us = {
          labels: updatedCategoryList.map((data) => data.value),
          datasets: [
            {
              label: "Quantity",
              data: updatedCategoryList.map((data) => parseInt(data.label)),
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
              ],
              borderColor: "black",
              borderWidth: 2,
            },
          ],
        }
      // Before setting new chart data, destroy the existing chart
      if (chartRef.current) {
        chartRef.current.chartInstance.destroy();
      }

      setUserData(us);
    }
  }

  useEffect(() => {
    graphData();
  }, []);

  useEffect(() => {
    if (data) {
      graphData();
    }
  }, []);

  // Cleanup the chart when the component unmounts
  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-slate-300 px-6 py-6 rounded-md">
      <div>
        <p className="font font-semibold text-2xl">Food Category</p>
        <div className="flex p-5 mt-2 backdrop-blur-sm items-center justify-center rounded-lg">
          <div className="flex items-center justify-center w-[400px] h-[400px]">
            {/* {userData && (
              <Doughnut data={userData} ref={chartRef} /> 
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
