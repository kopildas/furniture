import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineDeleteForever } from "react-icons/md";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";

export default function CartitemComponenet({ item, id, setiingTotal, table=false }) {
  const [quantity, setQuantity] = useState(item.purchase_quantity);
  const [{ cartItems }, dispatch] = useStateValue();

  const [isOpen, setIsOpen] = useState(true);

  const cartDispatch = (updatedItem) => {
    localStorage.removeItem("cartItems");
    localStorage.setItem("cartItems", JSON.stringify(updatedItem));
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: updatedItem,
    });
  };

  // cartItem update in database
  const updateQuantity = (type, id) => {
    let updatedItemCopy = [...cartItems]; // Create a copy of the cartItems array

    if (type === "add") {
      setQuantity(quantity + 1);
      updatedItemCopy = updatedItemCopy.map((f) =>
        f.item_id === id ? { ...f, purchase_quantity: f.purchase_quantity + 1 } : f
      );
    } else if (type === "minus") {
      if (item.purchase_quantity <= 1) {
        // Remove the item from the copy
        updatedItemCopy = updatedItemCopy.filter((item) => item.item_id !== id);
      } else {
        setQuantity(quantity - 1);
        updatedItemCopy = updatedItemCopy.map((f) =>
          f.item_id === id ? { ...f, purchase_quantity: f.purchase_quantity - 1 } : f
        );
      }
    } else if (type === "delete") {
      // Remove the item from the copy
      updatedItemCopy = updatedItemCopy.filter((item) => item.item_id !== id);
    }

    // Call cartDispatch with the updatedItemCopy
    cartDispatch(updatedItemCopy);
  };

 

  useEffect(() => {
    // Calculate total price
    setQuantity(item.purchase_quantity);
    let totalpr = cartItems.reduce((accum, item) => accum + item.purchase_quantity * item.price, 0);
    setiingTotal(totalpr);
  }, [quantity, cartItems]);

  console.log(item);
  return (
    <>
    
    {table ? (
    
      <tr key={item.id} className="bg-white">
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-16 w-16">
                          <img
                            className="h-16 w-16 rounded-full"
                            src={item?.picture}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {item?.item_name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {item?.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm text-gray-900">
                        $ {item.price}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex gap-2">
            <motion.div
              whileTap={{ scale: 0.75 }}
              onClick={() => updateQuantity("minus", item?.item_id)}
            >
              <BiMinus className="text-gray-900 cursor-pointer" />
            </motion.div>
            <p className="w-5 h-5 rounded-sm bg-gray-600 text-gray-50 flex items-center justify-center">
              {quantity}
            </p>
            <motion.div
              whileTap={{ scale: 0.75 }}
              onClick={() => updateQuantity("add", item?.item_id)}
            >
              <BiPlus className="text-gray-900 cursor-pointer" />
            </motion.div>
            </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm text-gray-900">
                        $ {item.price * item.purchase_quantity}
                      </div>
                    </td>

                    <td>
                    <motion.div
              whileTap={{ scale: 0.59 }}
            onClick={() => updateQuantity("delete", item?.item_id)}
            onMouseEnter={() => setIsOpen(false)}
            onMouseLeave={() => setIsOpen(true)}
            className={`bg-red-00 rounded-md h-10 group  flex items-center justify-center   cursor-pointer  ${
              isOpen ? "w-6" : "w-8 "
            } `}
          >
            {isOpen ? (<MdOutlineDeleteForever className="text-2xl" />):(<MdOutlineDeleteForever className="text-4xl"/>)}
            </motion.div>
                    </td>
                  </tr>
    
    ) : (
      <div className="w-full p- md:p- rounded-3xl bg-gray-700 flex items-center ">
      <div className="w-[8rem] flex items-start justify-start">
        <img src={item.picture} className=" h-20 w-full rounded-l-3xl" alt="" />
      </div>
      <div className="md:gap-1 h-20 w-full flex items-center bg-red-10 pl-2 ">
        <div className="flex flex-col gap-2 w-36">
          <p className="text-sm text-gray-50">{item.item_name}</p>
          <div
            className={`group  flex items-center justify-between gap-10  cursor-pointer text-white text-sm transition-all duration-500 ${
              isOpen ? "w-16 " : "w-16 "
            } flex-shrink-0`}
          >
            <div className="flex">
            <motion.div
              whileTap={{ scale: 0.75 }}
              onClick={() => updateQuantity("minus", item?.item_id)}
            >
              <BiMinus className="text-gray-50" />
            </motion.div>
            <p className="w-5 h-5 rounded-sm bg-gray-600 text-gray-50 flex items-center justify-center">
              {quantity}
            </p>
            <motion.div
              whileTap={{ scale: 0.75 }}
              onClick={() => updateQuantity("add", item?.item_id)}
            >
              <BiPlus className="text-gray-50" />
            </motion.div>
            </div>

            <div>
            <p className="text-sm text-gray-400 font-semibold">
              ${parseFloat(item?.price) * item?.purchase_quantity}
            </p>
            </div>
          </div>
        </div>

        {/* adding section */}
      </div>


      <motion.div
              whileTap={{ scale: 0.59 }}
            onClick={() => updateQuantity("delete", item?.item_id)}
            onMouseEnter={() => setIsOpen(false)}
            onMouseLeave={() => setIsOpen(true)}
            className={`bg-red-00 rounded-md h-10 group  flex items-center justify-center   cursor-pointer  ${
              isOpen ? "w-6" : "w-16 "
            } `}
          >
            {isOpen ? (<MdOutlineDeleteForever />):(<MdOutlineDeleteForever className="text-4xl"/>)}
            </motion.div>
    </div>
    )}
    
    </>
  );
}
