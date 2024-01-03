import React from "react";
import logo from "../assets/logo.svg";
import { sidebarMenu } from "../ultis/menu";
import { NavLink } from "react-router-dom";

const notActiveStyle =
  "py-[12px] px-[21px] text-[#32323D] text-[14px] font-medium flex items-center gap-[12px]";
const activeStyle =
  "py-[12px] px-[21px] text-[#0f7070] text-[14px] font-medium flex items-center gap-[12px]";

const SidebarLeft = () => {
  return (
    <div className="flex flex-col bg-[#DDE4E4]">
      <div className="w-full h-[70px] py-[15px] px-[25px] flex items-center justify-start">
        <img src={logo} alt="logo" className="w-[120px] h-10" />
      </div>
      <div className="flex flex-col">
        {sidebarMenu.map((item) => (
          <NavLink
            to={item.path}
            key={item.path}
            end={item.end}
            className={({ isActive }) =>
              isActive ? activeStyle : notActiveStyle
            }
          >
            {item.icon}
            <span>{item.text}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SidebarLeft;
