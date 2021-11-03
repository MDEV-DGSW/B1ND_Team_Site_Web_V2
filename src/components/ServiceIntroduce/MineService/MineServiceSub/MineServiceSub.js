import React from 'react';
import './MineServiceSub.scss';
import DAuthDetail from 'assets/images/mockup/DAuthDetail.png';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';

const MineServiceSub = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });

  return (
    <div className="MineServiceSub" ref={ref}>
      <div className="MineServiceSub__content">
        {inView ? (
          <FadeIn transitionDuration={400} delay={90}>
            <h1>DAUTH FROM B1ND</h1>
            <div className="MineServiceSub__content-serviceList">
              <div className="MineServiceSub__content-serviceList-text">
                <div className="MineServiceSub__content-serviceList-text-title">손쉬운 로그인</div>
                <div>
                  {' '}
                    이제 도담도담 계정으로
                    <br />
                    다른 서비스를 이용해보세요
                    <br />
                </div>
              </div>

              <div className="MineServiceSub__content-serviceList-text">
                <div className="MineServiceSub__content-serviceList-text-title">손쉬운 수정</div>
                <div>
                  {' '}
                    이제 간단하게
                    <br />
                    도담도담에서 수정하세요
                    <br />
                </div>
              </div>

              <div className="MineServiceSub__content-serviceList-text">
                <div className="MineServiceSub__content-serviceList-text-title">손쉬운 접근</div>
                <div>
                  {' '}
                    이제 로그인, 회원가입 만들지 마세요
                    <br />
                    DAUTH로 간편하게
                    <br />
                    가입할 수 있습니다.
                </div>
              </div>
            </div>
          </FadeIn>
        ) : null}
      </div>
      <div className="MineServiceSub__img">
        <img src={DAuthDetail} alt="mine" />
      </div>
    </div>
  );
};

export default MineServiceSub;
