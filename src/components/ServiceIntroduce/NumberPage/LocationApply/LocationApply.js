import React from 'react';
import './LocationApply.scss';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';
import LocationWeb from 'assets/images/mockup/LocationApply.png';

const LocationApply = () => {
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
            <div className="LocationApply" ref={ref}>
              <div className="LocationApply-section">01</div>
              <div className="LocationApply-locationApplyWrap">
                <div className="LocationApply-locationApplyWrap-topTitle">
                  일과 후 시간 위치 확인을 위한
                </div>
                <div className="LocationApply-locationApplyWrap-underTitle primary">
                  학생 위치 신청
                </div>
              </div>
              <div className="LocationApply-locationApplyWrap-explainWrap">
                <div className="LocationApply-locationApplyWrap-explainWrap-wrapper">
                  도담도담이 있기 전, 우리 학교는 <br /> 일과가 끝나면 모두
                  교무실에 모여 종이 당직을 작성했습니다.
                  <br /> 잃어버리고, 찢어지고, 지워지던 종이 당직 대신 <br />
                  이제는 클릭 몇번으로 손쉽게 위치신청!
                </div>
              </div>
              <div className="LocationApply-locationApplyWrap-uiImgWrap">
                <div className="LocationApply-locationApplyWrap-uiImgWrap-wrapper">
                  <div className="LocationApply-locationApplyWrap-uiImgWrap-wrapper-webImg">
                    <img src={LocationWeb} alt={LocationWeb} />
                  </div>
                  <div className="LocationApply-locationApplyWrap-uiImgWrap-wrapper-mobileImg"></div>
                  <div className="LocationApply-locationApplyWrap-uiImgWrap-wrapper-mobileImg"></div>
                </div>
              </div>
            </div>
          </FadeIn>
        </>
      ) : null}
    </>
  );
};

export default LocationApply;
