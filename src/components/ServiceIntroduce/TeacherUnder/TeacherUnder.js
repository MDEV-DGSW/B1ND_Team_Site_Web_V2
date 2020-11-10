import React from 'react';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';
import './TeacherUnder.scss';

const TeacherUnder = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0.1,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });
  return (
    <>
      <FadeIn transitionDuration={400} delay={90}>
        <div className="TeacherUnder" ref={ref}>
          <div className="TeacherUnder-wrap">
            <div className="TeacherUnder-wrap-imgWrap">
              <div
                className="TeacherUnder-wrap-imgWrapper"
                style={{
                  width: '1400px',
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
              >
                <div className="TeacherUnder-wrap-imgWrap-web"></div>
                <div className="TeacherUnder-wrap-imgWrap-mobile"></div>
              </div>
              <div className="TeacherUnder-wrap-imgWrap-textWrap">
                <div className="TeacherUnder-wrap-imgWrap-textWrap-topTitle">
                  a
                </div>
                <div className="TeacherUnder-wrap-imgWrap-textWrap-underTitle">
                  2
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </>
  );
};

export default TeacherUnder;
