import React from "react";
import AboutusItro from "../../organisms/aboutus_first/aboutus_first";
import AboutusSecond from "../../organisms/aboutus_second/aboutus_second";
import AboutusThird from "../../organisms/aboutus_third/aboutus_third";
import AboutusFour from "../../organisms/aboutus_four/aboutus_four";
import AboutusLast from "../../organisms/aboutus_last/aboutus_last";
import AboutusFif from "../../organisms/aboutus_fif/aboutus_fif";
import "./AboutPage.scss"

const AboutPage = () => {
  return (
    <section className="pb-20 pt-[60px] flex flex-col items-center justify-around mx-auto px-5">
      <div className="w-full">
        <AboutusItro />
      </div>
      <div className="about_intro flex flex-row w-full">
        <div className="about_intro_1 flex flex-row w-4/6 mr-20">
          <div className="flex flex-col mr-10">
            <AboutusSecond
              number="1"
              text="Who We Are"
              className="mt-10"
            ></AboutusSecond>
            <AboutusSecond
              number="3"
              text="How Do We Help"
              className="mt-10"
            ></AboutusSecond>
          </div>
          <div className="flex flex-col ">
            <AboutusSecond
              number="2"
              text="Who Do We Do"
              className="mt-10"
            ></AboutusSecond>
            <AboutusSecond
              number="4"
              text="Create Success Story"
              className="mt-10"
            ></AboutusSecond>
          </div>
        </div>
        <div className="about_intro_2 w-2/6 h-full">
          <AboutusThird></AboutusThird>
        </div>
      </div>
      <AboutusFour></AboutusFour>
      <div className="mt-10 slider flex justify-center items-center">
        <AboutusFif/>
      </div>
      <AboutusLast></AboutusLast>
    </section>
  );
};

export default AboutPage;
