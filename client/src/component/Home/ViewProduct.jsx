import React from 'react'

export default function ViewProduct({visible,data,onClose}) {


    const handleOnChange = (e) => {
        if (e.target.id === "cont" || e.target.id === "close") {
          onClose();
        }
      };


      const onChange = () => {
        
      }



    if (!visible) return null;
    return (
      <div
        id="cont"
        onClick={handleOnChange}
        className="fixed z-50 inset-0 flex items-center justify-center k bg-opacity-5 backdrop-blur-sm"
      >
        <div className="w-5/12 p-4 bg-slate-100 rounded-lg md:p-6">
          <h1 className="text-xl font-semibold text-center text-gray-700 md-5">
           Are you sure to Delete Item ({data.item_name})?
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
    );
}
