import React, { Fragment } from 'react';
import { ScrollSection, ScrollContainer } from 'react-onepage-scroll';
import './ServiceIntroduce.scss';
// import FirstPage from './FirstPage';
import { useInView } from 'react-intersection-observer';
import track, { useTracking } from 'react-tracking';
import IntroPage from './IntroPage/IntroPage';
import Example2 from './example2/Example2';
import ScreenShotWeb from './ScreenShotWeb/ScreenShotWeb';
import LocationApply from './LocationApply/LocationApply';
import Mobile1 from './Mobile/Mobile1';
import Mobile2 from './Mobile/Mobile2';
const ServiceIntroduce = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0.079,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });

  return (
    <div className="ServiceIntroduce">
      <ScrollContainer>
        <ScrollSection pageId={0}>
          <IntroPage inViewEle={inView} refEl={ref} />
        </ScrollSection>

        <ScrollSection pageId={1}>
          <ScreenShotWeb />
        </ScrollSection>

        <ScrollSection pageId={2}></ScrollSection>
        <ScrollSection pageId={3}>
          <Mobile1 />
        </ScrollSection>

        <ScrollSection pageId={4}>
          <Mobile2 />
        </ScrollSection>

        <ScrollSection pageId={5}>
          <LocationApply />
        </ScrollSection>
      </ScrollContainer>
    </div>
  );
};

export default ServiceIntroduce;
