import React, { useEffect, useState } from "react";
import { posts } from "../../../config/getAPI";
import PostCard from "../../molecules/post/PostCard";
import Pagination from "../../pagination/Pagination";
import "./NewsTopic.scss";

const NewsTopic = ({ children, topic }) => {
  const data = posts?.[topic] || [];
  const [postList, setPostList] = useState(data.slice(0, 4));
  const [pagination, setPagination] = useState({
    page: 1,
    row: 4,
    totalPosts: data.length,
  });
  const handlePageChange = (newPage) => {
    const newPagination = { ...pagination, page: newPage };
    setPagination(newPagination);
  };

  useEffect(() => {
    const newPostList = data.slice(
      (pagination.page - 1) * pagination.row,
      pagination.page * pagination.row
    );
    setPostList(newPostList);
  }, [pagination.page, pagination.row]);
  return (
    <section className="post-list mb-20 relative transition-all">
      <h4 className="topic font-title mb-10">{children}</h4>
      <div className="grid grid-cols-4 gap-x-9">
        {postList.length > 0 &&
          postList.map((item) => (
            <PostCard key={item.id} data={item} authorName={true}></PostCard>
          ))}
      </div>
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      ></Pagination>
    </section>
  );
};

export const NewsTopic2 = ({ children, topic }) => {
  const data = posts?.[topic] || [];
  return (
    <section className="mb-20 relative">
      <h4 className="topic font-title mb-10">{children}</h4>
      <div className="w-full content grid gap-x-9">
        <PostCard data={data[0]} authorName={true}></PostCard>
        <div className="grid grid-cols-3 gap-x-9">
          {data.length > 0 &&
            data
              .slice(1, 4)
              .map((item) => (
                <PostCard
                  key={item.id}
                  data={item}
                  authorName={true}
                ></PostCard>
              ))}
        </div>
      </div>
    </section>
  );
};

export default NewsTopic;
