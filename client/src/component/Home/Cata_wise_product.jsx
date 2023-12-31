import React, { useEffect, useState } from "react";
import { useStateValue } from "../../context/StateProvider";
import axios from "axios";
import { toast } from "react-toastify";
import ProductContainer from "./ProductContainer";

export default function Cata_wise_product() {
  const [{ product, user }, dispatch] = useStateValue();

  // const new_arrival_Products = product.slice(0, 8);
  // const [data,setData] = useState(new_arrival_Products)
  const [data, setData] = useState(null);
  const [activeCategory, setActiveCategory] = useState("new_arrival");

  const updateDATA = () => {
    setData(product ? product.slice(0, 8) : []);
  };

  useEffect(() => {
    updateDATA()
  }, [product])
  



  function sorting_product(e) {
    setActiveCategory(e.target.id);
    if (e.target.id === "new_arrival") {
      const firstEightProducts = product.slice(0, 8);
      setData(firstEightProducts);
    } else if (e.target.id === "special_offer") {
      const response = product.filter((f) => f.offer != null);

      setData(response);
    }
  }

  return (
    <div className="flex flex-col">
      <div className="text-black mt-10 p-5 flex flex-col">
        <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-center justify-center  md:items-start md:justify-between mt-10">
            <p className="hidden md:block text-2xl font-semibold text-gray-900">
              BROWSE BY CATEGORIES
            </p>
            <p className="md:hidden block text-2xl font-semibold text-gray-900">
              BROWSE
            </p>
            <p className="md:hidden block text-2xl font-semibold text-gray-900">
              BY CATEGORIES
            </p>
            <p className="text-gray-700">Check out our feature products</p>
          </div>
          <div className="flex gap-3">
            <button
              id="new_arrival"
              onClick={sorting_product}
              className={`rounded-3xl px-5 py-2 text-lg border-2 border-gray-900 text-gray-00 ${
                activeCategory === "new_arrival" && "bg-gray-900 text-gray-100"
              } hover:bg-gray-900 hover:text-gray-100 duration-300 mt-5`}
            >
              New Arrival
            </button>

            <button
              id="special_offer"
              onClick={sorting_product}
              className={`rounded-3xl px-5 py-2 text-lg border-2 border-gray-900 text-gray-00 ${
                activeCategory === "special_offer" &&
                "bg-gray-900 text-gray-100"
              } hover:bg-gray-900 hover:text-gray-100 duration-300 mt-5`}
            >
              Special Offer
            </button>

            <button
              id="best_sellers"
              onClick={sorting_product}
              className={`rounded-3xl px-5 py-2 text-lg border-2 border-gray-900 text-gray-00 ${
                activeCategory === "best_sellers" && "bg-gray-900 text-gray-100"
              } hover:bg-gray-900 hover:text-gray-100 duration-300 mt-5`}
            >
              Best Sellers
            </button>
          </div>
        </div>
        <div>
        <ProductContainer data={data} updateDATA={updateDATA}/>
      </div>
      </div>

      {/* <div className="flex items-center justify-between">
        <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-center justify-center  md:items-start md:justify-between mt-10">
            <p className="hidden md:block text-2xl font-semibold text-gray-900">
              BROWSE BY CATEGORIES
            </p>
            <p className="md:hidden block text-2xl font-semibold text-gray-900">
              BROWSE
            </p>
            <p className="md:hidden block text-2xl font-semibold text-gray-900">
              BY CATEGORIES
            </p>
            <p className="text-gray-700">Check out our feature products</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            id="new_arrival"
            onClick={sorting_product}
            className={`rounded-3xl px-5 py-2 text-lg border-2 border-gray-900 text-gray-800 ${
              activeCategory === "new_arrival" && "bg-gray-900 text-gray-100"
            } hover:bg-gray-900 hover:text-gray-100 duration-300 mt-5`}
          >
            New Arrival
          </button>

          <button
            id="special_offer"
            onClick={sorting_product}
            className={`rounded-3xl px-5 py-2 text-lg border-2 border-gray-900 text-gray-800 ${
              activeCategory === "special_offer" && "bg-gray-900 text-gray-100"
            } hover:bg-gray-900 hover:text-gray-100 duration-300 mt-5`}
          >
            Special Offer
          </button>

          <button
            id="best_sellers"
            onClick={sorting_product}
            className={`rounded-3xl px-5 py-2 text-lg border-2 border-gray-900 text-gray-800 ${
              activeCategory === "best_sellers" && "bg-gray-900 text-gray-100"
            } hover:bg-gray-900 hover:text-gray-100 duration-300 mt-5`}
          >
            Best Sellers
          </button>
        </div>
      </div>

      <div>
        <ProductContainer data={data} updateDATA={updateDATA} />
      </div> */}
    </div>
  );
}
