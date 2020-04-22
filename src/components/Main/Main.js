import React from 'react';

// import { AiOutlineCaretUp } from "react-icons/ai";
// import { MdPlayArrow } from "react-icons/md"
// import { AiFillCaretRight } from "react-icons/ai";
// import { FaKiwiBird } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { FaHandsHelping } from "react-icons/fa";
import ImageSlide from 'components/Common/ImageSlide/ImageSlide';

import Image1 from "assets/images/이미지1.jpg";
import Image2 from "assets/images/이미지2.jpg";
import Image3 from "assets/images/이미지3.jpg";
import Image4 from "assets/images/이미지5.jpg";
import Image5 from "assets/images/이미지4.jpg";
import Image6 from "assets/images/이미지6.jpg";
import Image7 from "assets/images/이미지7.jpg";

import { FaChartBar } from "react-icons/fa";

import './Main.scss';

const MainTopItem = ({ header, number, Increase, updateDate, linkName, link }) => {
  return(
    <li className="main__content-toplist-item">
      <h1 className="main__content-toplist-item-header">{header}</h1>
      <span className="main__content-toplist-item-number">{number}</span>
      <span className="main__content-toplist-item-increase">
        {/* <span className="main__content-toplist-item-increase-icon"><AiOutlineCaretUp/></span>{Increase} */}
      </span>
      <div className="main__underline" /> {/*number 아래 선*/}
      <div className="main__content-toplist-item-updateDate">update:{updateDate}</div>
      <a href="https://github.com/MDEV-DGSW" target="_blank" className="main__content-toplist-item-link">{linkName}</a>
      <span className="main__content-toplist-item-link-icon"><MdKeyboardArrowRight/></span>
    </li>
  );
}

const MainTopItem2 = ({ header, number}) => {
  return(
    <li className="main__content-toplist-item">
    </li>
  );
}

const MainBottomItem = ({ imageUrl, hoverTitle, hoverDes }) => {
  return(
    <div className="main__content-bottomList-item">
      <img className="main__content-bottomList-item-img" src={imageUrl} alt ="이미지" />
      <div className="main__content-bottomList-item-hoverContent">
      <div className="main__content-bottomList-item-hoverContent-title">
        <span style={{color:'#0067bc'}}>{hoverTitle}</span>
        년의 바인드</div>
      {/* <span className="main__content-bottomList-item-hoverContent-icon" ><MdPlayArrow/></span> */}
      <div className="main__content-bottomList-item-hoverContent-des">{hoverDes}</div>
      </div>
    </div>
  );
}

const MainEndItem = ({ icon, endTitle, endDes, endDes2ndline }) =>{
  return(
    <li className="main__content-endList-list-item">
      <span className="main__content-endList-list-item-icon">{icon}</span>
      <h1 className="main__content-endList-list-item-title">{endTitle}</h1>
      <p className="main__content-endList-list-item-des">{endDes}<br/>{endDes2ndline}</p>
    </li>
  );
}

const Main = () => {
  return(
    <div className="main">
    <ImageSlide/>
    <div className="main__content">
      {/* top list ---------------- */}
      <ul className="main__content-toplist">
        <div className="main__content-toplist-wrap">
        <MainTopItem
        header="코드 라인" 
        number="146495줄" Increase="1,000"
        updateDate="2020.04.11"
        linkName="깃허브 바로가기" link="github.com"
        />
        <MainTopItem
        header="프로젝트 파일" 
        number="506파일" Increase="1,000"
        updateDate="2020.04.11"
        linkName="깃허브 바로가기" link="github.com"
        />
        <MainTopItem
        header="생성한 API" 
        number="47개" Increase="1,000"
        updateDate="2020.04.11"
        linkName="깃허브 바로가기" link="github.com"
        />
        <div className="main__content-toplist-underline" />
        <MainTopItem
        header="커밋 횟수" 
        number="293846회" Increase="1,000"
        updateDate="2020.04.11"
        linkName="깃허브 바로가기" link="github.com"
        />
        <MainTopItem
        header="도담도담 개발 총 시간" 
        number="860시간" Increase="1,000"
        updateDate="2020.04.11"
        linkName="깃허브 바로가기" link="github.com"
        />
        <MainTopItem2
        header="" 
        number="" Increase=""
        updateDate=""
        linkName="" link=""
        />
        </div>
      </ul>

      {/* bottomList-------------- */}
      <ul className="main__content-bottomList">
        <div className="main__content-bottomList-wrap">
        <MainBottomItem imageUrl={Image1} hoverTitle="2018" hoverDes="#해커톤 #부스"/>
        <MainBottomItem imageUrl={Image2} hoverTitle="2019" hoverDes="#여기뭐할까"/>
        <MainBottomItem imageUrl={Image3} hoverTitle="2019" hoverDes="#선배특강 #바인드실"/>
        <MainBottomItem imageUrl={Image4} hoverTitle="2019" hoverDes="#ICT융합컨퍼런스"/>
        <li className="main__content-bottomList-textBox">
          <div className="main__content-bottomList-textBox-content">
            <span className="main__content-bottomList-textBox-content-title">바인드와 함께한 17520시간,</span>
            <span className="main__content-bottomList-textBox-content-des">
              2016년, n명의 메신저팀으로 시작한 바인드 팀은 n년의 시간동안<br/>
              학생들의 곁에서 더 나은 학교생활을 지원하기 위해 최선을 다해왔습니다.<br/>
              바인드는 모든 대구소프트웨어 학생, 선생님들과 함께 나아갑니다.
              </span>
          </div>
        </li>
        <MainBottomItem imageUrl={Image7} hoverTitle="2019" hoverDes="#ICT #도담도담"/>
        <MainBottomItem imageUrl={Image5} hoverTitle="2019" hoverDes="#연말 #2019회고"/>
        <MainBottomItem imageUrl={Image6} hoverTitle="2017" hoverDes="#M2SYS #B1ND"/>
        </div>
      </ul>

      {/* End content */}
      <div className="main__content-endList">
        <div className="main__content-endList-Title">
          <h1 className="main__content-endList-Title-title">직접 만들어가는 스마트 스쿨 플랫폼</h1>
          <p className="main__content-endList-Title-des">
          바인드 팀은 스마트 스쿨을 관리하고 더욱 발전된 서비스를 제공하기 위해 변화를 추구하며,<br/>
          수많은 학생들이 개발에 자신감을 가지고 경쟁력을 키우며 다가올 미래를 준비할 수 있도록 앞장서겠습니다.
          </p>
        </div>
        <ul className="main__content-endList-list">
          <div className="main__content-endList-list-wrap">
          <MainEndItem icon={<FaChartBar/>} endTitle="연말 회고 시간" 
          endDes="한학기 또는 주요 행사가 끝난 후 팀원이 모여 "
          endDes2ndline="팀을 돌아보는 회고 시간을 갖습니다."
          />
          <MainEndItem icon={<FaChalkboardTeacher/>} endTitle="오픈 세미나" 
          endDes="학생들이 주도적으로 오픈 세미나를 진행하며 "
          endDes2ndline="다양한 개발 기술과 서비스를 공유합니다."
          />
          <MainEndItem icon={<FiBookOpen/>} endTitle="자율적인 학습" 
          endDes="바인드에서는 팀원 스스로가 주도적, 자율적으로"
          endDes2ndline="기술을 익히고 사용하며 학습합니다."
          />
          <MainEndItem icon={<FaHandsHelping/>} endTitle="수평적인 문화 " 
          endDes="선배, 후배와 선생님 모두 같은 눈높이에서"
          endDes2ndline="커뮤니케이션하며 팀을 이끌어 나갑니다."
          />
          </div>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Main;