import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import ReactStar from "react-rating-stars-component";
import { toast } from "react-toastify";
import axios from "axios";
import Review from "../../component/Home/Review";
import { actionType } from "../../context/reducer";
import Add_To_Cart from "../../component/Shop/Add_To_Cart";

export default function SingleItem() {
  const [{product, cartShow, cartItems, user }, dispatch] = useStateValue();
  const [singleData, setSingleData] = useState(product);
  const [view, setView] = useState("description");
  const [quantity, setQuantity] = useState(1);
  const [displayImage, setDisplayIamge] = useState(null);
  const { id } = useParams();
  console.log(id);
console.log(user)
  let [formData, setFormData] = useState({
    item_id: id,
    user_id: user?._id || user?.id || "",
    user_name: user?.name || "",
    user_pic: user?.image || "https://i.ibb.co/gTnHqRV/pngegg.png",
    rating: 0,
    review: "",
    date: 0,
  });

  useEffect(() => {
    const foundItem = product.find((item) => item._id === id);
    //   selectedFoodRef.current = foundItem;
    console.log(product)
    console.log(foundItem);
    setDisplayIamge(foundItem.image)
    setSingleData(foundItem);
  }, []);

  const changing_DisplayImage = (image)=> {
    setDisplayIamge(image)
  }

  const { review, rating, user_id, item_id } = formData;

  console.log(formData);

  async function onSubmit(e) {
    e.preventDefault();

    // Ensure all required fields are provided
    if (!item_id || !user_id || !rating || !review) {
      toast.error("Please fill all the fields");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_LINK}/products/createreview`,
        formData
      );
      console.log(response.singleData);
      toast.success("Create a review successfully.");
    } catch (error) {
      console.error(error.response.singleData);
      toast.error("Failed to create a review. Please try again.");
    }
  }

  const ratingChanged = (newRating) => {
    setFormData((prevState) => ({
      ...prevState,
      rating: newRating || 0,
      date: new Date().toISOString(),
    }));
  };

  function onChange(e) {
    console.log("holo ");
    setFormData((prevState) => ({
      ...prevState,
      review: e.target.value,
    }));
  }

  console.log(formData);
  console.log(singleData);
  console.log(user);





  return (
    <div className="text-gray-800">
      <div className="flex md:flex-row flex-col mt-10 md:p-20 w-full text-gray-900 gap-64">
        <div className="flex bg-green-60 gap-4 md:w-3/12">
          {/* gallary image */}
          <div className="hidden md:flex flex-col gap-4">
            <div>
              {singleData.gal_1_imgURL && (
                <div className="bg-slate-50 w-24 h-28 rounded-md flex items-center justify-center">
                  <div className="bg-slate-300 w-20 h-24 rounded-lg cursor-pointer" onClick={()=>{
                    changing_DisplayImage(singleData.gal_1_imgURL)
                  }}>
                  <img src={singleData.gal_1_imgURL} alt=""  className="w-full h-full rounded-lg object-cover"/>

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
              {singleData.gal_2_imgURL && (
                <div className="bg-slate-50 w-24 h-28 rounded-md flex items-center justify-center">
                  <div className="bg-slate-300 w-20 h-24 rounded-lg cursor-pointer" onClick={()=>{
                    changing_DisplayImage(singleData.gal_2_imgURL)
                  }}>
                    <img src={singleData.gal_2_imgURL} alt=""  className="w-full h-full rounded-lg object-cover"/>
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
              {singleData.gal_3_imgURL && (
                <div className="bg-slate-50 w-24 h-28 rounded-md flex items-center justify-center">
                  <div className="bg-slate-300 w-20 h-24 rounded-lg cursor-pointer" onClick={()=>{
                    changing_DisplayImage(singleData.gal_3_imgURL)
                  }}>
                  <img src={singleData.gal_3_imgURL} alt=""  className="w-full h-full rounded-lg object-cover"/>

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

          <div>
            <div className="bg-slate-100 w-full md:w-96 md:h-[450px] rounded-md flex items-center justify-center border border-gray-300 p-3">
              <div
                id={"image"}
                className="bg-slate-200 w-full h-full rounded-lg "
              >
                <img
                  src={displayImage}
                  alt=""
                  className="w-full h-full rounded-lg object-fill"
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
        </div>

        <div className=" flex flex-col -mt-64 md:mt-5 p-5 gap-10 bg-green-0">
            <div>
              <p className="text-4xl font-semibold">{singleData.item_name}</p>
              <p className="font-semibold">Ratings</p>
              <p className="mt-5 text-lg">{singleData.short_descrip}</p>
              <p className="mt-5 text-4xl font-semibold text-gray-800">
                $ {singleData.price}
              </p>
              <p className="text-2xl line-through text-gray-700 mt-1">
                $ {singleData.sale}
              </p>
              <p className="text-xl text-gray-700 mt-1">
                In stock: {singleData.quantity}
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
                <Add_To_Cart data={singleData} quantity={quantity} />
              </div>
            </div>
          </div>
      </div>

      {/* review and descriptions */}
      <div className="flex flex-col gap-5 p-5 mt-5 md:p-32 md:-mt-28 h-[100%]">
        <div className="flex flex-row gap-6">
          <p
            className={`font-semibold text-xl border-b-2 ${
              view === "description" ? "border-b-red-600" : ""
            }  cursor-pointer hover:border-b-red-600 transition duration-150 ease-in-out`}
            onClick={() => setView("description")}
          >
            Description
          </p>
          <p
            className={`font-semibold text-xl border-b-2 ${
              view === "review" ? "border-b-red-600" : ""
            }  cursor-pointer hover:border-b-red-600 transition duration-150 ease-in-out`}
            onClick={() => setView("review")}
          >
            Reviews
          </p>
        </div>
        <div>
          {view === "description" ? (
            <p>{singleData.full_descrip}</p>
          ) : (
            <Review item_id={formData.item_id} />
          )}
        </div>
      </div>

      {/* give review */}

      <div
        className={`${
          user ? "flex" : "hidden"
        } flex-col gap-5 p-5 mb-10 md:pr-32 md:pl-32 md:pb-32 h-[100%]`}
      >
        <p className="font-bold text-2xl">Leave a Review</p>
        <ReactStar size={50} onChange={ratingChanged} />
        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
          <div className="flex flex-col gap-5">
            <label className="font-semibold">Description</label>
            <textarea
              className="w-full h-36 border rounded-md"
              placeholder="Description"
              onChange={onChange}
            ></textarea>
          </div>

          <div className="flex flex-row gap-5">
            <button className="bg-red-300 rounded-md p-2 font-semibold hover:bg-red-500 transition duration-150 ease-in-out">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
