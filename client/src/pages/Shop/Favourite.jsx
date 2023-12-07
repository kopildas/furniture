import React, { useState } from 'react'
import { useStateValue } from '../../context/StateProvider';
import { useNavigate } from 'react-router-dom';
import CartitemComponenet from "../../component/Home/CartitemComponenet";


export default function Favourite() {
    const navigate = useNavigate();
    const [{ cartShow, favorite_Items, user }, dispatch] = useStateValue();
  
    const [total, setTotal] = useState(0);
  
    const setiingTotal = (data) => {
      setTotal(data);
    };
    console.log(favorite_Items)
    let table = true;
    let favorite = true;
  return (
    <div className="text-black mt-6 md:p-20 p-5 w-full flex flex-col items-center justify-center">
        <p className='text-2xl text-gray-800'>Favorite items</p>
      <div className="w-full flex md:flex-row flex-col items-center justify-center gap-2">
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
              {favorite_Items &&
                favorite_Items.map((item) => (
                  <CartitemComponenet
                  key={item.id}
                  item={item}
                  setiingTotal={setiingTotal}
                  table={table}
                  favorite={favorite}
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

       
      </div>
    </div>
  )
}
