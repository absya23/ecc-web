import React from "react";
import Button from "../../atoms/button/Button";
import RelatePosts from "../../molecules/post/RelatePosts";
import { useLocation } from "react-router-dom";
import { posts } from "../../../config/getAPI";
import Search from "../../atoms/search/Search";
import PostCardsVertical from "../../organisms/postCardsVertical/PostCardsVertical";

const AllPostsPage = () => {
  // use param to get topic
  const data = useLocation();
  const topic = data.state?.topic || "news";
  const allPosts = posts?.[topic] || [];
  return (
    <>
      <div className="px-[100px] pt-[40px]">
        <div className="flex justify-between mb-10">
          <div className="flex gap-x-3">
            <Button className="btn-filter active font-title">Mới nhất</Button>
            <Button className="btn-filter font-title">Đọc nhiều nhất</Button>
          </div>
          <Search></Search>
        </div>
        <section className="flex mb-20 gap-x-20">
          <RelatePosts data={allPosts.slice(0, 6)}></RelatePosts>
          <div className="flex flex-col items-start w-full max-w-[350px]">
            <h5 className="text-note font-semibold pb-1 border-b-[1px] border-b-note mb-7 inline-block">
              Bài viết nổi bật
            </h5>
            <PostCardsVertical data={allPosts.slice(0, 3)}></PostCardsVertical>
          </div>
        </section>
      </div>
    </>
  );
};

export default AllPostsPage;
