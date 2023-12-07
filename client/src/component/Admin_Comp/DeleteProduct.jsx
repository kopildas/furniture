import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';
import { actionType } from '../../context/reducer';
import { useStateValue } from '../../context/StateProvider';

export default function DeleteProduct({delvisible,delonClose,item}) {
  
  const [{}, dispatch] = useStateValue();
  
  
  const handleOnChange = (e) => {
        if (e.target.id === "cont" || e.target.id === "close") {
            delonClose();
        }
      };
console.log(item)
    async function onChange () {
        try {
            const response = await axios.delete(
              `${import.meta.env.VITE_LINK}/products/${item._id}`
            );
            console.log(response);

            dispatch({
              type: actionType.SET_PRODUCTS,
              product: response.data.product,
            });
            console.log(response.data.product)
            localStorage.setItem("product", JSON.stringify(response.data.product));

            toast.success("Product Deleted successfully..!")
            delonClose()
            // const { user, token } = response.data;
            // console.log(user);
            // console.log(token);
            // dispatch({
            //   type: actionType.REGISTER_USER_SUCCESS,
            //   user: user,
            //   token: token,
            // });
            // localStorage.setItem("user", JSON.stringify(user));
            // localStorage.setItem("token", token);
          } catch (err) {
            const responseText = err.response.data;
      
            console.log(responseText);
            toast.error(responseText.msg);
            console.log(err);
          }
    }
    
    
    if (!delvisible) return null;
    return (
    <div
        id="cont"
        onClick={handleOnChange}
        className="fixed z-50 inset-0 flex items-center justify-center k bg-opacity-5 backdrop-blur-sm"
      >
        <div className="w-5/12 p-4 bg-slate-100 rounded-lg md:p-6">
          <h1 className="text-xl font-semibold text-center text-gray-700 md-5">
           Are you sure to Delete Item ({item.item_name})?
          </h1>
  
          
        
  
            <div className="flex items-end justify-end m-3 text-center">
              <button
                id="close"
                onClick={handleOnChange}
                className="px-3 py-0 mr-4 text-lg text-white duration-150 ease-in-out bg-green-600 rounded hover:bg-green-700"
              >
                Close
              </button>
              <button
                
                onClick={onChange}
                className="px-3 py-0 text-lg text-white duration-150 ease-in-out bg-red-600 rounded hover:bg-red-700"
              >
                Delete Item
              </button>
            </div>
       
        </div>
      </div>
  )
}
