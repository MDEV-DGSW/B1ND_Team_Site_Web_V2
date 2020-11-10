import React from 'react';
import './WakeSong.scss';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';

const WakeSong = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });
  return (
    <>
      {inView ? (
        <>
          <FadeIn transitionDuration={400} delay={400}>
            <div className="WakeSong" ref={ref}>
              <div className="WakeSong-section">02</div>
              <div className="WakeSong-locationApplyWrap">
                <div className="WakeSong-locationApplyWrap-topTitle">
                  듣고싶은 노래를 직접 신청
                </div>
                <div className="WakeSong-locationApplyWrap-underTitle primary">
                  아침 기상곡
                </div>
              </div>
              <div className="WakeSong-locationApplyWrap-explainWrap">
                <div className="WakeSong-locationApplyWrap-explainWrap-wrapper">
                  도담도담이 있기 전, 우리 학교는 <br /> 일과가 끝나면 모두
                  교무실에 모여 종이 당직을 작성했습니다.
                  <br /> 잃어버리고, 찢어지고, 지워지던 종이 당직 대신 <br />
                  이제는 클릭 몇번으로 손쉽게 위치신청!
                </div>
              </div>
              <div className="WakeSong-locationApplyWrap-uiImgWrap">
                <div className="WakeSong-locationApplyWrap-uiImgWrap-wrapper">
                  <div className="WakeSong-locationApplyWrap-uiImgWrap-wrapper-webImg"></div>
                  <div className="WakeSong-locationApplyWrap-uiImgWrap-wrapper-mobileImg"></div>
                  <div className="WakeSong-locationApplyWrap-uiImgWrap-wrapper-mobileImg"></div>
                </div>
              </div>
            </div>
          </FadeIn>
        </>
      ) : null}
    </>
  );
};

export default WakeSong;
