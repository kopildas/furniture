import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import CartitemComponenet from "../../component/Home/CartitemComponenet";

export default function ViewCart() {
  const navigate = useNavigate();
  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();

  const [total, setTotal] = useState(0);

  const setiingTotal = (data) => {
    setTotal(data);
  };

  console.log(cartItems);

let table = true;

  return (
    <div className="text-black mt-6 p-20 w-full ">
      <div className="w-full flex md:flex-row flex-col gap-2">
        <div className="w-full md:w-4/6 bg-fuchsia-00 overflow-x-auto">
          <table className="min-w-full mt-5">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                  
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems &&
                cartItems.map((item) => (
                  <CartitemComponenet
                  key={item.id}
                  item={item}
                  setiingTotal={setiingTotal}
                  table={table}
                />
                ))}
              {/* {editprod && (
              <EditProduct
                item={editedData}
                onClose={onClose}
                visible={visible}
              />
            )}
            {deleteprod && (
              <DeleteProduct
                item={editedData}
                delonClose={delonClose}
                delvisible={delvisible}
              />
            )} */}
            </tbody>
          </table>
        </div>

        <div className="w-full md:w-2/6 h-max p-4 mt-10 bg-fuchsia-90 border rounded-lg flex flex-col">
          <p className="text-3xl md:text-2xl">Summary</p>
          <p className="font-semibold text-xl text-gray-800 mt-4 md:mt-2">Estimate Shipping</p>
          <div className="b border-b mt-4 mb-4 md:mt-2 md:mb-2"></div>

          {/* cart total section */}
          <div className="w-full flex-1 bg-gray-40 gap-5 flex flex-col items-center justify-evenly">
            <div className="bg-gray-00  backdrop-blur-2xl md:mt-5 rounded-lg w-full text-gray-900">
              <div className="flex flex-col items-center justify-center gap-5 text-2xl md:gap-1 md:text-base">
                <div className="w-full flex items-center justify-between">
                  <p className="">Sub Total</p>
                  <p className="font-semibold">$ {total}</p>
                </div>
                <div className="w-full flex items-center justify-between">
                  <p className="">Delivery</p>
                  <p className="font-semibold">$ 77</p>
                </div>

                <div className="w-full border-b border-gray-600"></div>

                <div className="w-full flex items-center justify-between">
                  <p className="md:text-2xl text-3xl">Total</p>
                  <p className="md:text-2xl font-semibold text-3xl">
                    $ {total + 77}
                  </p>
                </div>
              </div>
            </div>
            {user ? (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full h-20 text-3xl md:text-lg md:h-10 rounded-full bg-orange-500 text-gray-50  hover:shadow-lg "
              >
                Check Out
              </motion.button>
            ) : (
              <div className="flex flex-col md:flex-row gap-3 w-full mt-5">
                <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full h-20 text-3xl md:text-lg md:h-10 text-gray-900 my-2 hover:shadow-lg "
                onClick={() => {
                  navigate("/viewcart");
                }}
              >
                Shop More
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full text-3xl md:text-lg md:h-10 h-20 rounded-full bg-amber-900 text-gray-50 my-2 hover:shadow-lg "
              >
                Check Out
              </motion.button>
              </div>
              // {popups.login && pagestate === "Log in" && (
              //   <Login toggle={calllog} />
              // )}
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
