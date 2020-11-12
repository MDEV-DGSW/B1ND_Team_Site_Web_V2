import React from 'react';
import './DodamDark.scss';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';
import Mobile_LostFound_Dark from 'assets/images/mockup/Mobile_LostFound_Dark.png';
import MobileWakeSong_Dark from 'assets/images/mockup/Mobile_WakeSong_Dark.png';
import WebMain_Dark from 'assets/images/mockup/Web_Main_Dark.png';
import Mobile_Home_Dark from 'assets/images/mockup/Mobile_Home_Dark.png';
const DodamDark = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });

  return (
    <>
      <div className="DodamDark" ref={ref}>
        {inView ? (
          <>
            <FadeIn transitionDuration={400} delay={400}>
              <div className="DodamDark-explainWrap">
                <div className="DodamDark-explainWrap-topTitle">
                  당신의 눈은 소중하니까, <br />
                  모바일 / 웹에서 라이모드와 다크모드를 지원합니다.
                </div>
                <div className="DodamDark-explainWrap-underTitle primary">
                  도담도담 다크모드🌙
                </div>
              </div>
              <div className="DodamDark-imgWrap">
                <div className="DodamDark-imgWrap-wrapper">
                  <div className="DodamDark-imgWrap-wrapper-mobile">
                    <img src={MobileWakeSong_Dark} alt={MobileWakeSong_Dark} />
                  </div>
                  <div className="DodamDark-imgWrap-wrapper-web">
                    <img src={WebMain_Dark} alt={WebMain_Dark} />
                  </div>
                  <div className="DodamDark-imgWrap-wrapper-mobile">
                    <img src={Mobile_Home_Dark} alt={Mobile_Home_Dark} />
                  </div>
                  <div className="DodamDark-imgWrap-wrapper-mobile">
                    <img
                      src={Mobile_LostFound_Dark}
                      alt={Mobile_LostFound_Dark}
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </>
        ) : null}
      </div>
    </>
  );
};

export default DodamDark;
