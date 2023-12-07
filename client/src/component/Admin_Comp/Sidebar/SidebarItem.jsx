import { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { actionType } from "../../../context/reducer";
import { useStateValue } from "../../../context/StateProvider";

export default function SidebarItem({ item, isOpen }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [{}, dispatch] =
  useStateValue();
  const logOutCheck = (id)=>{
    
    if (id === "Logout") {
      dispatch({
        type: actionType.LOG_OUT_USER,
        user: null,
        token: null,
      });
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      // toggleUserMenu();
    }
  }


  if (item.childrens) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title flex link_text text-lg">
          <span className="flex gap-2">
            <div>{item.icon}</div>
            <div className="text text-xs" id={item.name} onClick={()=>{logOutCheck(item.name)}}>{isOpen && item.name}</div>
          </span>
          {/* <i className="bi-chevron-down toggle-btn" ></i> */}
          <IoIosArrowDroprightCircle onClick={() => setOpen(!open)} />
        </div>
        <div className="sidebar-content">
          {isOpen &&
            item.childrens.map((child, index) => (
              <SidebarItem key={index} item={child} isOpen={isOpen} />
            ))}
        </div>
      </div>
    );
  } else {
    return (
      <NavLink
      onClick={()=>{logOutCheck(item.name)}}
      id={item.name}
              to={item.path}
             className={`flex sidebar-item plain cursor-pointer`}>
        <div className="flex gap-2">
          <div>{item.icon}</div>
          <div className="text text-xs">{isOpen && item.name}</div>
        </div>
        </NavLink>
    );
  }
}

// (
//     <NavLink
//       to={item.path}
//       key={index}
//       className="flex sticky items-center p-4 gap-4 text-white transition-all duration-500 hover:bg-lightBlue-100 hover:text-white"
//       activeClassName="active"
//       end={true}
//     >
//       <div className="text-xl">{item.icon}</div>
//       <div
//         style={{ display: isOpen ? "block" : "none" }}
//         className="link_text"
//         onClick={() => item.name === "Logout" && onLogOut(item.name)}
//       >
//         {item.name}
//       </div>
//     </NavLink>
//   )
