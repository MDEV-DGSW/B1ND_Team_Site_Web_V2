import React from 'react';
import './TeacherIntro.scss';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';
import TeacherMockups from 'assets/images/mockup/Teacher_FirstPage.png';

const TeacherIntro = ({ FirstPageInView }) => {
  const [ref, inView, entry] = useInView({
    threshold: 0.1,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });

  return (
    <>
      {FirstPageInView ? null : (
        <FadeIn transitionDuration={400} delay={90}>
          <div className={'TeacherIntro-square'} />
        </FadeIn>
      )}

      <div className="TeacherIntro" ref={ref}>
        {inView ? (
          <>
            <div>
              <FadeIn transitionDuration={400} delay={400}>
                <div className="TeacherIntro-wrap">
                  <div className="TeacherIntro-wrap-textWrap">
                    <div className="TeacherIntro-wrap-textWrap-teacherTextWrap">
                      <div className="TeacherIntro-wrap-textWrap-teacherTextWrap-wrapper">
                        <div className="TeacherIntro-wrap-textWrap-teacherTextWrap-wrapper-dodam">
                          도담도담
                        </div>
                        <div className="TeacherIntro-wrap-textWrap-teacherTextWrap-wrapper-teacher primary">
                          Teacher
                        </div>
                      </div>

                      <div className="TeacherIntro-wrap-textWrap-explainWrap">
                        <div>선생님들의 곁에는 항상 도담도담</div>
                        <br />

                        <div>선생님용 도담도담은</div>
                        <div>학생들의 생활을 관리하기 위한</div>
                        <div>여러 기능들을 제공합니다.</div>
                      </div>
                    </div>
                  </div>
                  <div className="TeacherIntro-wrap-right">
                    <img src={TeacherMockups} alt ="teacher mockups" />
                  </div>
                </div>
              </FadeIn>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default TeacherIntro;
