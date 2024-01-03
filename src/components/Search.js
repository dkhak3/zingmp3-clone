import React from "react";
import icons from "../ultis/icons";

const { IconSearch } = icons;

const Search = () => {
  return (
    <div className="w-full flex items-center bg-[#DDE4E4] rounded-[20px]">
      <span className="h-10 pl-4 flex items-center justify-center">
        {IconSearch}
      </span>
      <input
        type="text"
        className="w-full outline-none px-4 py-2 bg-[#DDE4E4] rounded-[20px] h-10 text-[#282828] placeholder:text-[#767676]"
        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bàn hát..."
      />
    </div>
  );
};

export default Search;
