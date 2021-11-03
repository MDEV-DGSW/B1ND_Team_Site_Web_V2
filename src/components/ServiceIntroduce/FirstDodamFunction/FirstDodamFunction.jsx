import React from "react";
import "./FirstDodamFunction.scss";
import { useInView } from "react-intersection-observer";
import DodamMobilePosition from "assets/images/mockup/DodamMobilePosition.png";
import DodamWEBPosition from "assets/images/mockup/DodamWEBPosition.png";

const FirstDodamFunction = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0.1,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });
  return (
    <>
      {inView && (
        <div className="FirstDodamFunction">
          <div className="FirstDodamFunction-Number"> 0 1 </div>
          <div className="FirstDodamFunction-ContentWrap">
            <div className="FirstDodamFunction-ContentWrap-Title">
              <div className="FirstDodamFunction-ContentWrap-Title-Intro">
                일과 후 시간에 위치 확인을 위한
              </div>
              <div className="FirstDodamFunction-ContentWrap-Title-Main">학생 위치 신청</div>
            </div>
            <div className="FirstDodamFunction-ContentWrap-Content">
              <div>도담도담이 있기 전, 우리 학교에서는</div>
              <div>일과가 끝나면 모든학생이 교무실에서 종이 당직 장부를 작성했습니다.</div>
              <div>잃어버리고, 찢어지고, 지워지던 종이 당직 장부 대신</div>
              <div>이제는 클릭 몇번으로 간편하게 위치 신청하세요!</div>
            </div>
            <div className="FirstDodamFunction-ContentWrap-ImageWrap">
              <img src={DodamWEBPosition} alt={DodamWEBPosition} />
              <img src={DodamMobilePosition} alt={DodamMobilePosition} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FirstDodamFunction;
