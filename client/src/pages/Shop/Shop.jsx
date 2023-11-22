import React, { useState } from "react";
import { useStateValue } from "../../context/StateProvider";
import Slider from "react-slider";
import { BsFillGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import ProductContainer from "../../component/Home/ProductContainer";
import { useEffect } from "react";

export default function Shop() {
  const [{ product, user, shop_category }, dispatch] = useStateValue();
  console.log(product);
  const min = 0;
  const max = 100000;
  const [activeCatagory, setActiveCategory] = useState(shop_category);
  const [price, setPrice] = useState(max);
  const [gridORlist, setGridOrlist] = useState("grid");
  const [sortValue, setSortValue] = useState(null);
  const [data, setData] = useState(product);
  const [length, setLength] = useState(max);

  const CategoryItem = [
    {
      path: "/shop",
      name: "Chair",
      // icon: <FaTh />,
    },
    {
      path: "/shop",
      name: "Sofa",
      // icon: <FaTh />,
    },
    {
      path: "/shop",
      name: "Table",
      // icon: <FaUserAlt />,
    },
    {
      path: "/shop",
      name: "Bed",
      // icon: <FaUserAlt />,
    },
    {
      path: "/shop",
      name: "Closet",
      // icon: <FaUserAlt />,
    },
  ];

  const sortBY = (e) => {
    console.log(e.target.value);
    setSortValue(e.target.id)
    let sortedCopy = [...data];
    if (e.target.value === "a-z") {
      sortedCopy = sortedCopy.sort((a, b) =>
        a.item_name.localeCompare(b.item_name)
      );
    }
    if (e.target.value === "z-a") {
      sortedCopy = sortedCopy.sort((a, b) =>
        b.item_name.localeCompare(a.item_name)
      );
    }
    if (e.target.value === "lowest") {
      sortedCopy = sortedCopy.sort((a, b) => a.price - b.price);
    }
    if (e.target.value === "highest") {
      sortedCopy = sortedCopy.sort((a, b) => b.price - a.price);
    }
    setData(sortedCopy)
  };

  const priceChange = (e) => {
    setPrice(e.target.value);
  };

  const activeCata = (e) => {
    setActiveCategory(e.target.id);
  };

  const grid = "grid";
  const list = "list";

  const grid_or_list_view = (value) => {
    console.log(value);
    setGridOrlist(value);
  };

  console.log(gridORlist);


  let updata;
  // useEffect(() => {
  //   updata = product.filter((item) => parseFloat(item.price) <= price);
  //   console.log(updata);
  //   setData(updata)
  // }, [price]);


  useEffect(() => {
    setLength(data.length)
    sortBY
    if(length===0)
    {
      // console.log(data.length());
      console.log(length);
      updata = product.filter((item) => item.category === activeCatagory);
    }
    if(activeCatagory != "All")
    {
      console.log(data);
      console.log(activeCatagory);
      updata = product.filter((item) => item.category === activeCatagory);
      updata = updata.filter((item) => parseFloat(item.price) <= price);
    }
    if(activeCatagory === "All")
    {
      console.log(activeCatagory);

      console.log(data);
      updata = product
      updata = updata.filter((item) => parseFloat(item.price) <= price);

    }
    console.log(updata);
    setData(updata)
    
  }, [activeCatagory,price]);

console.log(data)
  return (
    <div className="mt-12 text-black">
      <div className=" h-10 w-screen p-10 bg-gray-100 flex items-center justify-between">
        <p className="text-xl font-semibold text-gray-800">SHOP</p>
        <p className="text-xl font-semibold text-gray-800">`Home : Shop`</p>
      </div>

      <div className="m-10 flex flex-col md:flex-row md:gap-5">
        <div className="w-72 flex flex-col md:h-screen md:sticky overflow-y-auto top-5 ">
          <div className="w-full h-12 flex items-center justify-start p-5 border rounded-md text-md font-semibold bg-slate-50 text-gray-500">
            Filter Products By
          </div>

          <div className="hidden md:flex font-semibold bg-slate-50 text-gray-700 p-5 mt-2 flex-col gap-5">
            <p className="">Category</p>
            {CategoryItem.map((item, index) => (
              <div
                key={index}
                className={`text-gray-400 hover:bg-slate-200 cursor-pointer rounded-md ${
                  activeCatagory === item.name && "bg-slate-300"
                }`}
              >
                <p id={item.name} onClick={activeCata} className="p-1 px-3">
                  {item.name}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full h-22 flex items-center justify-start p-8 px-5 border rounded-md text-md font-semibold bg-slate-50 text-gray-500 mt-5">
            <div>
              <p>Price Range: 0 to {price}</p>
              <input
                className="w-full"
                type="range"
                min={min}
                max={max}
                onInput={priceChange}
              />
            </div> 
          </div>
        </div>

        <div className="w-full bg-slate-00 mt-5 flex flex-col">
          <div className="flex flex-col md:flex-row md:items-center gap-5 justify-between overflow-y-auto top-5 bg-slate-50 rounded-md border px-4 z-40">
            <div className="flex p-2 text-2xl gap-5">
              <div
                id="grid"
                onClick={() => grid_or_list_view(grid)}
                className={`border cursor-pointer p-1 ${
                  gridORlist === "grid" ? "bg-blue-500" : ""
                }`}
              >
                <BsFillGridFill />
              </div>
              <div
                id="list"
                onClick={() => grid_or_list_view(list)}
                className={`border cursor-pointer p-1 ${
                  gridORlist === "list" ? "bg-blue-500" : ""
                }`}
              >
                <FaList />
              </div>
            </div>

            <div className="flex gap-5">
              <p>Sort By</p>
              <select
                className="w-42 px-3 py-1"
                id="vegetableSelectId"
                name="selectedVegetable"
                onClick={sortBY}
              >
                <option value="a-z">Name A-Z</option>
                <option value="z-a">Name Z-A</option>
                <option value="lowest">Price Low to High</option>
                <option value="highest">Price High to Low</option>
              </select>
            </div>
          </div>
          <div>
            <ProductContainer data={data} grid={gridORlist} />
          </div>
        </div>
      </div>
    </div>
  );
}
