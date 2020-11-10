import React from 'react';
import './DodamDark.scss';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';

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
                  다크모드에 대한 설명 설명 <br />
                  모바일 / 웹에서 라이트 모드와 다크모드를 지원합니다.
                </div>
                <div className="DodamDark-explainWrap-underTitle primary">
                  도담도담 라이트모드🌙
                </div>
              </div>
              <div className="DodamDark-imgWrap">
                <div className="DodamDark-imgWrap-wrapper">
                  <div className="DodamDark-imgWrap-wrapper-mobile"></div>
                  <div className="DodamDark-imgWrap-wrapper-web"></div>
                  <div className="DodamDark-imgWrap-wrapper-mobile"></div>
                  <div className="DodamDark-imgWrap-wrapper-mobile"></div>
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
