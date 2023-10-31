import React from 'react'
import logo from '../../img/woodhy-high-resolution-logo-transparent.png'
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {

    const navigate = useNavigate();
    const location = useLocation();

    function pathMatchRoute(route) {
        // setIsCurrentRouteAdmin(vl);
    
        if (route === location.pathname) {
          // setIsCurrentRouteAdmin(false)
          return true;
        }
      }

  return (
    <header className="fixed z-50 w-screen bg-white h-20 p-6 px-16">
        {/* desktop and tablates */}
      <div className="hidden md:flex w-full h-full item-center justify-between">
        <div>
            <img src={logo} alt="logo" className="w-32 object-cover" />
        </div>

        {/* menu */}
        <div className="flex items-end justify-end">
          <ul className="flex space-x-10 mr-20">
            <li
              className={`cursor-pointer py-3 w-24 h-9 text-xl flex items-center justify-center text-gray-600  hover:text-gray-500  ${
                pathMatchRoute("/") &&
                "text-black border border-sky-500 rounded-sm"
              }`}
              onClick={() => {
                navigate("/");
                // adminOrNot();
              }}
            //   onMouseEnter={() => onMenter()}
            //   onMouseLeave={() => onMleave()}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 w-24 h-9 text-xl flex items-center justify-center text-gray-600 hover:text-gray-500  ${
                pathMatchRoute("/about") &&
                "text-black border border-sky-500 rounded-sm"
              }`}
              onClick={() => {
                navigate("/about");
                // adminOrNot();
              }}
            //   onMouseEnter={() => onMenter()}
            //   onMouseLeave={() => onMleave()}
            >
              About
            </li>
            <li
              className={`cursor-pointer py-3 w-24 h-9 text-xl flex items-center justify-center text-gray-600 hover:text-gray-500  ${
                pathMatchRoute("/projects") &&
                "text-black border border-sky-500 rounded-sm"
              }`}
              onClick={() => {
                navigate("/projects");
                // adminOrNot();
              }}
            //   onMouseEnter={() => onMenter()}
            //   onMouseLeave={() => onMleave()}
            >
              Project
            </li>

            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent `}
            ></li>
          </ul>
          <ul className="flex">
          <li
              className={`cursor-pointer py-3 w-24 h-9 text-xl flex items-center justify-center text-gray-600 hover:text-gray-500  ${
                pathMatchRoute("/login") &&
                "text-black border border-sky-500 rounded-sm"
              }`}
              onClick={() => {
                navigate("/login");
                // adminOrNot();
              }}
            //   onMouseEnter={() => onMenter()}
            //   onMouseLeave={() => onMleave()}
            >
              login
            </li>
            <li
              className={`cursor-pointer py-3 w-24 h-9 text-xl flex items-center justify-center text-gray-600 hover:text-gray-500  ${
                pathMatchRoute("/signin") &&
                "text-black border border-sky-500 rounded-sm"
              }`}
              onClick={() => {
                navigate("/signin");
                // adminOrNot();
              }}
            //   onMouseEnter={() => onMenter()}
            //   onMouseLeave={() => onMleave()}
            >
              Signin
            </li>
          </ul>
        </div>
      </div>


        {/* mobile */}
      <div className="flex md:hidden"></div>
    </header>
  )
}
