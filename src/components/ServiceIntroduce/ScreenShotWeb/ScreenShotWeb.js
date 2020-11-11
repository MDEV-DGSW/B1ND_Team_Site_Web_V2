import React from 'react';
import './ScreenShotWeb.scss';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';

const ScreenShotWeb = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0.1,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });

  return (
    <>
      <div ref={ref}>
        <div className="ScreenShotWeb">
          <div className="ScreenShotWeb-leftWrap">
            {inView ? (
              <>
                <FadeIn transitionDuration={400} delay={120}>
                  <div className="ScreenShotWeb-box"></div>
                  <div className="ScreenShotWeb-box"></div>
                  <div className="ScreenShotWeb-box"></div>
                </FadeIn>
              </>
            ) : null}
          </div>
          <div className="ScreenShotWeb-rightWrap">
            {inView ? (
              <>
                <FadeIn transitionDuration={400} delay={120}>
                  <div className="ScreenShotWeb-rightWrap-textWrap">
                    <div className="ScreenShotWeb-rightWrap-textWrap-topTitle">
                      <div className="ScreenShotWeb-rightWrap-textWrap-topTitle-wrapper">
                        <div>학생들을 위한</div>
                        <div>학생들이 만든</div>
                        <div>스마트 스쿨 플랫폼</div>
                        <div className="primary">도담도담</div>
                      </div>
                    </div>

                    <div className="ScreenShotWeb-rightWrap-textWrap-bottomTitle">
                      <div className="ScreenShotWeb-rightWrap-textWrap-bottomTitle-wrapper">
                        <div>학생들을 위한</div>
                        <div>학생들이 만든</div>
                        <div>학생들의 곁에는 항상 도담도담</div>
                        <div>학생들의 곁에는 항상 도담도담</div>
                        <div>학생들의 곁에는 항상 도담도담</div>
                        <div className="primary">도담도담</div>
                        <div className="primary">도담도담</div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </>
            ) : null}

            {inView ? (
              <>
                <FadeIn transitionDuration={400} delay={400}>
                  <div className="ScreenShotWeb-rightWrap-imgWrap">
                    <div className="ScreenShotWeb-box"></div>
                    <div className="ScreenShotWeb-box"></div>
                  </div>
                </FadeIn>
              </>
            ) : null}
          </div>
        </div>
        <div className="ScreenShotWeb-underWrap">
          <div className="ScreenShotWeb-underWrap-mobileTextWrap">
            <div>언제든 내 손 안에,</div>
            <div className="ScreenShotWeb-underWrap-mobileTextWrap-mobileText primary">
              도담도담 모바일
            </div>
          </div>
          <div>여기에 목업 사진 넣으면 될 듯?</div>
        </div>
      </div>
    </>
  );
};

export default ScreenShotWeb;
