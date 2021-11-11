import React from "react";
import "./FirstDodamIntro.scss";
import { useInView } from "react-intersection-observer";
import DodamMain from "assets/images/mockup/dodamMain1.png";
import DodamProfile from "assets/images/mockup/DodamProfile.png";
import DodamDarkWakeUp from "assets/images/mockup/DodamDarkWakeUp.png";
import DodamDarkPlan from "assets/images/mockup/DodamDarkPlan.png";
import FadeIn from "react-fade-in";

const FirstDodamIntro = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0.1,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });

  return (
    <>
      {inView && (
        <FadeIn transitionDuration={400} delay={400}>
          <div className="FirstDodamIntro" ref={ref} >
            <div className="FirstDodamIntro-FirstImage">
              <img src={DodamMain} alt={DodamMain} />
              <img src={DodamProfile} alt={DodamProfile} />
            </div>
            <div className="FirstDodamIntro-SecondImage">
              <img src={DodamDarkWakeUp} alt={DodamDarkWakeUp} />
              <img src={DodamDarkPlan} alt={DodamDarkPlan} />
            </div>
            <div className="FirstDodamIntro-ContentWrap">
              <div className="FirstDodamIntro-ContentWrap-Title">
                <div>학생들을 위한,</div>
                <div>학생들이 만든,</div>
                <div>스마트 스쿨 플랫폼</div>
                <div className="FirstDodamIntro-ContentWrap-Title-Primary">도담도담</div>
              </div>
              <div className="FirstDodamIntro-ContentWrap-Content">
                <div>학생들의 곁에는 항상 도담도담</div>
                <div>도담도담은,</div>
                <div>학생과 선생님이 조금 더 편리한</div>
                <div>학교생활을 할 수 있도록</div>
                <div>바인드팀이 개발한</div>
                <div>학생생활 관리 시스템입니다.</div>
              </div>
            </div>
          </div>
        </FadeIn>
      )}
    </>
  );
};

export default FirstDodamIntro;
