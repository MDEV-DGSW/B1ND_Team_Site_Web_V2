import React from 'react';
import './MineService.scss';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';
import DAuthMain from 'assets/images/mockup/DAuthMain.png';

const MineService = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0.1,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });

  return (
    <>
      {inView ? (
        <div className="MineServiceDiv" ref={ref}>
          <div className="MineServiceDiv_imgContainer">
            <img src={DAuthMain} alt="mine" />
          </div>
          <div className="MineServiceDiv_sloganContainer">
            <div className="MineServiceDiv_sloganContainer_slogans">
              <div className="MineServiceDiv_sloganContainer_slogans_slogan">
                도담 계정 하나로,
              </div>
              <div className="MineServiceDiv_sloganContainer_slogans_slogan">
                학교 모두를,
              </div>
              <div className="MineServiceDiv_sloganContainer_slogans_slogan">
                DAUTH
              </div>
            </div>
            <div className="MineServiceDiv_sloganContainer_sloganBar MineServiceDiv_sloganContainer_sloganBar_top"></div>
            <div className="MineServiceDiv_sloganContainer_sloganBar"></div>
            <div className="MineServiceDiv_sloganContainer_sloganBar"></div>
            <div className="MineServiceDiv_explanations">
              <p className="MineServiceDiv_explanations_explanation">DAUTH는</p>
              <p className="MineServiceDiv_explanations_explanation">
                도담도담의 정보를 이용하여
              </p>
              <p className="MineServiceDiv_explanations_explanation">
                로그인을 할 수 있는
              </p>
              <p className="MineServiceDiv_explanations_explanation">
                통합로그인 서비스 입니다.
              </p>
              {/* <p className="MineServiceDiv_explanations_explanation">
                모니터링 프로그램입니다
              </p> */}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MineService;
