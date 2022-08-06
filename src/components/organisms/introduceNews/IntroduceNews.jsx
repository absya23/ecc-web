import React from "react";
import PostCard, { PostCardRelate } from "../../molecules/post/PostCard";
import Button from "../../atoms/button/Button";
import { posts } from "../../../config/getAPI";
import TextTitle from "../../atoms/textTitle/TextTitle";

const IntroduceNews = () => {
  const news = posts?.news || [];
  return (
    <section className="relative w-full intro-news px-[100px] mb-20">
      <TextTitle note="Bản tin">Tin tức nổi bật</TextTitle>
      <div className="grid grid-cols-3 gap-x-6">
        {news.length > 0 &&
          news
            .slice(0, 2)
            .map((item) => (
              <PostCard
                key={item.id}
                data={item}
                authorName={false}
                topic="news"
              ></PostCard>
            ))}
        <div className="grid grid-rows-3">
          {news.length > 0 &&
            news
              .slice(2, 5)
              .map((item) => (
                <PostCardRelate
                  key={item.id}
                  data={item}
                  topic="news"
                ></PostCardRelate>
              ))}
        </div>
        <Button className="btn-load px-5 py-4 absolute top-[10px] right-[100px]">
          <div className="flex items-center justify-center gap-x-2">
            <p className="">Xem thêm</p>
            <svg
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.666626 4.65674C0.666626 4.52415 0.706756 4.39699 0.778189 4.30323C0.849621 4.20948 0.946504 4.15681 1.04752 4.15681L10.0314 4.15681L7.63403 1.01125C7.56251 0.917377 7.52233 0.790056 7.52233 0.657299C7.52233 0.524542 7.56251 0.397223 7.63403 0.303349C7.70555 0.209476 7.80256 0.156738 7.90371 0.156738C8.00485 0.156738 8.10186 0.209476 8.17338 0.303349L11.2206 4.30279C11.256 4.34923 11.2842 4.4044 11.3034 4.46513C11.3226 4.52587 11.3325 4.59098 11.3325 4.65674C11.3325 4.7225 11.3226 4.78761 11.3034 4.84834C11.2842 4.90908 11.256 4.96425 11.2206 5.01069L8.17338 9.01013C8.10186 9.104 8.00485 9.15674 7.90371 9.15674C7.80256 9.15674 7.70555 9.104 7.63403 9.01013C7.56251 8.91625 7.52233 8.78893 7.52233 8.65618C7.52233 8.52342 7.56251 8.3961 7.63403 8.30223L10.0314 5.15667L1.04752 5.15667C0.946504 5.15667 0.849621 5.104 0.778189 5.01024C0.706756 4.91649 0.666626 4.78933 0.666626 4.65674Z"
                fill="#FF6915"
              />
            </svg>
          </div>
        </Button>
      </div>
    </section>
  );
};

export default IntroduceNews;
