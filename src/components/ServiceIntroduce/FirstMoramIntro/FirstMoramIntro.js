import React from "react";
import "./FirstMoramIntro.scss";
import { useInView } from "react-intersection-observer";
import MoramMain from 'assets/images/mockup/MoramMain2.png';
import MoramProfile from 'assets/images/mockup/MoramProfile.png';
import MoramPostEdit from 'assets/images/mockup/MoramPostEdit.png';
import MoramPostView from 'assets/images/mockup/MoramPostView.png';

import FadeIn from "react-fade-in";

const FirstMoramIntro = () => {
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
          <div className="FirstMoramIntro" ref={ref} >
            <div className="FirstMoramIntro-FirstImage">
              <img src={MoramMain} alt={MoramMain} />
              <img src={MoramPostEdit} alt={MoramPostEdit} />
            </div>
            <div className="FirstMoramIntro-SecondImage">
              <img src={MoramPostView} alt={MoramPostView} />
              <img src={MoramProfile} alt={MoramProfile} />
            </div>
            <div className="FirstMoramIntro-ContentWrap">
              <div className="FirstMoramIntro-ContentWrap-Title">
                <div>학생들을 위한,</div>
                <div>학생들이 만든,</div>
                <div>팀빌딩 플랫폼</div>
                <div className="FirstMoramIntro-ContentWrap-Title-Primary">모람모람</div>
              </div>
              <div className="FirstMoramIntro-ContentWrap-Content">
                <div>모람모람은,</div>
                <div>학생들이 조금 더 편리하게</div>
                <div>팀을 모으고 가입할 수 있도록</div>
                <div>바인드팀이 개발한</div>
                <div>팀 빌딩 시스템 입니다.</div>
              </div>
            </div>
          </div>
        </FadeIn>
      )}
    </>
  );
};

export default FirstMoramIntro;
