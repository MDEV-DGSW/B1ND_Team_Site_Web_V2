import React from 'react';
import './DodamLight.scss';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';
import WebMain from 'assets/images/mockup/Web_Main.png';
import MobileWakeSong from 'assets/images/mockup/Mobile_WakeSong.png';
import Mobile_Home from 'assets/images/mockup/Mobile_Home.png';
import Mobile_LostFound from 'assets/images/mockup/Mobile_LostFound.png';
import { FaSun } from 'react-icons/fa';

const DodamLight = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });

  return (
    <div className="DodamLight" ref={ref}>
      {inView ? (
        <>
          <FadeIn transitionDuration={400} delay={400}>
            <div className="DodamLight-explainWrap">
              <div className="DodamLight-explainWrap-topTitle">
                당신의 눈은 소중하니까, <br />
                모바일 / 웹에서 라이트모드와 다크모드를 지원합니다.
              </div>
              <div className="DodamLight-explainWrap-underTitle primary">
                도담도담 라이트모드 <FaSun style={{fontSize:'38px'}}/>
              </div>
            </div>
            <div className="DodamLight-imgWrap">
              <div className="DodamLight-imgWrap-wrapper">
                <div className="DodamLight-imgWrap-wrapper-mobile">
                  <img src={MobileWakeSong} alt={MobileWakeSong} />
                </div>
                <div className="DodamLight-imgWrap-wrapper-web">
                  <img src={WebMain} alt={WebMain} />
                </div>
                <div className="DodamLight-imgWrap-wrapper-mobile">
                  <img src={Mobile_Home} alt={Mobile_Home} />
                </div>
                <div className="DodamLight-imgWrap-wrapper-mobile">
                  <img src={Mobile_LostFound} alt={Mobile_LostFound} />
                </div>
              </div>
            </div>
          </FadeIn>
        </>
      ) : null}
    </div>
  );
};

export default DodamLight;
