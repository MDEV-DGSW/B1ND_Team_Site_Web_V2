import React from 'react';
import './TeacherIntro.scss';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';
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

      <div className="Example2" ref={ref}>
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
                        학생들의 곁에는 항상 도담도담 <br />
                        어쩌고 저쩌고어ㅉ <br />
                        <br /> 내용들 서비스에 대한 어쩌고 저쩌고어ㅉ 간단한
                        소개와 <br />
                        텍스트들과 내용들 어쩌고 저쩌고어ㅉ <br /> <br />
                        내용들 서비스에 대한 어쩌고 저쩌고어ㅉ 간단한 소개와
                        텍스트들과 내용들
                      </div>
                    </div>
                  </div>
                  <div className="TeacherIntro-wrap-right">
                    <div className="TeacherIntro-wrap-right-mobile"></div>
                    <div className="TeacherIntro-wrap-right-web"></div>
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
