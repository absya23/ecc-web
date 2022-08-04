import { Route, Routes } from "react-router-dom";
import React, { lazy } from "react";
const HomePage = lazy(() => import("../components/pages/homepage/HomePage"));
const AboutPage = lazy(() => import("../components/pages/aboutpage/AboutPage"));
const NewsPage = lazy(() => import("../components/pages/newspage/NewsPage"));
const AllPostsPage = lazy(() =>
  import("../components/pages/newspage/AllPostsPage")
);
const SinglePost = lazy(() =>
  import("../components/pages/newspage/singlePost/SinglePost")
);

const RouteConfig = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/aboutus" element={<AboutPage />}></Route>
        <Route path="/news" element={<NewsPage />}></Route>
        <Route path="/news/allposts" element={<AllPostsPage />}></Route>
        <Route path="/news/:postTitle" element={<SinglePost />}></Route>
      </Routes>
    </>
  );
};

export default RouteConfig;
