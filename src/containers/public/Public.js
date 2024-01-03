import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarLeft, SidebarRight } from "../../components";

const Public = () => {
  return (
    <div className="w-full flex overflow-y-auto">
      <div className="w-[240px] flex-none border border-red-200">
        <SidebarLeft />
      </div>
      <div className="flex-auto border border-red-200">
        <Outlet />
      </div>
      <div className="w-[329px] flex-none border border-red-200">
        <SidebarRight />
      </div>
    </div>
  );
};

export default Public;
