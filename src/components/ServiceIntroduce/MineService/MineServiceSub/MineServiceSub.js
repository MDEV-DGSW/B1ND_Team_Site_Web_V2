import React from "react";
import "./MineServiceSub.scss";

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
              <ul>
                <li>기능 소개 제목</li>
                <li>
                  <p>학생들의 곁에는 항상 도담도담<br/>
                  어쩌고ㅈ 저쩌고어저고
                  </p>
                  <p>
                    내용들 서비스에대한 어저고저<br/>
                    간단한 소개와 텍스트들과<br/>
                    내용들 학생들의 곁에는
                  </p>
                </li>
              </ul>

              <ul>
                <li>기능 소개 제목</li>
                <li>
                  <p>학생들의 곁에는 항상 도담도담<br/>
                  어쩌고ㅈ 저쩌고어저고
                  </p>
                  <p>
                    내용들 서비스에대한 어저고저<br/>
                    간단한 소개와 텍스트들과<br/>
                    내용들 학생들의 곁에는
                  </p>
                </li>
              </ul>

              <ul>
                <li>기능 소개 제목</li>
                <li>
                  <p>학생들의 곁에는 항상 도담도담<br/>
                  어쩌고ㅈ 저쩌고어저고
                  </p>
                  <p>
                    내용들 서비스에대한 어저고저<br/>
                    간단한 소개와 텍스트들과<br/>
                    내용들 학생들의 곁에는
                  </p>
                </li>
              </ul>
            </div>
          </FadeIn>
          ) : null
        }
        </div>
      <div className="MineServiceSub__img">
        <img alt="mine" />
      </div>
    </div>
  )
}

export default MineServiceSub;