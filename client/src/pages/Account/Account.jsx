import React, { useState } from "react";
import { useStateValue } from "../../context/StateProvider";
import { toast } from "react-toastify";
import axios from "axios";
import { actionType } from "../../context/reducer";

export default function Account() {
  const [{ product, cartShow, user, cartItems, favorite_Items }, dispatch] =
    useStateValue();

  const [save, setSave] = useState(false);

  const [formData, setFormData] = useState({
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    phone: user.phone,
    // lastname: user.lastname,
  });
  const { email, name, lastname, phone } = formData;
  // name: 'alita',
  // lastname: 'das',
  // image: null,
  // purchased_product: 0,
  // email: 'alita@gmail.com',
  // location: '',
  // phone: '01700000000',
  function onChange(e) {
    setSave(true);
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function handleEditUserData(e) {
    e.preventDefault();
    console.log(formData);
    const phoneRegex = /^[0-9]+$/;
    const isPhoneNumberValid = phoneRegex.test(formData.phone);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(formData.email);

    if (!isPhoneNumberValid) {
      toast.error("Phone number have to be contain only 0-9.");
    }
    if (formData.phone.length != 11) {
      toast.error("Phone number length have to be 11.");
    }
    if (!isEmailValid) {
      toast.error("Email is not valid.");
    }

    if(isEmailValid && isPhoneNumberValid && formData.phone.length === 11){
      try {
        const response = await axios.put(
          `${import.meta.env.VITE_LINK}/auth/${user._id}`,
          formData
        );
        console.log(response);
        toast.success("Product Updated succesfully..!")
        // onClose()
        // const { user } = response.data;
        console.log(response.data.user);
        // console.log(token);
        dispatch({
          type: actionType.REGISTER_USER_UPDATE,
          user: response.data.user,
        });
        localStorage.setItem("user", JSON.stringify(response.data.user));
        // localStorage.setItem("token", token);
        setSave(false);
      } catch (err) {
        const responseText = err.response.data;
  
        console.log(responseText);
        toast.error(responseText.msg);
        console.log(err);
      }
    }


  }

  return (
    <div className="mt-20 text-gray-900 flex items-center justify-center">
      <div>
        <p className="text-3xl font-bold mb-5">My Profile</p>
        <form onSubmit={handleEditUserData}>
          <div className="mb-4 text-gray-700">
            <label htmlFor="email" className="font-semibold text-lg">
              Name:
            </label>
            <input
              className="input-field w-full border-2 border-gray-400 bg-transparent h-10 rounded-xl pl-5"
              type="text"
              id="name"
              value={name}
              onChange={onChange}
            />
          </div>
          <div className="mb-4 text-gray-700">
            <label htmlFor="email" className="font-semibold text-lg">
              Last name:
            </label>
            <input
              className="input-field w-full border-2 border-gray-400 bg-transparent h-10 rounded-xl pl-5"
              type="text"
              id="lastname"
              value={lastname}
              onChange={onChange}
            />
          </div>
          <div className="mb-4 text-gray-700">
            <label htmlFor="email" className="font-semibold text-lg">
              Phone:
            </label>
            <input
              className="input-field w-full border-2 border-gray-400 bg-transparent h-10 rounded-xl pl-5"
              type="text"
              id="phone"
              value={phone}
              onChange={onChange}
            />
          </div>
          <div className="mb-4 text-gray-700">
            <label htmlFor="email" className="font-semibold text-lg">
              Email:
            </label>
            <input
              className="input-field w-full border-2 border-gray-400 bg-transparent h-10 rounded-xl pl-5"
              type="text"
              id="email"
              value={email}
              onChange={onChange}
            />
          </div>

          <button
            className={`${
              save ? "bg-amber-700 hover:bg-amber-800" : "bg-gray-400"
            } w-20  text-white font-medium uppercase  transition duration-150 ease-in-out shadow-lg py-2 rounded-lg`}
            type="submit"
          >
            save
          </button>
        </form>
      </div>
    </div>
  );
}

// name: 'alita',
//     lastname: 'das',
//     image: null,
//     purchased_product: 0,
//     email: 'alita@gmail.com',
//     location: '',
//     phone: '01700000000',
