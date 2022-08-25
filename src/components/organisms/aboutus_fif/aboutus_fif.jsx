import "./aboutus_fif.scss";
import React, { useState } from "react";
import Slider from "../../molecules/aboutus/aboutus_slider";

const AboutusFif = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "Ban chủ nhiệm",
      title: "Title 1",
      content: [
        {
          src: "https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          caption: "Chủ nhiệm",
        },
      ],
    },
    {
      id: 2,
      tabTitle: "IT",
      title: "Title 2",
      content: [
        {
          src: "https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          caption: "Nguyễn Châu Thạch",
        },
        {
          src: "https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          caption: "Phạm Phú Tuấn",
        },
      ],
    },
    {
      id: 3,
      tabTitle: "Business",
      title: "Title 3",
      content: [
        {
          src: "https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          caption: "Businesser 1",
        },
        {
          src: "https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          caption: "Businesser 2",
        },
        {
          src: "https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          caption: "Businesser 3",
        },
      ],
    },
    {
      id: 4,
      tabTitle: "Media",
      title: "Title 4",
      content: [
        {
          src: "https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          caption: "Media-er 1",
        },
        {
          src: "https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          caption: "Media-er 2",
        },
        {
          src: "https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          caption: "Media-er 3",
        },
        {
          src: "https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          caption: "Media-er 4",
        },
      ],
    },
  ];
  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };
  return (
    <div className="mt-5 w-full flex aboutus justify-center items-center">
      <div className="container w-full h-full flex flex-col">
        <div className="tabs mt-3 ml-3 mr-3 flex flex-auto flex-row">
          {tabs.map((tab, i) => (
            <button
              className="mr-5"
              key={i}
              id={tab.id}
              disabled={currentTab === `${tab.id}`}
              onClick={handleTabClick}
            >
              {tab.tabTitle}
            </button>
          ))}
        </div>
        <div className="content flex flex-wrap w-full h-full mt-5 relative">
          {tabs.map((tab, i) => (
            <div key={i} className="w-full h-full absolute">
              {currentTab === `${tab.id}` && (
                <div className="w-full h-full">
                  <Slider
                    input={tab.content}
                    ratio={`3:2`}
                    mode={`automatic`}
                    timeout={`3000`}
                    display={currentTab === `${tab.id}` ? '' : 'hidden'}
                    className="w-full h-full"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutusFif;
