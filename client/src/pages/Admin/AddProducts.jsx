import axios from "axios";
import React, { useState } from "react";
import Select from "react-tailwindcss-select";
import GallaryImgShow from "../../component/Admin_Comp/GallaryImgShow";
import ImgInput from "../../component/Admin_Comp/ImgInput";
import ImgShow from "../../component/Admin_Comp/ImgShow";
import Sidebar from "../../component/Admin_Comp/Sidebar/Sidebar";
import Loader from "../../component/Loader";

export default function AddProducts() {
  const [isLoadding, setIsLoadding] = useState(false);
  // const [imgURL, setImgURL] = useState(null);
  // const [gal_1_imgURL, setGal_1_ImgURL] = useState(null);
  // const [gal_2_imgURL, setGal_2_ImgURL] = useState(null);
  // const [gal_3_imgURL, setGal_3_ImgURL] = useState(null);
  const [imgDeleteURL, setImgDeleteURL] = useState(null);
  let [formData, setFormData] = useState({
    item_name: "",
    sale: "",
    price: "",
    category: "",
    quantity: 1,
    cartORadd: "cart",
    SKU: "",
    short_descrip: "",
    full_descrip: "",
  });
  const {
    item_name,
    sale,
    price,
    category,
    images,
    quantity,
    SKU,
    short_descrip,
    full_descrip,
    gal_1_imgURL,
    gal_2_imgURL,
    gal_3_imgURL,
    image,
  } = formData;

  const options = [
    { value: "Chair", label: " Chair" },
    { value: "Table", label: " Table" },
    { value: "Bed", label: " Bed" },
    { value: "Closet", label: " Closet" },
  ];

  const categoryChange = (value) => {
    console.log(value.value);
    // SetFoods(value);
    setFormData((prevState) => ({
      ...prevState,
      category: value.value || "",
    }));

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
  // formData = {
  //   ...formData,
  //   category: foods?.value || "",
  //   cartORadd: "cart",
  //   quantity:1, // If no foods is selected, default to an empty string
  // };

  console.log(formData);
  async function uploadImage(e) {
    setIsLoadding(true);
    const image = e.target.files[0];

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
      // if(e.target.id === 'image'){
      //   console.log(e.target.id);
      //   formData = {
      //     ...formData,
      //     imageUrl: displayUrl,
      //   };
      // }
      // if(e.target.id === 'gal_1_imgURL'){
      //   console.log(e.target.id);
      //   formData = {
      //     ...formData,
      //     gal_1_imgURL: displayUrl,
      //   };
      // }
      // if(e.target.id === 'gal_2_imgURL'){
      // console.log(e.target.id);
      //   formData = {
      //     ...formData,
      //     gal_2_imgURL: displayUrl,
      //   };
      // }
      // if(e.target.id === 'gal_3_imgURL'){
      //   console.log(e.target.id);
      //   formData = {
      //     ...formData,
      //     gal_3_imgURL: displayUrl,
      //   };
      // }
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
      setImgDeleteURL(deleteUrl);
    } catch (error) {
      console.log(error);
    }

    setIsLoadding(false);
  }
  async function deletImage() {
    console.log("deleted successfully");
    try {
      console.log("successfully");
      console.log(imgDeleteURL);
      console.log(imgDeleteURL);
      const response = await axios.delete(imgDeleteURL);
      console.log("Image deleted successfully");
      console.log(response);
    } catch (error) {
      // console.error("Failed to delete the image:", error);
      console.log(error);
    }
  }

  const link = "http://localhost:4001";

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${link}/api/v1/products`,
        formData
      );
      console.log(response);
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
      // const responseText = err.response.data;

      // console.log(responseText);
      // toast.error(responseText.msg);
      console.log(err);
    }
  }




  return (
    <div className="mt-20 text-black flex bg-slate-200">
      <Sidebar className="sticky scroll-m-0 z-50" />
      <div className="w-full p-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h3>Add Product</h3>
            <p>Home : Product</p>
          </div>
          <button>View all</button>
        </div>

        <div className="mt-5">
          <p>Add Product</p>

          <div className="flex gap-10">
            {/* image div */}
            <div className="flex flex-col gap-4">
              <div>
                <div className="bg-slate-500 w-72 h-80 rounded-md flex items-center justify-center">
                  <div className="bg-slate-300 w-64 h-72 rounded-lg ">
                    {image ? (
                      <ImgShow imgURL={image} deletImage={deletImage} />
                    ) : (
                      <ImgInput id={"image"} uploadImage={uploadImage} />
                    )}
                    {isLoadding && <Loader />}
                  </div>
                </div>
              </div>
              {/* gallary image */}
              <div className="flex gap-6">
                <div>
                  <div className="bg-slate-500 w-20 h-24 rounded-md flex items-center justify-center">
                    <div className="bg-slate-300 w-16 h-20 rounded-lg">
                      {gal_1_imgURL ? (
                        <GallaryImgShow
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
                  <div className="bg-slate-500 w-20 h-24 rounded-md flex items-center justify-center">
                    <div className="bg-slate-300 w-16 h-20 rounded-lg">
                      {gal_2_imgURL ? (
                        <GallaryImgShow
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
                  <div className="bg-slate-500 w-20 h-24 rounded-md flex items-center justify-center">
                    <div className="bg-slate-300 w-16 h-20 rounded-lg">
                      {gal_3_imgURL ? (
                        <GallaryImgShow
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
            <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-5">
              <div className="w-[700px]">
                <label className="text-sm font-semibold text">
                  Item Name
                  <input
                    type="text"
                    className="p-2 w-full border border-gray-700 rounded md-5"
                    placeholder=""
                    id="item_name"
                    value={item_name}
                    onChange={onChange}
                    required
                  />
                </label>
              </div>
              <div className="w-[700px] flex flex-row gap-5">
                <label className="text-sm font-semibold text w-1/2">
                  Regular Price
                  <input
                    type="text"
                    className="p-2 w-full border border-gray-700 rounded md-5"
                    placeholder=""
                    id="price"
                    value={price}
                    onChange={onChange}
                    required
                  />
                </label>
                <label className="text-sm font-semibold text w-1/2">
                  Sale Price
                  <input
                    type="text"
                    className="p-2 w-full border border-gray-700 rounded md-5"
                    placeholder=""
                    id="sale"
                    value={sale}
                    onChange={onChange}
                    required
                  />
                </label>
              </div>

              <div className="w-[700px]">
                <label className="text-sm font-semibold text">
                  Short Description
                  <textarea
                    type="text"
                    className="p-2 w-full border border-gray-700 rounded md-5"
                    placeholder=""
                    id="short_descrip"
                    value={short_descrip}
                    onChange={onChange}
                    required
                  />
                </label>
              </div>

              <div className="w-[700px] flex flex-row gap-5">
                <label className="text-sm font-semibold text w-1/2">
                  Category
                  <Select
                    required
                    className="p-2 w-full border border-gray-700 rounded md-5"
                    options={options}
                    id="category"
                    value={category}
                    onChange={categoryChange}
                    // onChange={onChange}
                  />
                </label>
                <label className="text-sm font-semibold text w-1/2">
                  Quantity
                  <input
                    type="text"
                    className="p-2 w-full border border-gray-700 rounded md-5"
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
                    className="p-2 w-full border border-gray-700 rounded md-5"
                    placeholder=""
                    id="SKU"
                    value={SKU}
                    onChange={onChange}
                    required
                  />
                </label>
              </div>

              <div className="w-[700px]">
                <label className="text-sm font-semibold text">
                  Full Description
                  <textarea
                    type="text"
                    className="p-2 w-full border border-gray-700 rounded md-5"
                    placeholder=""
                    id="full_descrip"
                    value={full_descrip}
                    onChange={onChange}
                    required
                  />
                </label>
              </div>
              <button
              type="submit"
              className="px-3 py-0 text-lg text-white duration-150 ease-in-out bg-green-600 rounded hover:bg-green-700"
            >
              Add
            </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
