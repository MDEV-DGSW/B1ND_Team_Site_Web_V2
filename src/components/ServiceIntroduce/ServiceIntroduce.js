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
import FirstMoramIntro from "./FirstMoramIntro/FirstMoramIntro";

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
        <ScrollSection pageId={PAGECOUNT++}>
          {/* 발표 시작 영상 */}
          <FirstMovie />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          {/* 바인드 소개 */}
          <IntroPage inViewEle={inView} refEl={ref} />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          {/* 도담 인트로 */}
          <FirstDodamIntro />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          {/* 도담의 가치관 */}
          <AllMockUp />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          {/* 도담기능1 */}
          <DodamFunctionPage number={0} />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          {/* 도담기능2 */}
          <DodamFunctionPage number={1} />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          {/* 도담기능3 */}
          <DodamFunctionPage number={2} />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          {/* 도담기능4 */}
          <DodamFunctionPage number={3} />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          {/* 도담 세부 기능 */}
          <DodamDetailFunction />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          {/* 도담 티처 인트로 */}
          <TeacherIntro />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          {/* 도담 티처 기능 */}
          <TeacherUnder />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          {/* DAuth 인트로 */}
          <MineService />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          {/* DAuth 소개 */}
          <MineServiceSub />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          {/* 모람 인트로 */}
          <FirstMoramIntro />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          {/* 모람 배경 */}
          <MoramMain />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          {/*  모람 마무리 */}
          <MineMockUp />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          {/* 발표 마무리 */}
          <TeamPicture />
        </ScrollSection>
      </ScrollContainer>
    </div>
  );
};

export default withRouter(ServiceIntroduce);
