import React from "react";
import "./aboutus_second.scss";

const aboutusSecond = ({number, text, className}) => {
  return (
    <div className={`first bg-[#FAFAFA] flex flex-col ${className}`}>
      <div className="w-full">
        <h1 className="text-color text-xl font-bold w-full text-4xl">{number}</h1>
        <h2 className="text-color mt-3 font-bold text-2xl">{text}</h2>
        <p className="mt-3 text-sm w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero ultricies viverra risus, enim urna felis ut.</p>
      </div>
    </div>
  );
};

export default aboutusSecond;

