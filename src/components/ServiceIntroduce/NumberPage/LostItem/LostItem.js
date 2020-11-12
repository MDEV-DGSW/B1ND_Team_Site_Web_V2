import React from 'react';
import './LostItem.scss';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';
import WebLostFound from 'assets/images/mockup/Web_LostFound.png';
import MobileLostFound from 'assets/images/mockup/Mobile_LostFound.png';
import MobileLostFoundComment from 'assets/images/mockup/Mobile_LostFoundComment.png';
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
                  빠르고 쉽게 찾는
                </div>
                <div className="LostItem-locationApplyWrap-underTitle primary">
                  분실물, 습득물
                </div>
              </div>
              <div className="LostItem-locationApplyWrap-explainWrap">
                <div className="LostItem-locationApplyWrap-explainWrap-wrapper">
                  도담도담이 있기 전, 우리 학교는 <br /> SNS를 통해 분실물을 공유했습니다
                  <br /> 도담도담의 분실물, 습득물 게시판을 통해 <br />
                  빠르고 쉽게 잃어버린 물건을 찾아가세요!
                </div>
              </div>
              <div className="LostItem-locationApplyWrap-uiImgWrap">
                <div className="LostItem-locationApplyWrap-uiImgWrap-wrapper">
                  <div className="LostItem-locationApplyWrap-uiImgWrap-wrapper-webImg">
                    <img src={WebLostFound} alt={WebLostFound} />
                  </div>
                  <div className="LostItem-locationApplyWrap-uiImgWrap-wrapper-mobileImg">
                    <img src={MobileLostFound} alt={MobileLostFound} />
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

export default LostItem;
