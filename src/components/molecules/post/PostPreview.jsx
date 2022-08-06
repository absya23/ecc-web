import React from "react";
import { useNavigate } from "react-router-dom";
import { authors } from "../../../config/getAPI";
import Button from "../../atoms/button/Button";

const PostPreview = ({
  topic,
  data: { img, id, title, author_id, time, overview },
}) => {
  const author = authors.find((item) => item.id === author_id);
  const navigate = useNavigate();
  const newParam = title?.replace(/\s+/g, "-");
  return (
    <div className="flex gap-x-9 w-[888px]">
      <img src={img} alt="" className="w-full max-w-[492px] rounded-md" />
      <div className="flex flex-col items-start font-desc w-full">
        <h4
          className="font-title break-line-2 text-[18px] mb-5 mt-1 cursor-pointer title"
          onClick={() =>
            navigate(`/news/${newParam}`, { state: { id, topic } })
          }
        >
          {title}
        </h4>
        <div className="author flex gap-x-3 text-[13px] mb-3">
          <img
            src={author.profile_pic}
            alt=""
            className="w-[46px] h-[46px] rounded-full"
          />
          <div className="flex-col">
            <h6 className="font-title text-author">{author.name}</h6>
            <p className="text-secondary">{time}</p>
          </div>
        </div>
        <p className="break-line-6 mb-9">{overview}</p>
        <Button
          className="px-7 py-4 btn-primary rounded-lg mb-7"
          onClick={() =>
            navigate(`/news/${newParam}`, { state: { id, topic } })
          }
        >
          Đọc tiếp ...
        </Button>
      </div>
    </div>
  );
};

export default PostPreview;
