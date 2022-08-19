import React from "react";
import { useViewport } from "../../../context/viewportContext";
import NewsHot from "../../organisms/newsHot/NewsHot";
import NewsTopic, { NewsTopic2 } from "../../organisms/newsTopic/NewsTopic";
import NewsTopicRes, {
  NewsTopicRes2,
} from "../../organisms/newsTopic/NewsTopicRes";
import "./NewsPage.scss";

const NewsPage = () => {
  const { width } = useViewport();
  const breakpoint = 1200;
  return (
    <div className="news-page flex flex-col items-center">
      <NewsHot></NewsHot>
      {width < breakpoint ? (
        <>
          <NewsTopicRes topic="events">Sự kiện</NewsTopicRes>
          <NewsTopicRes topic="knowledges">Kiến thức</NewsTopicRes>
          <NewsTopicRes2 topic="study">Học tập</NewsTopicRes2>
        </>
      ) : (
        <>
          <NewsTopic topic="events">Sự kiện</NewsTopic>
          <NewsTopic topic="knowledges">Kiến thức</NewsTopic>
          <NewsTopic2 topic="study">Học tập</NewsTopic2>
        </>
      )}
    </div>
  );
};

export default NewsPage;
