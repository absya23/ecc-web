import React from "react";
import MentorCard from "../../molecules/card/MentorCard";
import "./aboutus_last.scss";

const aboutusLast = ({}) => {
  return (
    <div className="">
      <div className="flex flex-col justify-center w-full mt-20 first">
        <h2 className="flex justify-center text-2xl font-bold text-color">
          BAN CỐ VẤN
        </h2>
        <p className="flex justify-center mt-2 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero
          ultricies viverra risus, enim urna felis ut. Ligula ultrices interdum
          urna fermentum at urna, commodo.
        </p>
      </div>
      <div className="flex flex-row justify-around mt-10">
        <MentorCard></MentorCard>
        <MentorCard></MentorCard>
        <MentorCard></MentorCard>
      </div>
    </div>
  );
};

export default aboutusLast;
