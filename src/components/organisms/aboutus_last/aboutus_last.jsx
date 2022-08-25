import React from "react";
import MentorCard from "../../molecules/card/MentorCard";
import "./aboutus_last.scss";

const aboutusLast = ({}) => {
  return (
    <div className="flex flex-col items-center mt-24">
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
      <div className="max-w-[1200px] px-5 grid grid-cols-1 gap-10 mt-10 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
        <MentorCard></MentorCard>
        <MentorCard></MentorCard>
        <MentorCard></MentorCard>
        <MentorCard></MentorCard>
        <MentorCard></MentorCard>
        <MentorCard></MentorCard>
        <MentorCard></MentorCard>
      </div>
    </div>
  );
};

export default aboutusLast;
