import React from 'react';
import './Example2.scss';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';
const Example2 = ({ FirstPageInView }) => {
  const [ref, inView, entry] = useInView({
    threshold: 0.1,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });
  console.log('Example2', inView);
  console.log('');

  return (
    <>
      {FirstPageInView ? null : (
        <FadeIn transitionDuration={400} delay={90}>
          <div className={'Example2-square'} />
        </FadeIn>
      )}

      <div className="Example2" ref={ref}>
        {inView ? (
          <>
            <div>
              <FadeIn transitionDuration={400} delay={400}>
                <div className="Example2-wrap">
                  <div className="Example2-wrap-left">a</div>
                  <div className="Example2-wrap-right">
                    <div className="Example2-wrap-right-mobile"></div>
                    <div className="Example2-wrap-right-web"></div>
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

export default Example2;
