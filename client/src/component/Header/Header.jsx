import React, { useState } from "react";
import logo from "../../img/woodhy-high-resolution-logo-transparent.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import SidebarItem from "../Admin_Comp/Sidebar/SidebarItem";
import {
  FaBars,
  FaCommentAlt,
  FaRegChartBar,
  FaTh,
  FaThList,
  FaUserAlt,
} from "react-icons/fa";
import { AiOutlineMail,AiFillYoutube,AiFillFacebook } from "react-icons/ai";
import { BsTelephone,BsTwitter, BsInstagram } from "react-icons/bs";
import { MdShoppingBasket } from "react-icons/md";
import { useStateValue } from "../../context/StateProvider";

export default function Header() {
  const [{ product, user,cartItems }, dispatch] = useStateValue();
  console.log(user);
  const navigate = useNavigate();
  const location = useLocation();
  const [isFurnitureDropdownOpen, setFurnitureDropdownOpen] = useState(false);
  const [istoggleUserMenuOpen, setIstoggleUserMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleFurnitureDropdown = () => {
    setFurnitureDropdownOpen(!isFurnitureDropdownOpen);
  };
  const toggleUserMenu = () => {
    setIstoggleUserMenuOpen(!istoggleUserMenuOpen);
  };

  const DropmenuItem = [
    {
      path: "/product",
      name: "Chair",
      icon: <FaTh />,
    },
    {
      path: "/product",
      name: "sofa",
      icon: <FaTh />,
    },
    {
      path: "/product",
      name: "Table",
      icon: <FaUserAlt />,
    },
    {
      path: "/product",
      name: "Bed",
      icon: <FaUserAlt />,
    },
    {
      path: "/product",
      name: "Closet",
      icon: <FaUserAlt />,
    },
  ];
  const UserItem = [
    {
      path: "/product",
      name: "Profile",
      icon: <FaTh />,
    },
    {
      path: null,
      name: "Log Out",
      icon: <FaTh />,
    },
  ];

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <header className=" z-50 w-screen bg-white h-20 p-6 px-16">
      {/* Desktop and Tablets */}
      <nav>
        <div className="hidden md:flex flex-col w-full h-full item-center justify-between">
          <div className="text-black flex w-full h-full item-center justify-between">
            <div className="flex flex-row items-start justify-start gap-5">
              <div className="flex items-center gap-2 text-amber-800 text-lg">
                <BsTelephone />
                <p>+xx xxx xxxx</p>
              </div>
              <div className="flex items-center gap-2 text-amber-800 text-lg">
                <AiOutlineMail />
                <p>xxxx@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-5 text-xl">
              <BsInstagram />
              <AiFillFacebook/>
              <BsTwitter/>
              <AiFillYoutube/>
            </div>
          </div>

          <div className="w-full border-b mt-2 mb-3">

          </div>

          <div className="hidden md:flex w-full h-full item-center justify-between">
            <div>
              <img
                src={logo}
                onClick={() => {
                  navigate("/");
                }}
                alt="logo"
                className="w-32 object-cover cursor-pointer"
              />
            </div>

            {/* Menu */}
            <div className="flex items-end justify-end">
              <ul className="flex space-x-10 mr-20">
                <li
                  className={`cursor-pointer py-3 w-24 h-9 text-xl flex items-center justify-center text-gray-600  hover:text-gray-500  ${
                    pathMatchRoute("/") &&
                    "text-black border-b-2 border-b-amber-900  rounded-sm"
                  }`}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </li>
                <li
                  className={`cursor-pointer py-3 w-24 h-9 text-xl flex items-center justify-center text-gray-600 hover:text-gray-500  ${
                    pathMatchRoute("/about") &&
                    "text-black border-b-2 border-b-amber-900 rounded-sm"
                  }`}
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  About
                </li>
                <li
                  className={`cursor-pointer py-3 w-24 h-9 text-xl flex items-center justify-center text-gray-600 hover:text-gray-500  ${
                    pathMatchRoute("/projects") &&
                    "text-black border-b-2 border-b-amber-900 rounded-sm"
                  }`}
                  onMouseEnter={() => toggleFurnitureDropdown()}
                  onMouseLeave={() => toggleFurnitureDropdown()}
                >
                  Furniture
                  <div className="relative">
                    <div
                      className={`${
                        isFurnitureDropdownOpen ? "block" : "hidden"
                      } absolute -left-40 mt-4 py-2 w-36 bg-slate-50 rounded-lg shadow-lg`}
                    >
                      {/* Dropdown Content */}
                      {DropmenuItem.map((item, index) => (
                        <NavLink
                          key={index}
                          to={item.path} // Use NavLink to navigate
                          className="block px-4 py-2 text-gray-700 hover:text-black hover:bg-slate-100"
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </li>
                <li
                  className={`cursor-pointer py-3 w-24 h-9 text-xl flex items-center justify-center text-gray-600 hover:text-gray-500  ${
                    pathMatchRoute("/projects") &&
                    "text-black border-b-2 border-b-amber-900 rounded-sm"
                  }`}
                  onClick={() => {
                    navigate("/projects");
                  }}
                >
                  Showroom
                </li>

                <li
                  className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent `}
                ></li>
              </ul>
              {!user ? (
                <ul className="flex">
                  <li
                    className={`cursor-pointer py-3 w-24 h-9 text-xl flex items-center justify-center text-gray-600 hover:text-gray-500  ${
                      pathMatchRoute("/login") &&
                      "text-black border-b-2 border-b-amber-900 rounded-sm"
                    }`}
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    login
                  </li>
                  <li
                    className={`cursor-pointer py-3 w-24 h-9 text-xl flex items-center justify-center text-gray-600 hover:text-gray-500  ${
                      pathMatchRoute("/signin") &&
                      "text-black border-b-2 border-b-amber-900 rounded-sm"
                    }`}
                    onClick={() => {
                      navigate("/signin");
                    }}
                  >
                    Signin
                  </li>
                </ul>
              ) : (
                <ul className="flex">
                  <li
                    className={`cursor-pointer py-3 w-24 h-9 text-xl flex items-center justify-center text-gray-600 hover:text-gray-500  ${
                      pathMatchRoute("/login") &&
                      "text-black border-b-2 border-b-amber-900 rounded-sm"
                    }`}
                    onMouseEnter={() => toggleUserMenu()}
                    onMouseLeave={() => toggleUserMenu()}
                  >
                    User
                    <div className="relative">
                      <div
                        className={`${
                          istoggleUserMenuOpen ? "block" : "hidden"
                        } absolute -left-40 mt-4 py-2 w-36 bg-slate-50 rounded-lg shadow-lg`}
                      >
                        {/* Dropdown Content */}
                        {UserItem.map((item, index) => (
                          <NavLink
                            key={index}
                            to={item.path} // Use NavLink to navigate
                            className="block px-4 py-2 text-gray-700 hover:text-black hover:bg-slate-100"
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex justify-between items-center px-3 max-w-6xl mx-auto">
        <FaBars
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-gray-500 cursor-pointer"
          />
          <img
            src="./logo.png"
            alt="logo"
            className="h-16 cursor-pointer"
            onClick={() => {
              navigate("/");
              // adminOrNot();
            }}
          />
          <div
                className="relative flex items-center justify-center gap-9"
                // onClick={cartShowing}
              >
                <MdShoppingBasket className="md:text-2xl text-4xl text-gray-500 cursor-pointer" />
                {cartItems && cartItems.length > 0 && (
                  <div className="absolute -top-1 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                    <p className="text-white font-semibold text-xs">
                      {cartItems.length}
                    </p>
                  </div>
                )}
              </div>
        </div>

        {isOpen && (
          <div className="md:hidden w-screen bg-black text-white">
            <ul className="text-center">
              { DropmenuItem.map((item) => (
                <li
                  key={item.path}
                  className={`cursor-pointer py-3 text-sm font-semibold border-b ${
                    pathMatchRoute(item.path) && "text-red-500"
                  }`}
                  onClick={() => {
                    navigate(item.path);
                    setIsOpen(false);
                  }}
                >
                  {item.icon} {item.name}
                </li>
              ))}
              <li
                className={`cursor-pointer py-3 text-sm font-semibold border-b ${
                  (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                  "text-red-500"
                }`}
                onClick={() => {
                  // togglePopup("login");
                  setIsOpen(false);
                }}
              >
                {/* {pagestate} */} hfgt
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
