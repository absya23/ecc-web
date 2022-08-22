import React from "react";
import { useLocation } from "react-router-dom";
import SinglePost from "../../../molecules/post/SinglePost";
import Posts from "../../../organisms/posts/Posts";
import RelatePosts from "../../../molecules/post/RelatePosts";
import { useSelector } from "react-redux";
import {
  handleGetPostByAuthor,
  handleGetPostById,
  handleGetPostRelate,
} from "../../../../handlers/handleGetPost";
import "./SinglePostPage.scss";

const SinglePostPage = () => {
  const data = useLocation();
  const postId = data.state?.id;
  const allPosts = useSelector((state) => state.post.data);
  const post = handleGetPostById(allPosts, postId);
  const type = post?.type || "news";
  const postsRelate = handleGetPostRelate(allPosts, type, postId);
  // handle to find posts which be read most time => relatePosts > data & topic
  // handle to find posts which is same author => relatePosts > data & topic
  const postsSameAuthor = handleGetPostByAuthor(allPosts, post.author_id);
  return (
    <div className="single-post-page">
      <section className="single-post-page_content mx-auto flex gap-x-[70px] items-start pt-[60px] px-5 mb-20">
        {post && <SinglePost topic={type} data={post}></SinglePost>}
        <div className="flex flex-col items-start gap-y-[100px] max-w-[434px]">
          <div>
            <RelatePosts descPosts={true} data={postsRelate.slice(2, 5)}>
              Đọc nhiều nhất
            </RelatePosts>
          </div>
          <div>
            <RelatePosts descPosts={true} data={postsSameAuthor.slice(0, 4)}>
              Các bài viết cùng tác giả
            </RelatePosts>
          </div>
        </div>
      </section>
      <section className="bg-[#fafafa] !max-w-full">
        <Posts
          posts={postsRelate}
          topic="topic"
          className="mx-auto px-5 post-propose pt-[30px] pb-[60px]"
        >
          <h4 className="mb-8 topic-posts font-title">Được đề xuất</h4>
        </Posts>
      </section>
    </div>
  );
};

export default SinglePostPage;
