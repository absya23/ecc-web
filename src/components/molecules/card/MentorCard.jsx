import React from "react";

const MentorCard = () => {
  return (
    <div className="flex flex-col items-start w-3/12 transition-all post-card post-card-shadow min-h-[378px] rounded-lg">
      <img
        src="https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
        className="rounded-[10px] h-[300px] w-full object-cover mb-5"
      />
      <h4 className="w-full mb-2 text-lg text-center break-line-2 title">
        ThS. Nguyễn Thị Minh Hằng
      </h4>
      <p className="w-full mb-5 text-center font-desc">
        Lorem ipsum dolor sit amet
      </p>
    </div>
  );
};

export default MentorCard;
