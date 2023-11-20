import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReactStar from "react-rating-stars-component";
import { toast } from "react-toastify";


export default function Review({ item_id }) {
  const [reviews, setReviews] = useState(null);

  async function fetch_review () {
    try {
        const response = await axios.get(
          `${import.meta.env.VITE_LINK}/products/createreview/${item_id}`
        );
        console.log(response);
        const fetchedReviews = response.data.reviews;
        setReviews(fetchedReviews);
       
      } catch (err) {
        const responseText = err.response.data;
  
        console.log(responseText);
        toast.error(responseText.msg);
        console.log(err);
      }
}


  useEffect(() => {

    fetch_review()

  }, []);
  

console.log(reviews);


  return (
    <div>
      <div>
        {reviews &&
          reviews.map((item) => (
            <div key={item._id} className="gap-2 mt-4" >
              <div className="flex flex-row gap-2">
                <div className="h-16 w-16 flex-shrink-0">
                  <img className="h-14 w-14 rounded-full" src={item.user_pic || `../../../public/images/avtar.jpg`} alt=""/>
                </div>
                <div className="text-sm">
              <p className="font font-semibold">{item.user_name || `User`}</p>
              <ReactStar size={20} value={item.rating}  />
              <p>{item.review}</p>
                </div>
              </div>
              
            </div>
          ))}
      </div>
    </div>
  );
}