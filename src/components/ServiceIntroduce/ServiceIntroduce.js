import React, { Fragment } from 'react';
import { ScrollSection, ScrollContainer } from 'react-onepage-scroll';
import './ServiceIntroduce.scss';
// import FirstPage from './FirstPage';
import { useInView } from 'react-intersection-observer';
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
import TeacherUnder from './TeacherService/TeacherUnder/TeacherUnder';
import Offbase from './NumberPage/Offbase/Offbase';
import LostItem from './NumberPage/LostItem/LostItem';
import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { withRouter } from 'react-router-dom';
const ServiceIntroduce = ({ history }) => {
  const [ref, inView, entry] = useInView({
    threshold: 0.079,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });
  const handleGoMain = () => {
    history.push('/');
  };
  let PAGECOUNT = 0;
  return (
    <div className="ServiceIntroduce">
      <button className="ServiceIntroduce-button" onClick={handleGoMain}>
        <AiOutlineHome />
      </button>
      <ScrollContainer>
        <ScrollSection pageId={PAGECOUNT++}>
          <FirstMovie />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          <IntroPage inViewEle={inView} refEl={ref} />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          <ScreenShotWeb />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}></ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          <AllMockUp />
        </ScrollSection>
        {/* 5,6 발표할때는 없애주기 */}
        {/* <ScrollSection pageId={PAGECOUNT++}>
          <Mobile1 />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          <Mobile2 />
        </ScrollSection> */}
        <ScrollSection pageId={PAGECOUNT++}>
          <IOS1 />
        </ScrollSection>
        {/* <ScrollSection pageId={PAGECOUNT++}>
          <IOS2 />
        </ScrollSection> */}
        <ScrollSection pageId={PAGECOUNT++}>
          <LocationApply />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          <Offbase />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          <WakeSong />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          <LostItem />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          <IOS2 />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          <DodamLight />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          <DodamDark />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          <TeacherIntro />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          <TeacherUnder />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          <TeacherTablet />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          <MineService />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          <MineServiceSub />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          <MineMockUp />
        </ScrollSection>
        <ScrollSection pageId={PAGECOUNT++}>
          <TeamPicture />
        </ScrollSection>
      </ScrollContainer>
    </div>
  );
};

export default withRouter(ServiceIntroduce);
