import React from "react";
import icons from "../ultis/icons";
import { Search } from "./";

const { IconBtnBack, IconBtnNext } = icons;

const Header = () => {
  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex gap-6 items-center w-full">
        <div className="flex cursor-pointer gap-6 text-color-9ea">
          <span>{IconBtnBack}</span>
          <span>{IconBtnNext}</span>
        </div>
        <div className="w-1/2">
          <Search />
        </div>
      </div>
      <div>login</div>
    </div>
  );
};

export default Header;
