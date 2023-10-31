import React, { useState } from "react";
import Sidebar from "../../component/Admin_Comp/Sidebar/Sidebar";
import { BsFillPencilFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import Loader from "../../component/Loader";
import axios from "axios";

export default function AddProducts() {
  const [isLoadding, setIsLoadding] = useState(false);
  const [imgURL, setImgURL] = useState(null);
  const [imgDeleteURL, setImgDeleteURL] = useState(null);

  async function uploadImage(e) {
    setIsLoadding(true);
    const image = e.target.files[0];

    try {
      const formData = new FormData();
      formData.append("image", image); // Make sure 'image' matches the field name expected by the server

      const response = await axios.post(import.meta.env.VITE_IMG, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response);
      const deleteUrl = response.data.data.delete_url;
      const displayUrl = response.data.data.display_url;
      const imageUrl = response.data.data.url;

      console.log("Delete URL:", deleteUrl);
      console.log("Display URL:", displayUrl);
      console.log("Image URL:", imageUrl);
      setImgURL(displayUrl);
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
                    {imgURL ? (
                      <>
                      <img
                        src={imgURL}
                        alt=""
                        className="w-full h-full rounded-lg object-cover"
                      />
                      <div className="flex items-end justify-end">
                      <AiFillDelete className="text absolute text-6xl opacity-70 hover:opacity-100 hover:text-7xl cursor-pointer" onClick={deletImage} />
                      </div>
                      </>
                    ) : (
                      <label>
                        <div className="flex items-end justify-end p-2">
                          <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center cursor-pointer">
                            <BsFillPencilFill />
                          </div>
                          <input
                            type="file"
                            name="uploadimage"
                            accept="image/*"
                            onChange={uploadImage}
                            className="w-0 h-0"
                          />
                        </div>
                      </label>
                    )}
                    {isLoadding && <Loader />}
                  </div>
                </div>
              </div>
              <div className="flex gap-6">
                <div>
                  <div className="bg-slate-500 w-20 h-24 rounded-md flex items-center justify-center">
                    <div className="bg-slate-300 w-16 h-20 rounded-lg">
                      <div className="flex items-end justify-end p-2">
                        <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center">
                          <BsFillPencilFill />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-slate-500 w-20 h-24 rounded-md flex items-center justify-center">
                    <div className="bg-slate-300 w-16 h-20 rounded-lg">
                      <div className="flex items-end justify-end p-2">
                        <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center">
                          <BsFillPencilFill />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-slate-500 w-20 h-24 rounded-md flex items-center justify-center">
                    <div className="bg-slate-300 w-16 h-20 rounded-lg">
                      <div className="flex items-end justify-end p-2">
                        <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center">
                          <BsFillPencilFill />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* form div */}
            <div>data form</div>
          </div>
        </div>
      </div>
    </div>
  );
}
