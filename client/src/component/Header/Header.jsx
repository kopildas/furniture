import React, { useEffect, useState } from "react";
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
import { GiShoppingCart } from "react-icons/gi";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineMail, AiFillYoutube, AiFillFacebook } from "react-icons/ai";
import { BsTelephone, BsTwitter, BsInstagram } from "react-icons/bs";
import { MdShoppingBasket } from "react-icons/md";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";

export default function Header() {
  const [{ product, cartShow, user, cartItems, favorite_Items }, dispatch] =
    useStateValue();
  console.log(user);
  const favorite_Items_Length = favorite_Items.filter(
    (f) => f.favorite === true
  );
  console.log(favorite_Items_Length);
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
      path: "/shop",
      name: "Chair",
      icon: <FaTh />,
    },
    {
      path: "/shop",
      name: "Sofa",
      icon: <FaTh />,
    },
    {
      path: "/shop",
      name: "Table",
      icon: <FaUserAlt />,
    },
    {
      path: "/shop",
      name: "Bed",
      icon: <FaUserAlt />,
    },
    {
      path: "/shop",
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

  const shop_route = (e) => {
    console.log(e.target.id);
    dispatch({
      type: actionType.SET_SHOP_CATEGORY,
      shop_category: e.target.id,
    });
  };

  const userClick = (e) => {
    console.log("kire vai");
    console.log(e.target.id);
    if (e.target.id === "Log Out") {
      dispatch({
        type: actionType.LOG_OUT_USER,
        user: null,
        token: null,
      });
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
  };
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  function cartShowing() {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
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
              <AiFillFacebook />
              <BsTwitter />
              <AiFillYoutube />
            </div>
          </div>

          <div className="w-full border-b mt-2 mb-3"></div>

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
                          id={item.name}
                          onClick={shop_route}
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

              <ul className="flex items-center justify-items-end -px-3">
                <>
                  <li
                    className="cursor-pointer w-16 h-9 text-3xl flex items-center justify-center text-gray-600 hover:text-gray-500 "
                    onClick={cartShowing}
                  >
                    <GiShoppingCart />
                    {cartItems && cartItems.length > 0 && (
                      <div className="absolute top-16 right-[265px] w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                        <p className="text-white font-semibold text-xs">
                          {cartItems.length}
                        </p>
                      </div>
                    )}
                  </li>
                </>
                <>
                  <li className="cursor-pointer w-16 h-9 text-3xl flex items-center justify-center text-gray-600 hover:text-gray-500 ">
                    <MdFavoriteBorder />
                    {favorite_Items_Length &&
                      favorite_Items_Length.length > 0 && (
                        <div className="absolute top-16 right-[205px] w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                          <p className="text-white font-semibold text-xs">
                            {favorite_Items_Length.length}
                          </p>
                        </div>
                      )}
                  </li>
                </>
                {!user ? (
                  <ul className="flex">
                    <li
                      className={`cursor-pointer py-3 w-16 h-9 text-xl flex items-center justify-center text-gray-600 hover:text-gray-500  ${
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
                      className={`cursor-pointer py-3 w-16 h-9 text-xl flex items-center justify-center text-gray-600 hover:text-gray-500  ${
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
                      className={`cursor-pointer py-3 w-16 h-9 text-xl flex items-center justify-center text-gray-600 hover:text-gray-500  ${
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
                              id={item.name}
                              onClick={userClick}
                              className="block px-4 py-2 text-gray-700 hover:text-black hover:bg-slate-100 text-xl"
                            >
                              {item.name}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </li>
                  </ul>
                )}
              </ul>
            </div>
          </div>
        </div>




        {/* Mobile */}
        <div className="md:hidden flex justify-between items-center max-w-6xl mx-auto">
          <FaBars
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-gray-500 cursor-pointer"
          />
          <img
            src={logo}
            alt="logo"
            className="h-8 w- cursor-pointer"
            onClick={() => {
              navigate("/");
              // adminOrNot();
            }}
          />
          <div
            className="relative flex items-center justify-center gap-9"
            onClick={cartShowing}
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
          <div className="md:hidden w-screen web text-white">
            <ul className="web  item-start">
                <li
                  className={`cursor-pointer py-3 w- h-14 text-xl flex items-start justify-start pl-4 text-gray-600  hover:text-gray-900 hover:bg-slate-100  ${
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
                  className={`cursor-pointer py-3 w h-14 text-xl flex items-start justify-start pl-4 text-gray-600 hover:text-gray-900 hover:bg-slate-100  ${
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
                  className={`cursor-pointer py-3 w h-14 text-xl flex items-start justify-start pl-4 text-gray-600 hover:text-gray-900 hover:bg-slate-100  ${
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
                      } absolute -left-10 top-1 mt-4 py-2 w-96 bg-slate-900 rounded-lg shadow-lg`}
                    >
                      {/* Dropdown Content */}
                      {DropmenuItem.map((item, index) => (
                        <NavLink
                          key={index}
                          to={item.path} // Use NavLink to navigate
                          id={item.name}
                          onClick={shop_route}
                          className="block px-4 py-2 text-gray-400 hover:text-black hover:bg-slate-100"
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </li>
                <li
                  className={`cursor-pointer py-3 w h-14 text-xl flex items-start justify-start pl-4 text-gray-600 hover:text-gray-900 hover:bg-slate-100  ${
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
            

            {!user ? (
                  <ul className="flex">
                    <li
                      className={`cursor-pointer py-3 w-16 h-9 text-xl flex items-center justify-center text-gray-600 hover:text-gray-500  ${
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
                      className={`cursor-pointer py-3 w-16 h-9 text-xl flex items-center justify-center text-gray-600 hover:text-gray-500  ${
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
                  <ul className="flex -mt-7">
                    <li
                      className={`cursor-pointer py-3 pl-4 w-full text-xl flex text-gray-600 hover:text-gray-900 hover:bg-slate-100 ${
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
                          } absolute  -left-2  mt-6 py-2 w-96 bg-slate-900 rounded-lg shadow-lg`}
                        >
                          {/* Dropdown Content */}
                          {UserItem.map((item, index) => (
                            <NavLink
                              key={index}
                              to={item.path} // Use NavLink to navigate
                              id={item.name}
                              onClick={userClick}
                              className="block px-4 py-2 text-gray-300 hover:text-black hover:bg-slate-100 text-xl"
                            >
                              {item.name}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </li>
                  </ul>
                )}
            
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
