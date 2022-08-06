import React from "react";
import { posts } from "../../../config/getAPI";
import LatestPosts from "../../molecules/post/LatestPosts";
import PostPreview from "../../molecules/post/PostPreview";

const NewsHot = () => {
  const data = posts?.news || [];
  return (
    <section className="mt-[60px] w-full flex gap-x-[50px] mb-20">
      <PostPreview data={data[0]} topic="news"></PostPreview>
      <LatestPosts data={data} topic="news"></LatestPosts>
    </section>
  );
};

export default NewsHot;
