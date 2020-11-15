import React from "react";
import "./MineServiceSub.scss";
import MineSecondPageImg from "assets/images/mockup/MineSecondPage.png"

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
        {
          inView ? (
            <FadeIn transitionDuration={400} delay={400}>
              <h1>MINE FROM B1nd</h1>
              <div className="MineServiceSub__content-serviceList">
                <ul style={{ display: "none" }}></ul>
                <ul>
                  <li>사용 프로그램 분석</li>
                  <li>
                    <p> 사용자가 선택한 프로그램들의<br />
                    사용시간을 분석합니다<br /><br />

                    현재 사용중인 프로그램들을<br />
                    보여줍니다
                  </p>
                  </li>
                </ul>

                <ul>
                  <li>사용 웹 URL 분석</li>
                  <li>
                    <p> 사용자가 선택한 웹페이지들의<br />
                    사용시간을 분석합니다<br />
                    </p>
                    <p>
                      주로 사용되는 웹페이지를 추천<br />
                      합니다
                  </p>
                  </li>
                </ul>

                <ul>
                  <li>통계</li>
                  <li>
                    <p> 사용 프로그램과 사용 웹페이지를<br />
                      그래프를 통해 사용자가 한 눈에<br />
                      확인할 수 있습니다
                  </p>
                  </li>
                </ul>
              </div>
            </FadeIn>
          ) : null
        }
      </div>
      <div className="MineServiceSub__img">
        <img src={MineSecondPageImg} alt="mine" />
      </div>
    </div>
  )
}

export default MineServiceSub;