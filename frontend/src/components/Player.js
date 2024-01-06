import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as apis from "../apis";
import icons from "../ultis/icons";

const {
  IconLove,
  IconLoveActive,
  IconDot,
  CiRepeat,
  IconPreveMusic,
  IconNextMusic,
  CiShuffle,
  FaPlay,
  FaPause,
} = icons;

const Player = () => {
  const audioEl = new Audio();
  const [songInfo, setSongInfo] = useState(null);
  // const [isPlay, setIsPlay] = useState(false);
  const { curSongId, isPlaying } = useSelector((state) => state.music);

  useEffect(() => {
    const fetchDetailSong = async () => {
      const response = await apis.getDetailSong(curSongId);

      if (response.data.err === 0) {
        setSongInfo(response.data.data);
      }
    };

    fetchDetailSong();
  }, [curSongId]);

  useEffect(() => {
    audioEl.play();
  }, [curSongId]);

  const handleClickPlay = () => {
    // setIsPlay((pre) => !pre);
  };

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
      <div className="w-[40%] py-2 flex-auto flex flex-col items-center gap-2 justify-center">
        <div className="flex gap-8 justify-center items-center">
          <span title="Bật phát ngẫu nhiên">{<CiShuffle size={20} />}</span>
          <span className="cursor-pointer">{IconPreveMusic}</span>
          <span
            onClick={handleClickPlay}
            className="cursor-pointer p-[10px] border border-color-323 hover:border-color-0e8 rounded-full hover:text-color-0e8"
          >
            {!isPlaying ? <FaPlay size={13} /> : <FaPause size={13} />}
          </span>
          <span className="cursor-pointer">{IconNextMusic}</span>
          <span className="cursor-pointer" title="Bật phát lại tất cả">
            {<CiRepeat size={20} />}
          </span>
        </div>
        <div>progress bar</div>
      </div>
      <div className="w-[30%] flex-auto">Volum</div>
    </div>
  );
};

export default Player;
