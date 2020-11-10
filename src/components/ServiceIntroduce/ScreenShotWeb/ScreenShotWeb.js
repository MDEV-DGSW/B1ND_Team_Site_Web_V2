import React from 'react';
import './ScreenShotWeb.scss';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';

const ScreenShotWeb = () => {
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
            <div className="ScreenShotWeb" ref={ref}>
              <div className="ScreenShotWeb-leftWrap">
                <div className="ScreenShotWeb-box"></div>
                <div className="ScreenShotWeb-box"></div>
                <div className="ScreenShotWeb-box"></div>
              </div>
              <div className="ScreenShotWeb-rightWrap">
                <div className="ScreenShotWeb-rightWrap-textWrap">
                  <div className="ScreenShotWeb-rightWrap-textWrap-topWrap">
                    탑
                  </div>
                  <div className="ScreenShotWeb-rightWrap-textWrap-bottomWrap">
                    바텀
                  </div>
                </div>
                <div className="ScreenShotWeb-rightWrap-underImgWrap">
                  <div className="ScreenShotWeb-box"></div>
                  <div className="ScreenShotWeb-box"></div>
                </div>
              </div>
            </div>
            <div className="ScreenShotWeb-mobileTextWrap">
              <div className="ScreenShotWeb-mobileTextWrap-wrapper">
                <div className="ScreenShotWeb-mobileTextWrap-wrapper-topText">
                  언제든 내 손안에,
                </div>
                <div className="ScreenShotWeb-mobileTextWrap-wrapper-underText primary">
                  도담도담 모바일
                </div>
              </div>
            </div>
          </FadeIn>
        </>
      ) : null}
    </>
  );
};

export default ScreenShotWeb;
