import React from 'react';
import './MineMockUp.scss';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';
// import MineLastPageImg from 'assets/images/mockup/MineLastPage.png';
import MoramAllMockUp from 'assets/images/mockup/MoramAll.png';

const MineMockUp = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0.1,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });
  return (
    <>
      {inView ? (
        <div className="MineMockUp" ref={ref}>
          <div className="MineMockUp-imgWrap">
            <img src={MoramAllMockUp} alt={MoramAllMockUp} />
          </div>
          <div className="MineMockUp-textWrap">
            <FadeIn transitionDuration={400} delay={90}>
              <div className="MineMockUp-textWrap-topTitle primary">
                모람모람, 지속적인 발전
              </div>
              <div className="MineMockUp-textWrap-underTitle">
                <h4>하나의 서비스, 엄청난 도약</h4>
                하루하루의 시간을 어떻게 활용 했는지
                <br />
                확인하고 일상에 대입할 수 있습니다.
                <br />
                <br />
                사용하는 프로그램의 통계를 통해
                <br />
                정확한 정보를 얻을 수 있으며
                <br />
                제공되는 기능들을 통해
                <br />
                일상의 시간을 유용하게 관리해보세요!
                <br />
                <br />
                <strong>모람모람</strong>은 여러분들의
                <br />
                팀빌딩을 응원합니다
              </div>
            </FadeIn>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MineMockUp;
