import React from 'react';
import './WakeSong.scss';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';
import WebWakeSong from 'assets/images/mockup/Web_WakeSong.png';
import MobileWakeSong from 'assets/images/mockup/Mobile_WakeSong.png';
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
              <div className="WakeSong-section">03</div>
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
                  도담도담이 있기 전, 우리 학교는 <br /> 방송부원이 직접
                  기상곡을 신청하고 승인하였습니다
                  <br /> 소수 학생들이 기상송을 담당하는 대신 <br />
                  모든 학생들이 신청한 다양한 곡을 재생하세요!
                </div>
              </div>
              <div className="WakeSong-locationApplyWrap-uiImgWrap">
                <div className="WakeSong-locationApplyWrap-uiImgWrap-wrapper">
                  <div className="WakeSong-locationApplyWrap-uiImgWrap-wrapper-webImg">
                    <img src={WebWakeSong} alt={WebWakeSong} />
                  </div>
                  <div className="WakeSong-locationApplyWrap-uiImgWrap-wrapper-mobileImg">
                    <img src={MobileWakeSong} alt={MobileWakeSong} />
                  </div>
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
