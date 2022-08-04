import React from "react";
import { authors } from "../../../config/getAPI";

const LatestPost = ({ data: { img, title, author_id, time } }) => {
  const author = authors.find((item) => item.id === author_id);
  return (
    <div className="flex gap-x-3 cursor-pointer">
      <img src={img} alt="" className="w-[65px] h-[65px] rounded-lg" />
      <div className="flex flex-col justify-between flex-1">
        <h6 className="title text-sm font-semibold break-line-2">{title}</h6>
        <div className="flex items-center gap-x-2 text-[13px]">
          <p className="font-bold text-author">{author.name}</p>
          <span className="p-[2px] rounded-full bg-note"></span>
          <p className="text-secondary">{time}</p>
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
