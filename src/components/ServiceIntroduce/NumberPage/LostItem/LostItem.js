import React from 'react';
import './LostItem.scss';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';
import LostItemWeb from 'assets/images/mockup/LostItem.png';

const LostItem = () => {
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
            <div className="LostItem" ref={ref}>
              <div className="LostItem-section">04</div>
              <div className="LostItem-locationApplyWrap">
                <div className="LostItem-locationApplyWrap-topTitle">
                  일과 후 시간 위치 확인을 위한
                </div>
                <div className="LostItem-locationApplyWrap-underTitle primary">
                  분실물
                </div>
              </div>
              <div className="LostItem-locationApplyWrap-explainWrap">
                <div className="LostItem-locationApplyWrap-explainWrap-wrapper">
                  도담도담이 있기 전, 우리 학교는 <br /> 일과가 끝나면 모두
                  교무실에 모여 종이 당직을 작성했습니다.
                  <br /> 잃어버리고, 찢어지고, 지워지던 종이 당직 대신 <br />
                  이제는 클릭 몇번으로 손쉽게 위치신청!
                </div>
              </div>
              <div className="LostItem-locationApplyWrap-uiImgWrap">
                <div className="LostItem-locationApplyWrap-uiImgWrap-wrapper">
                  <div className="LostItem-locationApplyWrap-uiImgWrap-wrapper-webImg">
                    <img src={LostItemWeb} alt={LostItemWeb} />
                  </div>
                  <div className="LostItem-locationApplyWrap-uiImgWrap-wrapper-mobileImg"></div>
                  <div className="LostItem-locationApplyWrap-uiImgWrap-wrapper-mobileImg"></div>
                </div>
              </div>
            </div>
          </FadeIn>
        </>
      ) : null}
    </>
  );
};

export default LostItem;
