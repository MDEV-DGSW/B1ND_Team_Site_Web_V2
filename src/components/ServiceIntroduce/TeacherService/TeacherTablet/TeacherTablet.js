import React from 'react';
import './TeacherTablet.scss';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';
import TeacherSecond from 'assets/images/mockup/Teacher_SecondPage.png';
import DodamTeacher from 'assets/images/mockup/DodamTeacherAllMockup.png';

const TeacherTablet = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });

  return (
    <>
      {inView ? (
        <FadeIn transitionDuration={400} delay={90}>
          <div className="TeacherTablet" ref={ref}>
            <img
              className="TeacherTablet-LeftImage"
              src={DodamTeacher}
              alt="teacher second"
            />

            <div className="TeacherTablet-RightSection">
              <div className="TeacherTablet-RightSection-Title">
                <div>도담도담</div>
                <div>교사의</div>
                <div>생활에</div>
                <div>한걸음</div>
                <div>도담 Teahcer</div>
              </div>

              <div className="TeacherTablet-RightSection-Contents">
                <div>선생님들이</div>
                <div>쉽게 학생들의 생활을 관리하고</div>
                <div>편리하게 업무를 진행할 수 있도록</div>
                <div>끊임없이 고민합니다.</div>
              </div>
            </div>
          </div>
        </FadeIn>
      ) : null}
    </>
  );
};

export default TeacherTablet;
