import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Player = () => {
  const { curSongId } = useSelector((state) => state.music);
  console.log("🚀 ~ file: Player.js:6 ~ Player ~ music:", curSongId);

  return (
    <div className="bg-color-c1d px-5 h-full flex">
      <div className="w-[30%] flex-auto">Deltail Song</div>
      <div className="w-[40%] flex-auto">Main Player</div>
      <div className="w-[30%] flex-auto">Volum</div>
    </div>
  );
};

export default Player;
