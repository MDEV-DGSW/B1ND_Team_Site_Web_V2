import React from 'react';
import './DodamLight.scss';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';
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
                다크모드에 대한 설명 설명 <br />
                모바일 / 웹에서 라이트 모드와 다크모드를 지원합니다.
              </div>
              <div className="DodamLight-explainWrap-underTitle primary">
                도담도담 라이트모드☀
              </div>
            </div>
            <div className="DodamLight-imgWrap">
              <div className="DodamLight-imgWrap-wrapper">
                <div className="DodamLight-imgWrap-wrapper-mobile"></div>
                <div className="DodamLight-imgWrap-wrapper-web"></div>
                <div className="DodamLight-imgWrap-wrapper-mobile"></div>
                <div className="DodamLight-imgWrap-wrapper-mobile"></div>
              </div>
            </div>
          </FadeIn>
        </>
      ) : null}
    </div>
  );
};

export default DodamLight;
