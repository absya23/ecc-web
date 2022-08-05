import React, { useEffect, useRef, useState } from "react";
import { posts } from "../../../config/getAPI";
import PostCard from "../../molecules/post/PostCard";
import Pagination from "../../pagination/Pagination";
import { CSSTransition } from "react-transition-group";
import "./NewsTopic.scss";

const NewsTopic = ({ children, topic }) => {
  const [visible, setVisible] = useState(false);
  const data = posts?.[topic] || [];
  const [postList, setPostList] = useState(data.slice(0, 4));
  const [pagination, setPagination] = useState({
    page: 1,
    row: 4,
    totalPosts: data.length,
  });
  const handlePageChange = (newPage) => {
    setVisible(false);
    const newPagination = { ...pagination, page: newPage };
    setPagination(newPagination);
  };

  const handleUpdatePostList = useRef({});
  handleUpdatePostList.current = () => {
    const newPostList = data.slice(
      (pagination.page - 1) * pagination.row,
      pagination.page * pagination.row
    );
    setPostList(newPostList);
  };

  useEffect(() => {
    setVisible(true);
    handleUpdatePostList.current();
    return () => {};
  }, [pagination.page]);

  return (
    <section className="post-list mb-40 relative transition-all">
      <h4 className="topic font-title mb-10">{children}</h4>
      <CSSTransition
        in={visible}
        timeout={300}
        classNames="postList"
        unmountOnExit
      >
        <div className="grid grid-cols-4 gap-x-9">
          {postList.length > 0 &&
            postList.map((item) => (
              <PostCard key={item.id} data={item} authorName={true}></PostCard>
            ))}
        </div>
      </CSSTransition>
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      ></Pagination>
    </section>
  );
};

export const NewsTopic2 = ({ children, topic }) => {
  const [visible, setVisible] = useState(false);
  const data = posts?.[topic] || [];
  const [postList, setPostList] = useState(data.slice(0, 4));
  const [pagination, setPagination] = useState({
    page: 1,
    row: 3,
    totalPosts: data.length - 1,
  });
  const handlePageChange = (newPage) => {
    setVisible(false);
    const newPagination = { ...pagination, page: newPage };
    setPagination(newPagination);
  };

  const handleUpdatePostList = useRef({});
  handleUpdatePostList.current = () => {
    const newPostList = data.slice(
      (pagination.page - 1) * pagination.row + 1,
      pagination.page * pagination.row + 1
    );
    setPostList(newPostList);
  };

  useEffect(() => {
    setVisible(true);
    handleUpdatePostList.current();
  }, [pagination.page]);

  return (
    <section className="mb-40 relative">
      <h4 className="topic font-title mb-10">{children}</h4>
      <div className="w-full content grid gap-x-9">
        <PostCard data={data[0]} authorName={true}></PostCard>
        <div className="flex flex-col relative">
          <CSSTransition
            in={visible}
            timeout={300}
            classNames="postList"
            unmountOnExit
          >
            <div className="grid grid-cols-3 gap-x-9">
              {postList.length > 0 &&
                postList.map((item) => (
                  <PostCard
                    key={item.id}
                    data={item}
                    authorName={true}
                  ></PostCard>
                ))}
            </div>
          </CSSTransition>
          <Pagination
            pagination={pagination}
            onPageChange={handlePageChange}
          ></Pagination>
        </div>
      </div>
    </section>
  );
};

export default NewsTopic;
