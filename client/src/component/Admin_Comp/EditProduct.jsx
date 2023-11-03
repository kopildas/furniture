import React, { useState } from 'react'
import ImgShow from './ImgShow';
import ImgInput from './ImgInput';
import Loader from '../Loader';
import GallaryImgShow from './GallaryImgShow';
import { toast } from 'react-toastify';
import Select from 'react-tailwindcss-select';
import axios from 'axios';

export default function EditProduct({item,visible,onClose}) {
  console.log(item.image);
  // if (!visible) return null;
  const [isLoadding, setIsLoadding] = useState(false);
  // toast.success("Product feature edit updated successfully!");
  let [formData, setFormData] = useState(item);
  const {
    item_name,
    sale,
    price,
    category,
    image,
    quantity,
    SKU,
    short_descrip,
    full_descrip,
    gal_1_imgURL,
    gal_2_imgURL,
    gal_3_imgURL,
  } = formData;


  const options = [
    { value: "Chair", label: "Chair" },
    { value: "Table", label: "Table" },
    { value: "Bed", label: "Bed" },
    { value: "Closet", label: "Closet" },
    { value: "Sofa", label: "Sofa" },
  ];
  const [catego, setCatego] = useState(null);

  const categoryChange = (value) => {
    console.log(value.value);
    // SetFoods(value);
    setFormData((prevState) => ({
      ...prevState,
      category: value.value || "",
    }));
    setCatego(value.value)
    console.log(category);
  };

  function onChange(e) {
    if (!e.target.files) {
      console.log("yooh");
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
    }
  }
  console.log(formData);


  function deletImage (id) {
    setFormData((prevState) => ({
      ...prevState,
      [id]: null,
    }));
  }
  async function uploadImage(e) {
    setIsLoadding(true);
    const image = e.target.files[0];
    // if(sale>price){
    //   toast.error("Selling price should be lower than the regular price")
    // }
    // else{
      try {
        const Data = new FormData();
        Data.append("image", image); // Make sure 'image' matches the field name expected by the server
  
        const response = await axios.post(import.meta.env.VITE_IMG, Data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(e.target.id);
        console.log(response);
        const deleteUrl = response.data.data.delete_url;
        const displayUrl = response.data.data.display_url;
        const imageUrl = response.data.data.url;
        console.log(e.target.id);
        setFormData((prevState) => ({
          ...prevState,
          [e.target.id]: displayUrl,
        }));
  
        console.log(formData);
  
        console.log("Delete URL:", deleteUrl);
        console.log("Display URL:", displayUrl);
        console.log("Image URL:", imageUrl);
        // setImgURL(displayUrl);
        // setImgDeleteURL(deleteUrl);
      } catch (error) {
        console.log(error);
      }
    // }

    setIsLoadding(false);
  }
  
  async function onSubmit(e) {
    e.preventDefault();
    console.log(item._id);
    console.log(formData);
    if(sale>price){
      toast.error("Selling price should be lower than the regular price")
    }
    else{
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_LINK}/products/${item._id}`,
        formData
      );
      console.log(response);
      toast.success("Product Updated succesfully..!")
      onClose()
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
  }

  const handleOnChange = (e) => {
    if (e.target.id === "cont" || e.target.id === "close") {
      onClose();
    }
  };


  if (!visible) return null;
  return (
    <div
      id="cont"
      // onClick={handleOnChange}
      className="fixed inset-0 flex items-center justify-center bg-opacity-5 backdrop-blur-sm z-40 p-10 "
    >
      <div className="w-full p-4 bg-gray-50 rounded-lg border border-gray-3 00 md:p-6">
      <div className="mt-5 bg-gray-200  rounded-lg p-7 flex flex-col gap-5 text-gray-600">
          <p className="text-3xl">Add Product</p>

          <div className="flex gap-20 w-full">
            {/* image div */}
            <div className="flex flex-col gap-4 w-3/12">
              <div>
                <div className="bg-slate-100 w-80 h-96 rounded-md flex items-center justify-center border border-gray-300 p-3">
                  <div id={"image"} className="bg-slate-200 w-full h-full rounded-lg ">
                    {image ? (
                      <ImgShow id={"image"}  imgURL={image} deletImage={deletImage} />
                    ) : (
                      <ImgInput id={"image"} uploadImage={uploadImage} />
                    )}
                    {isLoadding && <Loader />}
                  </div>
                </div>
              </div>
              {/* gallary image */}
              <div className="flex gap-4">
                <div>
                  <div className="bg-slate-50 w-24 h-28 rounded-md flex items-center justify-center">
                    <div className="bg-slate-300 w-20 h-24 rounded-lg">
                      {gal_1_imgURL ? (
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
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-slate-50 w-24 h-28 rounded-md flex items-center justify-center">
                    <div className="bg-slate-300 w-20 h-24 rounded-lg">
                      {gal_2_imgURL ? (
                        <GallaryImgShow
                        id={"gal_2_imgURL"}
                          imgURL={gal_2_imgURL}
                          deletImage={deletImage}
                        />
                      ) : (
                        <ImgInput
                          id={"gal_2_imgURL"}
                          uploadImage={uploadImage}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-slate-50 w-24 h-28 rounded-md flex items-center justify-center">
                    <div className="bg-slate-300 w-20 h-24 rounded-lg">
                      {gal_3_imgURL ? (
                        <GallaryImgShow
                        id={"gal_3_imgURL"}
                          imgURL={gal_3_imgURL}
                          deletImage={deletImage}
                        />
                      ) : (
                        <ImgInput
                          id={"gal_3_imgURL"}
                          uploadImage={uploadImage}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* form div */}
            <div className="w-3/4">
            <form onSubmit={onSubmit}>
              <div className="flex flex-col gap-5">
                <div className="">
                  <label className="text font-semibold">
                    Item Name
                    <input
                      type="text"
                      className="p-2 w-full border border-gray-400 rounded md-5"
                      placeholder=""
                      id="item_name"
                      value={item_name}
                      onChange={onChange}
                      required
                    />
                  </label>
                </div>
                <div className="w-full flex flex-row gap-5">
                  <label className="text-sm font-semibold text w-1/2">
                    Regular Price
                    <input
                      type="text"
                      className="p-2 w-full border border-gray-400 rounded md-5"
                      placeholder=""
                      id="price"
                      value={price}
                      // onChange={onChange}
                      required
                    />
                  </label>
                  <label className="text-sm font-semibold text w-1/2">
                    Sale Price
                    <input
                      type="text"
                      className="p-2 w-full border border-gray-400 rounded md-5"
                      placeholder=""
                      id="sale"
                      value={sale}
                      onChange={onChange}
                    />
                  </label>
                </div>

                <div className="w-full">
                  <label className="text-sm font-semibold text">
                    Short Description
                    <textarea
                      type="text"
                      className="p-2 w-full border border-gray-400 rounded md-5"
                      placeholder=""
                      id="short_descrip"
                      value={short_descrip}
                      onChange={onChange}
                      required
                    />
                  </label>
                </div>

                <div className="w-full flex flex-row gap-5">
                  <label className="text-sm font-semibold text w-1/2">
                    Categoryh {category}
                    <Select
                      required
                      className="w-full border border-gray-400 rounded md-5"
                      options={options}
                      id="category"
                      value={category}
                      // onChange={categoryChange}
                      // onChange={onChange}
                    />
                  </label>
                  <label className="text-sm font-semibold text w-1/2">
                    Quantity
                    <input
                      type="text"
                      className="p-2 w-full border border-gray-400 rounded md-5"
                      placeholder=""
                      id="quantity"
                      value={quantity}
                      onChange={onChange}
                      required
                    />
                  </label>
                  <label className="text-sm font-semibold text w-1/2">
                    SKU
                    <input
                      type="text"
                      className="p-2 w-full border border-gray-400 rounded md-5"
                      placeholder=""
                      id="SKU"
                      value={SKU}
                      onChange={onChange}
                      required
                    />
                  </label>
                </div>

                <div className="w-full">
                  <label className="text-sm font-semibold text">
                    Full Description
                    <textarea
                      type="text"
                      className="p-2 w-full border border-gray-400 rounded md-5"
                      placeholder=""
                      id="full_descrip"
                      value={full_descrip}
                      onChange={onChange}
                      required
                    />
                  </label>
                </div>
                <div className="flex items-end justify-end mt-3">
                <button
              id="close"
              onClick={handleOnChange}
              className="px-3 py-0 mr-4 text-lg text-white duration-150 ease-in-out bg-red-600 rounded hover:bg-red-700"
            >
              Close
            </button>
                  <button
                    type="submit"
                    className="px-3 py-0 text-lg text-white duration-150 ease-in-out bg-green-600 rounded hover:bg-green-700 w-32 h-10"
                  >
                    Add
                  </button>
                </div>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
