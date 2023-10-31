import { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function SidebarItem({ item, isOpen }) {
  const [open, setOpen] = useState(false);

  if (item.childrens) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title flex link_text text-lg">
          <span className="flex gap-2">
            <div>{item.icon}</div>
            <div className="text text-xs">{isOpen && item.name}</div>
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
      <a href={item.path || "#"} className={`flex sidebar-item plain`}>
        <div className="flex gap-2">
          <div>{item.icon}</div>
          <div className="text text-xs">{isOpen && item.name}</div>
        </div>
      </a>
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
