import React, { Fragment } from 'react';
import { ScrollSection, ScrollContainer } from 'react-onepage-scroll';
import './ServiceIntroduce.scss';
// import FirstPage from './FirstPage';
import { useInView } from 'react-intersection-observer';
import track, { useTracking } from 'react-tracking';
import IntroPage from './IntroPage/IntroPage';
import ScreenShotWeb from './ScreenShotWeb/ScreenShotWeb';
import LocationApply from './NumberPage/LocationApply/LocationApply';
import Mobile1 from './Mobile/Mobile1';
import Mobile2 from './Mobile/Mobile2';
import WakeSong from './NumberPage/WakeSong/WakeSong';
import DodamLight from './DodamLight/DodamLight';
import DodamDark from './DodamDark/DodamDark';
import TeacherIntro from './TeacherService/TeacherIntro/TeacherIntro';
import IOS2 from './iOS/iOS2';
import IOS1 from './iOS/iOS1';
import AllMockUp from './AllMockUp/AllMockUp';
import MineService from './MineService/MineService';
import MineServiceSub from './MineService/MineServiceSub/MineServiceSub';
import TeacherTablet from './TeacherService/TeacherTablet/TeacherTablet';
import MineMockUp from './MineService/MineMockUp/MineMockUp';
import TeamPicture from './TeamPicture/TeamPicture';
import FirstMovie from './FirstMoviePage/FirstMoviePage';
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
          <FirstMovie />
        </ScrollSection>
        <ScrollSection pageId={1}>
          <IntroPage inViewEle={inView} refEl={ref} />
        </ScrollSection>

        <ScrollSection pageId={2}>
          <ScreenShotWeb />
        </ScrollSection>

        <ScrollSection pageId={3}></ScrollSection>
        <ScrollSection pageId={4}>
          <AllMockUp />
        </ScrollSection>
        <ScrollSection pageId={5}>
          <Mobile1 />
        </ScrollSection>

        <ScrollSection pageId={6}>
          <Mobile2 />
        </ScrollSection>

        <ScrollSection pageId={7}>
          <IOS1 />
        </ScrollSection>

        <ScrollSection pageId={8}>
          <IOS2 />
        </ScrollSection>

        <ScrollSection pageId={9}>
          <LocationApply />
        </ScrollSection>

        <ScrollSection pageId={10}>
          <WakeSong />
        </ScrollSection>

        <ScrollSection pageId={11}>
          <DodamLight />
        </ScrollSection>

        <ScrollSection pageId={12}>
          <DodamDark />
        </ScrollSection>

        <ScrollSection pageId={13}>
          <TeacherIntro />
        </ScrollSection>

        <ScrollSection pageId={14}></ScrollSection>

        <ScrollSection pageId={15}>
          <TeacherTablet />
        </ScrollSection>

        <ScrollSection pageId={16}>
          <MineService />
        </ScrollSection>

        <ScrollSection pageId={17}>
          <MineServiceSub />
        </ScrollSection>

        <ScrollSection pageId={18}>
          <MineMockUp />
        </ScrollSection>

        <ScrollSection pageId={19}>
          <TeamPicture />
        </ScrollSection>
      </ScrollContainer>
    </div>
  );
};

export default ServiceIntroduce;
