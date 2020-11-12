import React from 'react';
import './Offbase.scss';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';
import WebMain from 'assets/images/mockup/Web_Main.png';
import MobileOffBase from 'assets/images/mockup/Mobile_OffBase.png';
import MobileOffBaseApply from 'assets/images/mockup/Mobile_OffBaseApply.png';

const Offbase = () => {
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
          <FadeIn transitionDuration={400} dlay={400}>
            <div className="Offbase" ref={ref}>
              <div className="Offbase-section">02</div>
              <div className="Offbase-locationApplyWrap">
                <div className="Offbase-locationApplyWrap-topTitle">
                  손쉬운 신청과 복귀를 위한
                </div>
                <div className="Offbase-locationApplyWrap-underTitle primary">
                  외출 / 외박 신청
                </div>
              </div>
              <div className="Offbase-locationApplyWrap-explainWrap">
                <div className="Offbase-locationApplyWrap-explainWrap-wrapper">
                  도담도담이 있기 전, 우리 학교는 <br /> 외출/외박을 신청하고 복귀할 때 직접
                  선생님께 찾아가 확인받았습니다
                  <br /> 번거롭게 선생님을 찾으러 가는 대신 <br />
                  편하고 간단하게 신청하세요!
                </div>
              </div>
              <div className="Offbase-locationApplyWrap-uiImgWrap">
                <div className="Offbase-locationApplyWrap-uiImgWrap-wrapper">
                  <div className="Offbase-locationApplyWrap-uiImgWrap-wrapper-webImg">
                    <img src={WebMain} alt={WebMain} />
                  </div>
                  <div className="Offbase-locationApplyWrap-uiImgWrap-wrapper-mobileImg">
                    <img src={MobileOffBase} alt={MobileOffBase} />
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

export default Offbase;
