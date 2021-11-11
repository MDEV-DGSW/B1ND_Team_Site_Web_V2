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
              {/* <br /> */}

              <div className="MineMockUp-textWrap-underTitle">
                <h4>하나의 서비스, 첫걸음의 시작</h4>
                <div className="MineMockUp-textWrap-underTitle-first">
                  <div>현재 내가 가입을 원하는 팀이 있다면,</div>
                  <div>현재 나와 같은 취미를 가진 사람을 찾는다면,</div>
                  <div>모람모람에서 간단하고 편하게 팀빌딩 할 수 있습니다.</div>
                </div>
                <br />

                <div className="MineMockUp-textWrap-underTitle-second">
                  <div>원클릭으로 손쉽게 원하는 팀과 모임에 가입할 수 있으며,</div>
                  <div>고민할 필요 없이 제공되는 양식을 통해</div>
                  <div>발로 뛰지 않고 간편하게 팀원들을 모집해 보세요!</div>
                </div>
                <br />

                <div className="MineMockUp-textWrap-underTitle-third">
                  <div><strong>모람모람</strong>은 여러분들의</div >
                  <div>모든 팀과 팀빌딩을 응원합니다.</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div >
      ) : null}
    </>
  );
};

export default MineMockUp;
