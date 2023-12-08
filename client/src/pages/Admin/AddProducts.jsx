import axios from "axios";
import React, { useState } from "react";
import Select from "react-tailwindcss-select";
import GallaryImgShow from "../../component/Admin_Comp/GallaryImgShow";
import ImgInput from "../../component/Admin_Comp/ImgInput";
import ImgShow from "../../component/Admin_Comp/ImgShow";
import Sidebar from "../../component/Admin_Comp/Sidebar/Sidebar";
import Loader from "../../component/Loader";
import { toast } from "react-toastify";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";

export default function AddProducts() {
  const [isLoadding, setIsLoadding] = useState(false);
  const [{ product, user }, dispatch] = useStateValue();

  // const [imgURL, setImgURL] = useState(null);
  // const [gal_1_imgURL, setGal_1_ImgURL] = useState(null);
  // const [gal_2_imgURL, setGal_2_ImgURL] = useState(null);
  // const [gal_3_imgURL, setGal_3_ImgURL] = useState(null);
  let [formData, setFormData] = useState({
    item_name: "",
    sale: 0,
    price: 0,
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
    setCatego(value.value);
    console.log(category);
  };
  console.log(catego);
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
  function deletImage(e) {
    setFormData((prevState) => ({
      ...prevState,
      image: null,
    }));

    // try {
    //   console.log("successfully");
    //   console.log(imgDeleteURL);
    //   console.log(imgDeleteURL);
    //   const response = await axios.delete(imgDeleteURL);
    //   console.log("Image deleted successfully");
    //   console.log(response);
    // } catch (error) {
    //   // console.error("Failed to delete the image:", error);
    //   console.log(error);
    // }
  }
  function deletgal_3_imgURL(e) {
    setFormData((prevState) => ({
      ...prevState,
      gal_3_imgURL: null,
    }));
  }
  function deletgal_2_imgURL(e) {
    setFormData((prevState) => ({
      ...prevState,
      gal_2_imgURL: null,
    }));
  }
  function deletgal_1_imgURL(e) {
    setFormData((prevState) => ({
      ...prevState,
      gal_1_imgURL: null,
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (sale > price) {
      toast.error("Selling price should be lower than the regular price");
    } else if (!image) {
      toast.error("You have to choose featured image!");
    } else {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_LINK}/products`,
          formData
        );
        console.log(response.data.product);
        // setData(response.data.product);
        // toast.success("Product added succesfully..!");
        dispatch({
          type: actionType.UPDATE_PRODUCTS,
          updateProd: true,
        });
        toast.success("New Product Added.");
        setFormData((prevState) => ({
          ...prevState,
          item_name: "",
          sale: 0,
          price: 0,
          category: "",
          quantity: 1,
          cartORadd: "cart",
          SKU: "",
          short_descrip: "",
          full_descrip: "",
          gal_1_imgURL: null,
          gal_2_imgURL: null,
          gal_3_imgURL: null,
          image: null,
        }));
        // localStorage.setItem("product", JSON.stringify(response.data.product));
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

  return (
    <div className="mt-12 text-black flex bg-slate-50">
      <Sidebar className="sticky scroll-m-0 z-50" />
      <div className="w-full p-10">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h3 className="text-4xl font-bold text-gray-700">Add Product</h3>
            <p className="text-xl mt-2">Home : Product</p>
          </div>
          <button className="px-3 py-0 text-lg text-white duration-150 ease-in-out bg-blue-500 rounded hover:bg-blue-700 w-32 h-10">
            View All
          </button>
        </div>

        <div className="mt-5 bg-gray-200  rounded-lg p-7 flex flex-col gap-5 text-gray-600">
          <p className="text-3xl">Add Product</p>

          <div className="flex gap-20 w-full">
            {/* image div */}
            <div className="flex flex-col gap-4 w-3/12">
              <div>
                <div className="bg-slate-100 w-80 h-96 rounded-md flex items-center justify-center border border-gray-300 p-3">
                  <div
                    id={"image"}
                    className="bg-slate-200 w-full h-full rounded-lg "
                  >
                    {image ? (
                      <ImgShow
                        id={"image"}
                        imgURL={image}
                        deletImage={deletImage}
                      />
                    ) : (
                      <ImgInput id={"image"} uploadImage={uploadImage} />
                    )}
                    <div className="flex items-center justify-center mt-12 text-5xl">
                      {isLoadding && <Loader />}
                    </div>
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
                          deletImage={deletgal_1_imgURL}
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
                          deletImage={deletgal_2_imgURL}
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
                          deletImage={deletgal_3_imgURL}
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
                        onChange={onChange}
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
                      Categoryh {catego}
                      <Select
                        required
                        className="w-full border border-gray-400 rounded md-5"
                        options={options}
                        id="category"
                        value={catego}
                        onChange={categoryChange}
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
