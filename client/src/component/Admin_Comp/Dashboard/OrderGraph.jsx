import axios from "axios";
import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { toast } from "react-toastify";

export default function OrderGraph() {
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  async function fetchData() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_LINK}/products`);
      setData(response.data.product);
      toast.success("Product added successfully..!");
    } catch (err) {
      const responseText = err.response.data;
      toast.error(responseText.msg);
    }
  }

  function graphData() {
    if (data) {
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
      };

      setUserData(us);
    }
  }

  useEffect(() => {
    fetchData().then(graphData());
  }, []);

  useEffect(() => {
    if (data) {
      graphData();
    }
  }, []);

  return (
    <div className="bg-slate-300 px-6 py-6 rounded-md">
      <div>
        <p className="font font-semibold text-2xl">Food Category</p>
        <div className="flex p-5 mt-2 backdrop-blur-sm items-center justify-center rounded-lg">
          <div className="flex items-center justify-center w-[400px] h-[400px]">
            {userData && <Doughnut data={userData} />}
          </div>
        </div>
      </div>
    </div>
  );
}
