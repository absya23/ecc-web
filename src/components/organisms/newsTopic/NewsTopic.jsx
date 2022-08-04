import React from "react";
import { posts } from "../../../config/getAPI";
import PostCard from "../../molecules/post/PostCard";
import "./NewsTopic.scss";

const NewsTopic = ({ children, topic }) => {
  const data = posts?.[topic] || [];
  return (
    <section className="mb-20">
      <h4 className="topic font-title mb-10">{children}</h4>
      <div className="grid grid-cols-4 gap-x-9">
        {data.length > 0 &&
          data
            .slice(0, 4)
            .map((item) => (
              <PostCard key={item.id} data={item} authorName={true}></PostCard>
            ))}
      </div>
    </section>
  );
};

export const NewsTopic2 = ({ children, topic }) => {
  const data = posts?.[topic] || [];
  return (
    <section className="mb-20">
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
