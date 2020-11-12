import React from "react";
import "./TeacherTablet.scss";

import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';
import TeacherTabletImage from 'assets/images/mockup/Teacher_SecondPage.png';

const TeacherTablet = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });

  return (
    <div className="TeacherTablet" ref={ref}>
      <div className="TeacherTablet__Img">
        <img src={TeacherTabletImage} alt="tablet img" />
      </div>
      <div className="TeacherTablet__content">
        {
          inView ? (
            <FadeIn transitionDuration={400} delay={400}>
              <h1>
                도담도담<br />
                교사의<br />
                생활에<br />
                한걸음
              </h1>
              <div>
                <p>선생님들이<br />
                  쉽게 학생들의 생활을 관리하고<br />
                  편리하게 업무를 진행할 수 있도록<br />
                  끊임없이 고민합니다
                </p>
                <p>
                  학생 뿐만 아니라<br />
                  교사도 함께, 도담도담
                </p>
              </div>
            </FadeIn>
          ) : null
        }
      </div>
      <div className="TeacherTablet__backGround"></div>
    </div>
  )
}

export default TeacherTablet;