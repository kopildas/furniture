import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../context/StateProvider';
import axios from 'axios';
import { Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { actionType } from '../../context/reducer';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader';

export default function Login_popup({onClosing_log_pop,signUp_from_login_pop}) {

    const handleOnChange = (e) => {
        if (e.target.id === "cont" || e.target.id === "close") {
            onClosing_log_pop();
        }
      };
    const Signup_pop = () => {
        signUp_from_login_pop();
        
      };
      const [isLoader,setIsLoader] = useState(false)
      const [showPassword, setShowPassword] = useState(false);
      const navigate = useNavigate();
      const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
    
      const [{user}, dispatch] = useStateValue();
    
      const { email, password } = formData;
      // this function did not work it cant save state data and show it in dev
      function onChange(e) {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.id]: e.target.value,
        }));
      }


      async function handleLogin(e) {
        e.preventDefault();
        // Code to handle login goes here
        console.log("login")
        console.log(formData);
        setIsLoader(true)
        try {
          const response = await axios.post(
            `${import.meta.env.VITE_LINK}/auth/login`,
            formData
          );
          console.log(response);
          const { user, token } = response.data;
          console.log(user);
          console.log(token);
          dispatch({
            type: actionType.LOGIN_USER_SUCCESS,
            user: user,
            token: token,
          });
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("token", (token));
          setIsLoader(false)
        } catch (err) {
          const responseText = err.response.data;
    
          console.log(responseText);
          toast.error(responseText.msg);
          console.log(err);
          setIsLoader(false)
        }
      }

      useEffect(()=> {
        if(user) {
          setTimeout(() => {
            // navigate('/')
            setIsLoader(false)
            onClosing_log_pop();
          },3000)
        }
      },[user])




  return (
    <div
    id="cont"
    onClick={handleOnChange}
    className="fixed z-50 inset-0 flex items-center justify-center k bg-opacity-5 backdrop-blur-sm"
  >
    {isLoader ? ( <Loader/>) : 
      (<div className="w-4/12 backdrop-blur-sm  rounded-lg md:p-6" >
    <div className="mt-16 mb-28 p-10 rounded-xl flex flex-col items-center justify-center text-gray-700" 
    style={{
              backgroundColor: "rgba(25, 28, 27, 0.6)",
            }}>
        <h2 className="text-2xl text-center mb-6 text-gray-100">Login..</h2>
        <form onSubmit={handleLogin} className="bg-slate-00 rounded-lg p-5">
          <div className="mb-4 text-gray-100">
            <label htmlFor="email">Email:</label>
            <input
              className="input-field w-full border-b-2 border-b-gray-400 bg-transparent h-10"

              type="text"
              id="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="relative mb-4 text-gray-100">
            <label htmlFor="password">Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={onChange}
              className="input-field pr-10 h-10 w-full border-b-2 border-b-gray-400 bg-transparent"
            />
            {showPassword ? (
              <AiFillEyeInvisible
                className="absolute top-11 transform -translate-y-1/2 right-3 text-xl cursor-pointer"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            ) : (
              <AiFillEye
                className="absolute transform -translate-y-1/2 right-3 top-11 text-xl cursor-pointer"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            )}
          </div>
          <div className="flex flex-col justify-between mb-4 mt-10 text-gray-100">
            <p>
              Don't have an account?{" "}
              <span
                onClick={() => {
                    // navigate("/signin");
                    Signup_pop()
                  }}
                // onClick={toggle}
                className="text-blue-400 hover:text-blue-700 transition duration-200 ease-in-out ml-1 cursor-pointer"
              >
                Register
              </span>
            </p>
            <p>
              <span
                // to="/forgot-password"
                // onClick={toggle}
                className="text-blue-400 hover:text-blue-700 transition duration-200 ease-in-out ml-1 cursor-pointer"
              >
                Forgot Password
              </span>
            </p>
          </div>
          <button
            className="w-full bg-blue-600 text-white font-medium uppercase hover:bg-blue-800 transition duration-150 ease-in-out shadow-lg py-2 rounded-lg"
            type="submit"
          >
            Login
          </button>
          <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-400 after:border-t after:flex-1 after:border-gray-400">
            <p className="text-center font-semibold mx-4">OR</p>
          </div>
          {/* <OAuth /> */}
        </form>
      </div>
   
    </div>)}
  </div>
  )
}
