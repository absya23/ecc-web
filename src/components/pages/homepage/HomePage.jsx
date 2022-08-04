import React from "react";

import "./HomePage.scss";

import IntroduceClub from "../../components/organisms/introduceClub/IntroduceClub";
import IntroduceNews from "../../components/organisms/introduceNews/IntroduceNews";
import IntroduceEvents from "../../components/organisms/introduceEvents/IntroduceEvents";
import IntroduceEc from "../../components/organisms/introduceEc/IntroduceEc";
import TextTitle from "../../components/atoms/textTitle/TextTitle";
import cooperImg from "../../assets/cooperation.png";
import IntroduceTeams from "../../components/organisms/introduceTeams/IntroduceTeams";
import Footer from "../../components/organisms/footer/Footer";

const HomePage = () => {
  return (
    <>
      <IntroduceClub></IntroduceClub>
      <IntroduceNews></IntroduceNews>
      <IntroduceEvents></IntroduceEvents>
      <IntroduceEc></IntroduceEc>
      <>
        <section className="cooperation px-[100px]">
          <TextTitle note="Hợp tác">
            Các đối tác ngành thương mại điện tử
          </TextTitle>
        </section>
        <img src={cooperImg} alt="" className="w-full" />
      </>
      <IntroduceTeams></IntroduceTeams>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
