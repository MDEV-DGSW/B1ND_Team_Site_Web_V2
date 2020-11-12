import React from "react";
import "./TeacherTablet.scss";

import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';

const TeacherTablet = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });

  return (
    <div className="TeacherTablet" ref={ref}>
      <div className="TeacherTablet__leftImg">
        <img alt="tablet img"/>
        <img alt="tablet img"/>
      </div>
      <div className="TeacherTablet__content">
      {
        inView ? (
          <FadeIn transitionDuration={400} delay={400}>
              <h1>
                선생님과 함께,<br/>
                도담도담
              </h1>
              <div>
              <p>학생들의 곁에는 항상 도담도담<br/>
              어쩌고ㅈ 저쩌고어저고
              </p>
              <p>
                내용들 서비스에대한 어저고저<br/>
                간단한 소개와 텍스트들과 내용들
              </p>
              </div>
          </FadeIn>
        ) : null
      }
      </div>
      <div className="TeacherTablet__rightImg">
        <img alt="tablet img"/>
        <img alt="tablet img"/>
      </div>
      <div className="TeacherTablet__backGround"></div>
    </div>
  )
}

export default TeacherTablet;