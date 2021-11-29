import React from "react";
import FadeIn from "react-fade-in";
import { useInView } from "react-intersection-observer";
import "./TeacherUnder.scss";
import DodamTeacherMain from "assets/images/mockup/DodamTeacherMain.png";

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
        <FadeIn transitionDuration={400} delay={300}>
          <div className="TeacherUnder" ref={ref}>
            <div className="TeacherUnder-wrap">
              <div className="TeacherUnder-wrap-imgWrap">
                <img src={DodamTeacherMain} alt={DodamTeacherMain} />
              </div>

              <div className="TeacherUnder-wrap-textWrap">
                <div className="TeacherUnder-wrap-textWrap-topTitle">
                  선생님도 함께하는 서비스, <br />
                  <div>도담도담</div>
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
