import React from "react";
import { useSelector } from "react-redux";

const Slider = () => {
  const { banner } = useSelector((state) => state.app);
  console.log("🚀 ~ file: Slider.js:6 ~ Slider ~ banner:", banner);
  return (
    <div className="flex flex-col">
      {banner?.map((item) => (
        <img
          key={item.encodeId}
          src={item.banner}
          alt=""
          className="flex-1 object-contain"
        />
      ))}
    </div>
  );
};

export default Slider;
