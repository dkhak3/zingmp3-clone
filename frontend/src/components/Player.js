import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as apis from "../apis";
import icons from "../ultis/icons";

const { IconLove, IconLoveActive, IconDot } = icons;

const Player = () => {
  const [songInfo, setSongInfo] = useState(null);
  const { curSongId } = useSelector((state) => state.music);

  useEffect(() => {
    const fetchDetailSong = async () => {
      const response = await apis.getDetailSong(curSongId);

      if (response.data.err === 0) {
        setSongInfo(response.data.data);
      }
    };

    fetchDetailSong();
  }, [curSongId]);

  return (
    <div className="bg-color-c1d px-5 h-full flex">
      <div className="w-[30%] flex-auto flex items-center gap-[10px]">
        <img
          src={
            songInfo?.thumbnail ||
            "https://avatars.githubusercontent.com/u/94631848?v=4"
          }
          alt="thumbnail"
          className="size-16 object-cover rounded-md"
        />
        <div className="flex flex-col">
          <span className="font-medium text-sm text-color-323">
            {songInfo?.title || "Bài hát của tôi"}
          </span>
          <span className="text-color-696 text-xs">
            {songInfo?.artistsNames || "Nguyễn Hữu Duy Kha"}
          </span>
        </div>
        <div className="p-[5px] cursor-pointer flex gap-4">
          <span>{IconLove}</span>
          <span>{IconLoveActive}</span>
          <span>{IconDot}</span>
        </div>
      </div>
      <div className="w-[40%] flex-auto">Main Player</div>
      <div className="w-[30%] flex-auto">Volum</div>
    </div>
  );
};

export default Player;
