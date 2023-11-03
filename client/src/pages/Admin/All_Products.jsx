import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Sidebar from "../../component/Admin_Comp/Sidebar/Sidebar";
import Toggle_button from "../../component/Admin_Comp/Toggle_button";
import EditProduct from "../../component/Admin_Comp/EditProduct";
import DeleteProduct from "../../component/Admin_Comp/DeleteProduct";

export default function All_Products() {
  const [data, setData] = useState(null);
  const [editprod, setEditprod] = useState(null);
  const [deleteprod, setDeleteprod] = useState(null);
  const [editedData, setEditedData] = useState(null);
  const [visible, setVisible] = useState(false);
  function onClose() {
    setVisible(!visible)
  }
  const [delvisible, setDelvisible] = useState(false);
  function delonClose() {
    setDelvisible(!delvisible)
  }

  async function onSubmit() {
    console.log("holo");
    try {
      const response = await axios.get(`${import.meta.env.VITE_LINK}/products`);
      console.log(response.data.product);
      setData(response.data.product);
      toast.success("Product added succesfully..!");
    } catch (err) {
      const responseText = err.response.data;

      console.log(responseText);
      toast.error(responseText.msg);
      console.log(err);
    }
  }

  const edited = (itemdata) => {
    setEditedData(itemdata);
  };

  console.log(data);

  useEffect(() => {
    onSubmit();
    console.log("jolo");
  }, [visible]);
  // this useEffect could be crashed server 
  // MongoServerError: Plan executor error during findAndModify :: caused by :: Performing an update on the path '_id' 
// would modify the immutable field '_id'

  async function toggle_Switch(id) {
    try {
      // Send a PUT request to the server to update the product's 'feature_product' field
      let featureProductValue = !data.find((item) => item._id === id)
        .feature_product;

      featureProductValue = {
        feature_product: featureProductValue, // Specify the field you want to update and its new value
      };

      console.log(featureProductValue);
      const response = await axios.put(
        `${import.meta.env.VITE_LINK}/products/${id}`,
        featureProductValue
      );

      // Handle the response from the server (you can add more logic as needed)
      console.log(response);
      toast.success("Product feature status updated successfully!");

      // Update the local data if needed (for immediate UI feedback)
      setData((prevData) =>
        prevData.map((item) => {
          if (item._id === id) {
            return {
              ...item,
              feature_product: !item.feature_product, // Toggle the 'feature_product' value
            };
          }
          return item;
        })
      );
    } catch (err) {
      const responseText = err.response.data;

      console.log(responseText);
      toast.error("Failed to update product feature status");
      console.log(err);
    }
  }

  return (
    <div className="mt-24 text-black flex">
      <Sidebar className="sticky scroll-m-0 z-50" />

      <div className="overflow-x-auto w-full p-10">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h3 className="text-4xl font-bold text-gray-700">Products</h3>
            <p className="text-xl mt-2">Home : Add new</p>
          </div>
          <button className="px-3 py-0 text-lg text-white duration-150 ease-in-out bg-blue-500 rounded hover:bg-blue-700 w-32 h-10">
            View All
          </button>
        </div>

        <table className="min-w-full mt-5">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                Selling Price
              </th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                Regular Price
              </th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                Purchased
              </th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                Featured
              </th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item) => (
                <tr key={item.id} className="bg-white">
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-16 w-16">
                        <img
                          className="h-16 w-16 rounded-full"
                          src={item?.image}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {item?.item_name}
                        </div>
                        <div className="text-sm text-gray-500">{item?.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm text-gray-900">{item.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm text-gray-900">$ {item.sale}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm text-gray-900">$ {item.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm text-gray-900">{item.quantity}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm text-gray-900">
                      {item.purchasing_number}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm text-gray-900">
                      <Toggle_button
                        enabled={item.feature_product}
                        id={item._id}
                        toggle_Switch={toggle_Switch}
                      />
                    </div>
                  </td>
                  <td className="px-6 py-9 whitespace-no-wrap border-gray-200 flex gap-5">
                    <div
                    className="text cursor-pointer"
                      onClick={() => {
                        setEditprod(true);
                        edited(item)
                        onClose()
                      }}
                    >
                      Edit
                    </div>
                    <div
                      className="flex-1 cursor-pointer items-end justify-end"
                      onClick={() => {
                        setDeleteprod(true);
                        edited(item)
                        delonClose()
                      }}
                    >
                      {" "}
                      delete{" "}
                    </div>
                  </td>
                </tr>
              ))}
              {editprod && <EditProduct item={editedData} onClose={onClose} visible={visible} />}
              {deleteprod && <DeleteProduct item={editedData} delonClose={delonClose} delvisible={delvisible} />}
          </tbody>
        </table>
      </div>
    </div>
  );
}
