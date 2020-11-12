import React from 'react';
import './Offbase.scss';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';
import OffbaseWeb from 'assets/images/mockup/Offbase.png';

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
                  일과 후 시간 위치 확인을 위한
                </div>
                <div className="Offbase-locationApplyWrap-underTitle primary">
                  외출 외박
                </div>
              </div>
              <div className="Offbase-locationApplyWrap-explainWrap">
                <div className="Offbase-locationApplyWrap-explainWrap-wrapper">
                  도담도담이 있기 전, 우리 학교는 <br /> 일과가 끝나면 모두
                  교무실에 모여 종이 당직을 작성했습니다.
                  <br /> 잃어버리고, 찢어지고, 지워지던 종이 당직 대신 <br />
                  이제는 클릭 몇번으로 손쉽게 위치신청!
                </div>
              </div>
              <div className="Offbase-locationApplyWrap-uiImgWrap">
                <div className="Offbase-locationApplyWrap-uiImgWrap-wrapper">
                  <div className="Offbase-locationApplyWrap-uiImgWrap-wrapper-webImg">
                    <img src={OffbaseWeb} alt={OffbaseWeb} />
                  </div>
                  <div className="Offbase-locationApplyWrap-uiImgWrap-wrapper-mobileImg"></div>
                  <div className="Offbase-locationApplyWrap-uiImgWrap-wrapper-mobileImg"></div>
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
