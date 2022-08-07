import React from "react";
import { useLocation } from "react-router-dom";
import SinglePost from "../../../molecules/post/SinglePost";
import { posts } from "../../../../config/getAPI";
import Posts from "../../../organisms/posts/Posts";
import RelatePosts from "../../../molecules/post/RelatePosts";

const SinglePostPage = () => {
  const data = useLocation();
  // console.log(data);
  console.log(data.state);
  const topic = data.state?.topic || "news";
  const postId = data.state?.id;
  const post = posts?.[topic].find((item) => item.id === postId) || null;
  const postsRelate = posts?.[topic] || [];
  // handle to find posts which be read most time => relatePosts > data & topic
  // handle to find posts which is same author => relatePosts > data & topic

  return (
    <>
      <section className="px-[100px] flex gap-x-[70px] items-start single-post-page-content pt-[60px]">
        {post && <SinglePost topic={topic} data={post}></SinglePost>}
        <div className="grid grid-rows-2 gap-y-20">
          <div>
            <RelatePosts descPosts={true} data={postsRelate.slice(2, 5)}>
              Đọc nhiều nhất
            </RelatePosts>
          </div>
          <div>
            <RelatePosts descPosts={true} data={postsRelate.slice(1, 3)}>
              Các bài viết cùng tác giả
            </RelatePosts>
          </div>
        </div>
      </section>
      <Posts
        posts={postsRelate}
        topic="topic"
        className="px-[100px] pt-[30px] pb-[60px] bg-[#fafafa]"
      >
        <h4 className="topic-posts font-title mb-8">Được đề xuất</h4>
      </Posts>
    </>
  );
};

export default SinglePostPage;
