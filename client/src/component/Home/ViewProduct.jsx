import React, { useEffect, useState } from "react";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";
import Add_To_Cart from "../Shop/Add_To_Cart";

export default function ViewProduct({ visible, data, onClose }) {
  // for add to cart item
  const [quantity, setQuantity] = useState(1);
  const [{product, cartShow, cartItems, user }, dispatch] = useStateValue();
  const [updatedItem, setUpdatedItem] = useState([]);

  useEffect(() => {
    setUpdatedItem(cartItems);
  }, [cartItems]);

  const handleOnChange = (e) => {
    if (e.target.id === "cont" || e.target.id === "close") {
      onClose();
    }
  };

  const onChange = () => {};



  if (!visible) return null;
  return (
    <div
      id="cont"
      onClick={handleOnChange}
      className="fixed z-50 inset-0 flex items-center justify-center k bg-opacity-5 backdrop-blur-sm"
    >
      <div className="w-4/6 p-4 bg-slate-100 rounded-lg md:p-6">
        <div className="flex w-full  gap-40">
          {/* image */}
          <div className="flex flex-col bg-green-60 gap-4 w-3/12">
            <div>
              <div className="bg-slate-100 w-80 h-96 rounded-md flex items-center justify-center border border-gray-300 p-3">
                <div
                  id={"image"}
                  className="bg-slate-200 w-full h-full rounded-lg "
                >
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-full rounded-lg object-cover"
                  />
                  {/* {image ? (
                      <ImgShow id={"image"}  imgURL={image} deletImage={deletImage} />
                    ) : (
                      <ImgInput id={"image"} uploadImage={uploadImage} />
                    )}
                    {isLoadding && <Loader />} */}
                </div>
              </div>
            </div>
            {/* gallary image */}
            <div className="flex gap-4">
              <div>
                {data.gal_1_imgURL && (
                  <div className="bg-slate-50 w-24 h-28 rounded-md flex items-center justify-center">
                    <div className="bg-slate-300 w-20 h-24 rounded-lg">
                      {/* {gal_1_imgURL ? (
                        <GallaryImgShow
                        id={"gal_1_imgURL"} 
                          imgURL={gal_1_imgURL}
                          deletImage={deletImage}
                        />
                      ) : (
                        <ImgInput
                          id={"gal_1_imgURL"}
                          uploadImage={uploadImage}
                        />
                      )} */}
                    </div>
                  </div>
                )}
              </div>
              <div>
                {data.gal_2_imgURL && (
                  <div className="bg-slate-50 w-24 h-28 rounded-md flex items-center justify-center">
                    <div className="bg-slate-300 w-20 h-24 rounded-lg">
                      {/* {gal_1_imgURL ? (
                        <GallaryImgShow
                        id={"gal_1_imgURL"} 
                          imgURL={gal_1_imgURL}
                          deletImage={deletImage}
                        />
                      ) : (
                        <ImgInput
                          id={"gal_1_imgURL"}
                          uploadImage={uploadImage}
                        />
                      )} */}
                    </div>
                  </div>
                )}
              </div>
              <div>
                {data.gal_3_imgURL && (
                  <div className="bg-slate-50 w-24 h-28 rounded-md flex items-center justify-center">
                    <div className="bg-slate-300 w-20 h-24 rounded-lg">
                      {/* {gal_1_imgURL ? (
                        <GallaryImgShow
                        id={"gal_1_imgURL"} 
                          imgURL={gal_1_imgURL}
                          deletImage={deletImage}
                        />
                      ) : (
                        <ImgInput
                          id={"gal_1_imgURL"}
                          uploadImage={uploadImage}
                        />
                      )} */}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* data */}
          <div className=" flex flex-col mt-5  gap-10 bg-green-0">
            <div>
              <p className="text-4xl font-semibold">{data.item_name}</p>
              <p className="font-semibold">Ratings</p>
              <p className="mt-5 text-lg">{data.short_descrip}</p>
              <p className="mt-5 text-4xl font-semibold text-gray-800">
                $ {data.price}
              </p>
              <p className="text-2xl line-through text-gray-700 mt-1">
                $ {data.sale}
              </p>
              <p className="text-xl text-gray-700 mt-1">
                In stock: {data.quantity}
              </p>
            </div>

            <div className="flex gap-5">
              <div className="flex gap-1">
                <button className="border border-gray-400 w-8 h-8 text-4xl flex items-center justify-center"
                onClick={() => setQuantity(quantity - 1)}>
                  -
                </button>
                <button disabled="disabled">{quantity}</button>
                <button className="border w-8 h-8 text-4xl flex items-center justify-center border-gray-400" onClick={() => setQuantity(quantity + 1)}>
                  +
                </button>
              </div>
              <div className="flex gap-1">
              <Add_To_Cart data={data} quantity={quantity} />
              </div>
            </div>
          </div>
        </div>

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
