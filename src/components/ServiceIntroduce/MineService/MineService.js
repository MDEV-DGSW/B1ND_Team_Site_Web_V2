import React from 'react';
import './MineService.scss';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';
import MineServiceImg from 'assets/images/mockup/MineFirstPage.png';

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
            <img src={MineServiceImg} alt="mine" />
          </div>
          <div className="MineServiceDiv_sloganContainer">
            <div className="MineServiceDiv_sloganContainer_slogans">
              <div className="MineServiceDiv_sloganContainer_slogans_slogan">
                나의 하루를
              </div>
              <div className="MineServiceDiv_sloganContainer_slogans_slogan">
                더 자세하게,
              </div>
              <div className="MineServiceDiv_sloganContainer_slogans_slogan">
                더 정확하게
              </div>
              <div className="MineServiceDiv_sloganContainer_slogans_slogan">
                마인
              </div>
            </div>
            <div className="MineServiceDiv_sloganContainer_sloganBar MineServiceDiv_sloganContainer_sloganBar_top"></div>
            <div className="MineServiceDiv_sloganContainer_sloganBar"></div>
            <div className="MineServiceDiv_sloganContainer_sloganBar"></div>
            <div className="MineServiceDiv_sloganContainer_sloganBar"></div>
            <div className="MineServiceDiv_explanations">
              <p className="MineServiceDiv_explanations_explanation">마인은</p>
              <p className="MineServiceDiv_explanations_explanation">
                학생들의 생활에
              </p>
              <p className="MineServiceDiv_explanations_explanation">
                밀접하게 관련되어
              </p>
              <p className="MineServiceDiv_explanations_explanation">
                사용할 수 있는
              </p>
              <p className="MineServiceDiv_explanations_explanation">
                모니터링 프로그램입니다
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MineService;
