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
      {inView ? (
        <>
          <div ref={ref}>
            <FadeIn transitionDuration={400} delay={900}>
              <div className="ScreenShotWeb">
                <div className="ScreenShotWeb-tempNav"></div>
                <div className="ScreenShotWeb-imgWithText">
                  <div className="ScreenShotWeb-imgWithText-imgWrap">
                    <div className="ScreenShotWeb-box"></div>
                    <div className="ScreenShotWeb-box"></div>
                  </div>

                  <div className="ScreenShotWeb-imgWithText-textWrap">
                    <div className="ScreenShotWeb-imgWithText-textWrap-topText">
                      <div className="ScreenShotWeb-imgWithText-textWrap-topText-wrapper">
                        <div>학생들을 위한</div>
                        <div>학생들이 만든</div>
                        <div>스마트 스쿨 플랫폼</div>
                        <div className="primary">도담도담</div>
                      </div>
                    </div>
                    <div className="ScreenShotWeb-imgWithText-textWrap-undderText">
                      학생들의 곁에는 항상 도담도담 내용들 서비스에 대한 어쩌고
                      저쩌고어ㅉ 간단한 소개와 텍스트들과 내용들 어쩌고
                      저쩌고어ㅉ 내용들 서비스에 대한 어쩌고 저쩌고어ㅉ <br />
                      간단한 소개와 텍스트들과 내용들 어쩌고 저쩌고어ㅉa
                    </div>
                  </div>
                </div>
                <div className="ScreenShotWeb-underImg">
                  <div className="ScreenShotWeb-box"></div>
                  <div className="ScreenShotWeb-box"></div>
                  <div className="ScreenShotWeb-box"></div>
                </div>
              </div>
              <div className="ScreenShotWeb-underMobileWrap">
                <div className="ScreenShotWeb-underMobileWrap-wrapper">
                  <div className="ScreenShotWeb-underMobileWrap-wrapper-topTitle">
                    언제든 내 손 안에,
                  </div>
                  <div className="ScreenShotWeb-underMobileWrap-wrapper-bigTitle primary">
                    도담도담 모바일
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ScreenShotWeb;
