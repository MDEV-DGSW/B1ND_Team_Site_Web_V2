import React from 'react';
import './NumberPage.scss';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';

import WebLostFound from 'assets/images/mockup/Web_LostFound.png';
import MobileLostFound from 'assets/images/mockup/Mobile_LostFound.png';

import MobileOffBase from 'assets/images/mockup/Mobile_OffBase.png';

import WebWakeSong from 'assets/images/mockup/Web_WakeSong.png';
import MobileWakeSong from 'assets/images/mockup/Mobile_WakeSong.png';

import WebMain from 'assets/images/mockup/Web_Main.png';
import MobileHome from 'assets/images/mockup/Mobile_Home.png';
import MobileLocation from 'assets/images/mockup/Mobile_Location.png';

const pageItems = [
  {
    PageNumber: '01',
    WebImg: WebMain,
    MobileImg: MobileHome,
    MobileImg2: MobileLocation,
    SubTitle: '일과 후 시간에 위치 확인을 위한',
    Title: '학생 위치 신청',
    content1: '도담도담이 있기 전, 우리 학교는',
    content2: '일과가 끝나면 모두 교무실에 모여 종이 당직을 작성했습니다.',
    content3: '잃어버리고, 찢어지고, 지워지던 종이 당직 대신',
    content4: '이제는 클릭 몇번으로 손쉽게 위치 신청하세요!'
  },
  {
    PageNumber: '02',
    WebImg: WebMain,
    MobileImg: MobileOffBase,
    MobileImg2: false,
    SubTitle: '손쉬운 신청과 복귀를 위한',
    Title: '외출/외박 신청',
    content1: '도담도담이 있기 전, 우리 학교는',
    content2: '외출/외박을 신청하고 복귀할 때 직접선생님께 찾아가 확인받았습니다.',
    content3: '번거롭게 선생님을 찾으러 가는 대신',
    content4: '편하고 간단하게 신청하세요!'
  },
  {
    PageNumber: '03',
    WebImg: WebWakeSong,
    MobileImg: MobileWakeSong,
    MobileImg2: false,
    SubTitle: '듣고싶은 노래를 직접 신청',
    Title: '아침 기상곡',
    content1: '도담도담이 있기 전, 우리 학교는',
    content2: '방송부원이 직접 기상곡을 신청하고 승인하였습니다.',
    content3: '소수 학생들이 기상곡을 담당하는 대신',
    content4: '모든 학생들이 신청한 다양한 곡을 재생하세요!'
  },
  {
    PageNumber: '04',
    WebImg: WebLostFound,
    MobileImg: MobileLostFound,
    MobileImg2: false,
    SubTitle: '소중한 물건을 빠르고 쉽게 찾는',
    Title: '분실물, 습득물',
    content1: '도담도담이 있기 전, 우리 학교는',
    content2: 'SNS를 통해 분실물을 공유했습니다.',
    content3: '도담도담의 분실물, 습득물 게시판을 통해',
    content4: '빠르고 쉽게 잃어버린 물건을 찾아가세요!'
  }
];


const NumberPageNumber = ({ pageItem }) => {
  const {
    PageNumber,
    WebImg,
    MobileImg,
    MobileImg2,
    SubTitle,
    Title,
    content1,
    content2,
    content3,
    content4
  } = pageItem;
  return (
    <div>
      <div className="NumberPage-section">{PageNumber}</div>
      <div className="NumberPage-NumberPageWrap">
        <div className="NumberPage-NumberPageWrap-topTitle">
          {SubTitle}
        </div>
        <div className="NumberPage-NumberPageWrap-underTitle primary">
          {Title}
        </div>
      </div>
      <div className="NumberPage-NumberPageWrap-explainWrap">
        <div className="NumberPage-NumberPageWrap-explainWrap-wrapper">
          {content1}<br />
          {content2}<br />
          {content3}<br />
          {content4}
        </div>
      </div>
      <div className="NumberPage-NumberPageWrap-uiImgWrap">
        <div className="NumberPage-NumberPageWrap-uiImgWrap-wrapper">
          <div className="NumberPage-NumberPageWrap-uiImgWrap-wrapper-webImg">
            <img src={WebImg} alt={WebImg} />
          </div>
          <div className="NumberPage-NumberPageWrap-uiImgWrap-wrapper-mobileImg">
            <img src={MobileImg} alt={MobileImg} />
          </div>
          {
            MobileImg2 ?
              <div className="NumberPage-NumberPageWrap-uiImgWrap-wrapper-mobileImg">
                <img src={MobileImg2} alt={MobileImg2} />
              </div> :
              <></>
          }
        </div>
      </div>
    </div>
  )
}

const NumberPage = ({ number }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });

  console.log(number)
  return (
    <>
      <NumberPageNumber pageItem={pageItems[number]} />
    </>
  )
}

export default NumberPage;