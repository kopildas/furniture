// import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import {
  FaBars,
  FaCommentAlt,
  FaRegChartBar,
  FaTh,
  FaThList,
  FaUserAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useStateValue } from "../../../context/StateProvider";
// import SidebarItem from "./SidebarItem";
// import { useStateValue } from "../../context/StateProvider";
// import { actionType } from "../../context/reducer";
import SidebarItem from "../../Admin_Comp/Sidebar/SidebarItem.jsx"
import { useStateValue } from "../../../context/StateProvider";
export default function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/admin/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/admin/users",
      name: "Users",
      icon: <FaUserAlt />,
    },
    {
      path: "/admin/products",
      name: "Products",
      icon: <FaThList />,
      childrens: [
        {
          path: "/admin/products",
          name: "products",
          icon: <FaThList />,
        },
        {
          path: "/admin/products/addproducts",
          name: "Add Products",
          icon: <FaThList />,
        },
        
      ],
    },
    {
      path: "/admin/orders",
      name: "Orders",
      icon: <FaRegChartBar />,
    },
    {
      path: "/admin/review",
      name: "Review",
      icon: <FaCommentAlt />,
    },
    {
      path: "/",
      name: "Logout",
      icon: <BiLogOut />,
    },
  ];

  //   const auth = getAuth();
  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();

  const navigate = useNavigate();

  function onLogOut() {
    localStorage.removeItem("user");
    // console.log(auth.currentUser);

    // auth
    //   .signOut()
    //   .then(() => {
    //     dispatch({
    //       type: actionType.DEL_USER,
    //     });
    //     console.log(auth.currentUser);
    //     console.log("sign out");
    //     navigate("/"); // Navigate to "/" after successful sign out
    //   })
    //   .catch((error) => {
    //     console.error("Error signing out:", error);
    //   });
  }

  return (
    <div className="flex sticky z-40">
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`${
          isOpen ? "w-44" : "w-12"
        } bg-black scroll-none text-white transition-all duration-500 flex-shrink-0`}
      >
        <div className="top_section">
          {/* <h1
            style={{ display: isOpen ? "block" : "none" }}
            className="logoo text-xl"
          >
            Logo
          </h1> */}
          <div className="bars md:hidden">
            <FaBars onClick={toggle} className="text-3xl flex right-2" />
          </div>
        </div>
        <div
          className="menu-items-container"
          style={{ position: "sticky", top: 10 }}
        >
          {menuItem.map((item, index) => (
            <SidebarItem key={index} item={item} isOpen={isOpen} />
          ))}
        </div>
      </div>
    </div>
  );
}
