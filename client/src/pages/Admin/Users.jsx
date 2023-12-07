import React, { useEffect, useState } from 'react'
import Sidebar from '../../component/Admin_Comp/Sidebar/Sidebar'
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Users() {
    const [data, setData] = useState(null);

    async function gettingData() {
        console.log("holo");
        try {
            const response = await axios.get(`${import.meta.env.VITE_LINK}/auth/getalluser`);
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
      useEffect(() => {
        gettingData();
        console.log("jolo");
      }, []);

  return (
    <div className="mt-12 text-black flex">
      <Sidebar className="sticky scroll-m-0 z-50" />

      <div className="overflow-x-auto w-full p-10">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h3 className="text-4xl font-bold text-gray-700">Users</h3>
            <p className="text-xl mt-2">Home : Users</p>
          </div>
          <button className="px-3 py-0 text-lg text-white duration-150 ease-in-out bg-blue-500 rounded hover:bg-blue-700 w-32 h-10">
            View All
          </button>
        </div>

        <table className="min-w-full mt-5">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                Profile
              </th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
              Phone
              </th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                Total Buy
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
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm text-gray-900">{item?.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm text-gray-900">{item.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm text-gray-900"> {item.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm text-gray-900">{item.purchased_product}</div>
                  </td>
                  
                  
                 
                  <td className="px-6 py-9 whitespace-no-wrap border-gray-200 flex gap-5">
                    <div
                    className="text cursor-pointer"
                      onClick={() => {
                        // setEditprod(true);
                        // edited(item)
                        // onClose()
                      }}
                    >
                      Edit
                    </div>
                    <div
                      className="flex-1 cursor-pointer items-end justify-end"
                      onClick={() => {
                        // setDeleteprod(true);
                        // edited(item)
                        // delonClose()
                      }}
                    >
                      {" "}
                      delete{" "}
                    </div>
                  </td>
                </tr>
              ))}
              {/* {editprod && <EditProduct item={editedData} onClose={onClose} visible={visible} />}
              {deleteprod && <DeleteProduct item={editedData} delonClose={delonClose} delvisible={delvisible} />} */}
          </tbody>
        </table>
      </div>
    </div>
  )
}
