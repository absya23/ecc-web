import { Route, Routes } from "react-router-dom";
import React, { lazy } from "react";
const HomePage = lazy(() => import("../pages/homepage/HomePage"));
const AboutPage = lazy(() => import("../pages/aboutpage/AboutPage"));
const NewsPage = lazy(() => import("../pages/newspage/NewsPage"));
const AllPostsPage = lazy(() => import("../pages/newspage/AllPostsPage"));
const PostPage = lazy(() => import("../pages/newspage/postpage/PostPage"));

const RouteConfig = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/aboutus" element={<AboutPage />}></Route>
        <Route path="/news" element={<NewsPage />}></Route>
        <Route path="/news/allposts" element={<AllPostsPage />}></Route>
        <Route path="/news/:postTitle" element={<PostPage />}></Route>
      </Routes>
    </>
  );
};

export default RouteConfig;
