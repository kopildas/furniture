import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";
import Loader from "../Loader";

export default function SignUp_popup({
  onClosing_Signup_pop,
  login_from_signup_pop,
}) {
  const handleOnChange = (e) => {
    if (e.target.id === "cont" || e.target.id === "close") {
      onClosing_Signup_pop();
    }
  };

  const Login_pop = () => {
    login_from_signup_pop();
  };

  const [isLoader, setIsLoader] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confpassword: "",
    picture: null,
  });

  const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const { name, lastname, email, password, confpassword, picture } = formData;
  console.log(formData);
  const handleInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  // name: '',
  //   lastname: '',
  //   email: '',
  //   password: '',
  //   confpassword: '',

  async function handleSignup(e) {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.lastname ||
      !formData.email ||
      !formData.password ||
      !formData.confpassword
    ) {
      toast.error("Please provide all values");
    } else if (formData.password != formData.confpassword) {
      toast.error("Password is not matched");
    } else {

      try {
        setIsLoader(true);
        const response = await axios.post(
          `${import.meta.env.VITE_LINK}/auth/register`,
          formData
        );
        console.log(response);
        const { user, token } = response.data;
        console.log(user);
        console.log(token);
        dispatch({
          type: actionType.REGISTER_USER_SUCCESS,
          user: user,
          token: token,
        });
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        onClosing_Signup_pop();
        toast.success("User Registered Successfully");
        setIsLoader(false);
      } catch (err) {
        const responseText = err.response.data;
        setIsLoader(false);
        console.log(responseText);
        toast.error(responseText.msg);
        console.log(err);
      }
    }
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        onClosing_Signup_pop();
        setIsLoader(false);
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  const [seen, setSeen] = useState(false);
  const togglePop = () => {
    setSeen(!seen);
  };

  return (
    <div
      id="cont"
      onClick={handleOnChange}
      className="fixed z-50 inset-0 flex items-center justify-center k bg-opacity-5 filter backdrop-blur-sm"
    >
      {isLoader ? (
        <Loader />
      ) : (
        <div
          className="flex mt-16 mb-16 filter backdrop-blur-sm justify-center bg-cover bg-center bg-no-repeat bg-fixed text-gray-100 rounded-xl"
          style={{
            backgroundColor: "rgba(25, 28, 27, 0.6)",
          }}
          // style={{ backgroundImage: `url("./pasta.jpg")` }}
        >
          <div className="w-full max-w-sm rounded-lg p-6 grid">
            <h2 className="text-2xl text-center font-semibold mb-2">
              Register
            </h2>
            <form
              onSubmit={handleSignup}
              className="bg-slate-00 p-5 rounded-md"
            >
              <label className="mb-4">
                name:
                <input
                  className="input-field w-full border-b-2 border-b-gray-400 bg-transparent mb-3"
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleInputChange}
                />
              </label>
              <label className="mb-4">
                lastname:
                <input
                  className="input-field w-full border-b-2 border-b-gray-400 bg-transparent mb-3"
                  type="text"
                  id="lastname"
                  value={lastname}
                  onChange={handleInputChange}
                />
              </label>
              <label className="mb-4">
                Email:
                <input
                  className="input-field w-full border-b-2 border-b-gray-400 bg-transparent mb-3"
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleInputChange}
                />
              </label>
              <div className="relative mb-4">
                <label className="mb-2">
                  Password:
                  <input
                    className="input-field pr-10 w-full border-b-2 border-b-gray-400 bg-transparent"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={handleInputChange}
                  />
                  {showPassword ? (
                    <AiFillEyeInvisible
                      className="absolute top-9 transform -translate-y-1/2 right-3 text-xl cursor-pointer"
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  ) : (
                    <AiFillEye
                      className="absolute transform -translate-y-1/2 right-3 top-9 text-xl cursor-pointer"
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  )}
                </label>
              </div>

              <div className="relative mb-4">
                <label className="mb-2">
                  Confirm Password:
                  <input
                    className="input-field pr-10 w-full border-b-2 border-b-gray-400 bg-transparent"
                    type={showPassword ? "text" : "password"}
                    id="confpassword"
                    value={confpassword}
                    onChange={handleInputChange}
                  />
                  {showPassword ? (
                    <AiFillEyeInvisible
                      className="absolute top-9 transform -translate-y-1/2 right-3 text-xl cursor-pointer"
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  ) : (
                    <AiFillEye
                      className="absolute transform -translate-y-1/2 right-3 top-9 text-xl cursor-pointer"
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  )}
                </label>
              </div>

              <div className="flex  flex-col justify-between mb-4">
                <p>
                  Already have an account?
                  <span
                    //   to="/login"
                    onClick={() => {
                      // navigate("/signin");
                      Login_pop();
                    }}
                    className="text-blue-500 hover:text-blue-700 transit ion duration-200 ease-in-out ml-1 cursor-pointer"
                  >
                    Login
                  </span>
                  {/* {seen && <Login toggle={togglePop} />} */}
                </p>
                <p>
                  <span
                    //   to="/forgot-password"
                    className="text-blue-500 hover:text-blue-700 transit ion duration-200 ease-in-out ml-1 cursor-pointer"
                  >
                    Forgot Password
                  </span>
                </p>
              </div>
              <button
                className="w-full bg-blue-600 text-white font-medium uppercase hover:bg-blue-800 transition duration-150 ease-in-out shadow-lg py-2 rounded-lg"
                type="submit"
              >
                Sign Up
              </button>
              <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-400 after:border-t after:flex-1 after:border-gray-400">
                <p className="text-center font-semibold mx-4">OR</p>
              </div>
              {/* <OAuth /> */}
            </form>
            <button id="close" onClick={handleOnChange}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
