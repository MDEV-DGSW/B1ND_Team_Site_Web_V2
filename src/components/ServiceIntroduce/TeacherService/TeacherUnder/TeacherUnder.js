import React from 'react';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';
import './TeacherUnder.scss';
import TeacherWeb from 'assets/images/mockup/Web_Teacher.png';
import TeacherMobile from 'assets/images/mockup/Mobile_Teacher.png';

const TeacherUnder = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0.1,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });
  return (
    <>
      {inView ? (
        <FadeIn transitionDuration={400} delay={90}>
          <div className="TeacherUnder" ref={ref}>
            <div className="TeacherUnder-wrap">
              <div className="TeacherUnder-wrap-imgWrap">
                <img
                  className="TeacherUnder-wrap-imgWrap-Web"
                  src={TeacherWeb}
                  alt="web teacher"
                />
                <img
                  className="TeacherUnder-wrap-imgWrap-Mobile"
                  src={TeacherMobile}
                  alt="mobile teacher"
                />
              </div>

              <div className="TeacherUnder-wrap-textWrap">
                <div className="TeacherUnder-wrap-textWrap-topTitle">
                  선생님도 함께하는 서비스, <br />
                  도담도담
                </div>
                <div className="TeacherUnder-wrap-textWrap-underTitle">
                  <div>학생들의 생활을 관리하기 위해</div>
                  <br />

                  <div>위치확인</div>
                  <div>외출/외박 복귀 확인</div>
                  <div>결석 학생 확인</div>
                  <div>일정 관리</div>
                  <br />

                  <div>기능을 제공합니다.</div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      ) : null}
    </>
  );
};

export default TeacherUnder;
