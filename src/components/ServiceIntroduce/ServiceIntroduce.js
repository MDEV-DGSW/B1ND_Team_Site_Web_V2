import React, { Fragment } from "react";
import "./ServiceIntroduce.scss";
import { useInView } from "react-intersection-observer";
import { AiOutlineHome } from "react-icons/ai";
import { ScrollSection, ScrollContainer } from "react-onepage-scroll";
import { withRouter } from "react-router-dom";

import IntroPage from "./IntroPage/IntroPage";
import DodamFunctionPage from "./DodamFunctionPage/DodamFunctionPage";

import DodamLight from "./DodamLight/DodamLight";
import DodamDark from "./DodamDark/DodamDark";

import TeacherIntro from "./TeacherService/TeacherIntro/TeacherIntro";
import TeacherTablet from "./TeacherService/TeacherTablet/TeacherTablet";
import TeacherUnder from "./TeacherService/TeacherUnder/TeacherUnder";

import AllMockUp from "./AllMockUp/AllMockUp";

import MineService from "./MineService/MineService";
import MineServiceSub from "./MineService/MineServiceSub/MineServiceSub";
import MineMockUp from "./MineService/MineMockUp/MineMockUp";

import TeamPicture from "./TeamPicture/TeamPicture";
import FirstMovie from "./FirstMoviePage/FirstMoviePage";
import FirstDodamIntro from "./FirstDodamIntro/FirstDodamIntro";
import DodamDetailFunction from "./DodamDetailFunction/DodamDetailFunction";
import MoramMain from "./MoramMain/MoramMain";

const ServiceIntroduce = ({ history }) => {
  const [ref, inView, entry] = useInView({
    threshold: 0.079,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });

  const handleGoMain = () => {
    history.push("/");
  };

  let PAGECOUNT = 0;

  return (
    <div className="ServiceIntroduce">
      <button className="ServiceIntroduce-button" onClick={handleGoMain}>
        <AiOutlineHome />
      </button>
      <ScrollContainer>
        {/* <ScrollSection pageId={PAGECOUNT++}>
          <FirstMovie />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          <IntroPage inViewEle={inView} refEl={ref} />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          <FirstDodamIntro />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          <AllMockUp />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          <DodamFunctionPage number={0} />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          <DodamFunctionPage number={1} />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          <DodamFunctionPage number={2} />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          <DodamFunctionPage number={3} />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          <DodamDetailFunction />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          <TeacherIntro />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          <TeacherUnder />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          <MineService />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          <MineServiceSub />
        </ScrollSection> */}

        <ScrollSection pageId={PAGECOUNT++}>
          <MoramMain />
        </ScrollSection>

        <ScrollSection pageId={PAGECOUNT++}>
          {/*  모람 마무리 */}
          <MineMockUp />
        </ScrollSection>




        <ScrollSection pageId={PAGECOUNT++}>
          <TeamPicture />
        </ScrollSection>
      </ScrollContainer>
    </div>
  );
};

export default withRouter(ServiceIntroduce);
