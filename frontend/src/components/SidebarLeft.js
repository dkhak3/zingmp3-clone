import React from "react";
import logo from "../assets/logo.svg";
import { sidebarMenu } from "../ultis/menu";
import { NavLink } from "react-router-dom";

const notActiveStyle =
  "py-[12px] px-[24px] text-color-323 text-[14px] font-medium flex items-center gap-[12px]";
const activeStyle =
  "py-[12px] px-[21px] text-color-0e8 border-l-[3px] border-solid border-color-0e8 bg-color-e7e text-[14px] font-medium flex items-center gap-[12px]";

const SidebarLeft = () => {
  return (
    <div className="flex h-full flex-col bg-color-dde">
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
