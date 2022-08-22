import React from "react";
import "./aboutus_second.scss";

const aboutusSecond = ({ number, text, className }) => {
  return (
    <div className={`first flex flex-col ${className}`}>
      <div className="w-full">
        <h1 className="w-full text-4xl font-bold text-color">{number}</h1>
        <h2 className="mt-3 text-2xl font-bold text-color">{text}</h2>
        <p className="w-full mt-3 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero
          ultricies viverra risus, enim urna felis ut.
        </p>
      </div>
    </div>
  );
};

export default aboutusSecond;
