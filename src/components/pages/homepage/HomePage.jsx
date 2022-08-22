import React from "react";

import "./HomePage.scss";

import IntroduceClub from "../../organisms/introduceClub/IntroduceClub";
import IntroduceNews from "../../organisms/introduceNews/IntroduceNews";
import IntroduceEvents from "../../organisms/introduceEvents/IntroduceEvents";
import IntroduceEc from "../../organisms/introduceEc/IntroduceEc";
import TextTitle from "../../atoms/textTitle/TextTitle";
import IntroduceTeams from "../../organisms/introduceTeams/IntroduceTeams";
import cooperImg from "../../../assets/cooperation.png";
import { useViewport } from "../../../context/viewportContext";
import IntroduceClubRes from "../../organisms/introduceClub/IntroduceClubRes";
import IntroduceNewsRes from "../../organisms/introduceNews/IntroduceNewsRes";

const HomePage = () => {
  const { width } = useViewport();
  const breakpoint = 1200;
  return (
    <>
      {width < breakpoint ? (
        <>
          <IntroduceClubRes></IntroduceClubRes>
          <IntroduceNewsRes></IntroduceNewsRes>
        </>
      ) : (
        <>
          <IntroduceClub></IntroduceClub>
          <IntroduceNews></IntroduceNews>
        </>
      )}
      <IntroduceEvents></IntroduceEvents>
      <IntroduceEc></IntroduceEc>
      <>
        <section className="px-5 mx-auto cooperation">
          <TextTitle note="Hợp tác">
            Các đối tác ngành thương mại điện tử
          </TextTitle>
        </section>
        <img src={cooperImg} alt="" className="w-full" />
      </>
      <IntroduceTeams></IntroduceTeams>
    </>
  );
};

export default HomePage;
