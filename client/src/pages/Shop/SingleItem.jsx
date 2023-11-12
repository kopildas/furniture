import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import ReactStar from "react-rating-stars-component";
import { toast } from "react-toastify";
import axios from "axios";
import Review from "../../component/Home/Review";

export default function SingleItem() {
  const [{ product, user, shop_category }, dispatch] = useStateValue();
  const [singleData, setSingleData] = useState(product);
  const [view, setView] = useState("description");

  const { id } = useParams();
  console.log(id);


  let [formData, setFormData] = useState({
    item_id: id,
    user_id: user?.id || "",
    user_name: user?.name || "",
    user_pic: user?.image ||"https://i.ibb.co/gTnHqRV/pngegg.png",
    rating: 0,
    review: "",
    date: 0,
  });



  useEffect(() => {
    const foundItem = product.find((item) => item._id === id);
    //   selectedFoodRef.current = foundItem;
    setSingleData(foundItem);
  }, []);

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
      console.log(response.data);
      toast.success("Create a review successfully.");
    } catch (error) {
      console.error(error.response.data);
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
  console.log(user)

  return (
    <div className="text-gray-800">
      <div className="flex mt-16 p-20 w-full text-gray-900 gap-16">
        <div className="w-2/4 flex flex-col items-center justify-center">
          <div className="bg-red-40">
            <div className="w-96 rounded-2xl overflow-hidden object-contain ">
              <img
                src={singleData?.image}
                alt=""
                style={{ borderRadius: "1rem" }}
                className="w-full h-full bg-red-500 rounded-2xl "
              />
            </div>
          </div>

          {singleData.gal_1_imgURL ||
          singleData.gal_2_imgURL ||
          singleData.gal_3_imgURL ? (
            <div>
              <div className="w-16 h-44 object-contain rounded-2xl">
                <img
                  //   whileHover={{ scale: 1.2 }}
                  src={singleData?.image}
                  alt=""
                  className="rounded-[0.2rem]"
                />
              </div>
            </div>
          ) : (
            <div className="flex gap-5  items-center justify-center -mt-16">
              <div className="w-16 h-44 object-contain rounded-2xl">
                <img
                  //   whileHover={{ scale: 1.2 }}
                  src={singleData?.image}
                  alt=""
                  className="rounded-[0.2rem]"
                />
              </div>
              <div className="w-16 h-44 object-contain rounded-2xl">
                <img
                  //   whileHover={{ scale: 1.2 }}
                  src={singleData?.image}
                  alt=""
                  className="rounded-[0.2rem]"
                />
              </div>
              <div className="w-16 h-44 object-contain rounded-2xl">
                <img
                  //   whileHover={{ scale: 1.2 }}
                  src={singleData?.image}
                  alt=""
                  className="rounded-[0.2rem]"
                />
              </div>
            </div>
          )}
        </div>
        <div className="w-2/4 flex flex-col mt-10 gap-10">
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
              <button className="border w-8 h-8 text-4xl flex items-center justify-center">
                -
              </button>
              <button disabled="disabled">345</button>
              <button className="border w-8 h-8 text-4xl flex items-center justify-center">
                +
              </button>
            </div>
            <div className="flex gap-1">
              <button className="border w-full p-3 h-8 text-xl flex items-center justify-center">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* review and descriptions */}
      <div className="flex flex-col gap-5  p-32 -mt-44 h-[100%]">
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
            } flex-col gap-5 pr-32 pl-32 pb-32 h-[100%]`}
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
