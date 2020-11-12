import React from 'react';
import './AllMockUp.scss';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';
import MobileAllMockUp from 'assets/images/mockup/MobileAllMockUp.png';

const AllMockUp = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0.1,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });
  return (
    <>
      {inView ? (
        <>
          <FadeIn transitionDuration={400} delay={120}>
            <div className="AllMockUp" ref={ref}>
              <div className="AllMockUp-img">
                <img src={MobileAllMockUp} alt={MobileAllMockUp} />
              </div>
            </div>
          </FadeIn>
        </>
      ) : null}
    </>
  );
};

export default AllMockUp;
