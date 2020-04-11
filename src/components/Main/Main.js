import React from 'react';

import { AiOutlineCaretUp } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";

import Image1 from "assets/images/이미지1.jpg";
import Image2 from "assets/images/이미지2.jpg";
import Image3 from "assets/images/이미지3.jpg";
import Image4 from "assets/images/이미지5.jpg";
import Image5 from "assets/images/이미지4.jpg";
import Image6 from "assets/images/이미지6.jpg";
import Image7 from "assets/images/이미지7.jpg";
// import Image8 from "assets/images/이미지8.jpg";
// import Image9 from "assets/images/이미지9.jpg";

import { FaChartBar } from "react-icons/fa";

import './Main.scss';

const MainTopItem = ({ header, number, Increase, updateDate, linkName, link }) => {
  return(
    <li className="main__content-toplist-item">
      <h1 className="main__content-toplist-item-header">{header}</h1>
      <span className="main__content-toplist-item-number">{number}개</span>
      <span className="main__content-toplist-item-increase">
        <span className="main__content-toplist-item-increase-icon"><AiOutlineCaretUp/></span>{Increase}
      </span>
      <div className="main__underline" /> {/*number 아래 선*/}
      <div className="main__content-toplist-item-updateDate">update:{updateDate}</div>
      <a href={link} className="main__content-toplist-item-link">{linkName}</a>
      <span className="main__content-toplist-item-link-icon"><MdKeyboardArrowRight/></span>
    </li>
  );
}

const MainBottomItem = ({ imageUrl, hoverTitle, hoverDes }) => {
  return(
    <li className="main__content-bottomList-item">
      <img className="main__content-bottomList-item-img" src={imageUrl} />
      <div className="main__content-bottomList-item-hoverContent">
      <div>{hoverTitle}</div>
      <div>{hoverDes}</div>
      </div>
    </li>
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
    <div className="main__slide">
      <div className="main__slide-content">
      <div className="main__slide-content-title">Title text example</div>
      <div className="main__underline-white" />
      <div className="main__slide-content-des">content text here</div>
      </div>
    </div>

    <div className="main__content">

      {/* top list ---------------- */}
      <ul className="main__content-toplist">
        <div className="main__content-toplist-wrap">
        <MainTopItem
        header="코드 라인 수" 
        number="1298276" Increase="1,000"
        updateDate="2020.04.11"
        linkName="깃허브 바로가기" link="guthub.com"
        />
        <MainTopItem
        header="코드 라인 수" 
        number="1298276" Increase="1,000"
        updateDate="2020.04.11"
        linkName="깃허브 바로가기" link="guthub.com"
        />
        <MainTopItem
        header="코드 라인 수" 
        number="1298276" Increase="1,000"
        updateDate="2020.04.11"
        linkName="깃허브 바로가기" link="guthub.com"
        />
        <MainTopItem
        header="코드 라인 수" 
        number="1298276" Increase="1,000"
        updateDate="2020.04.11"
        linkName="깃허브 바로가기" link="guthub.com"
        />
        </div>
      </ul>

      {/* bottomList-------------- */}
      <ul className="main__content-bottomList">
        <div className="main__content-bottomList-wrap">
        <MainBottomItem imageUrl={Image1} hoverTitle="2020 예시" hoverDes="2020.04.10 Lorem"/>
        <MainBottomItem imageUrl={Image2} hoverTitle="2020 예시" hoverDes="2020.04.10 Lorem"/>
        <MainBottomItem imageUrl={Image3} hoverTitle="2020 예시" hoverDes="2020.04.10 Lorem"/>
        <MainBottomItem imageUrl={Image4} hoverTitle="2020 예시" hoverDes="2020.04.10 Lorem"/>
        <li className="main__content-bottomList-textBox">
          <div className="main__content-bottomList-textBox-content">
            <span className="main__content-bottomList-textBox-content-title">디귿디귿</span>
            <span className="main__content-bottomList-textBox-content-des">오하형 바보 멍청이</span>
          </div>
        </li>
        <MainBottomItem imageUrl={Image7} hoverTitle="2020 예시" hoverDes="2020.04.10 Lorem"/>
        <MainBottomItem imageUrl={Image5} hoverTitle="2020 예시" hoverDes="2020.04.10 Lorem"/>
        <MainBottomItem imageUrl={Image6} hoverTitle="2020 예시" hoverDes="2020.04.10 Lorem"/>
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
          endDes2ndline="회고 시간을 갖습니다.예시 텍스트"
          />
          <MainEndItem icon={<FaChalkboardTeacher/>} endTitle="Open Seminar" 
          endDes="학생들이 주도적으로 오픈 세미나를 진행하며 "
          endDes2ndline="다양한 개발 기술과 문장이 생각이 안나요"
          />
          <MainEndItem icon={<FaChartBar/>} endTitle="연말 회고 시간" 
          endDes="한학기 또는 주요 행사가 끝난 후 팀원이 모여 "
          endDes2ndline="회고 시간을 갖습니다.예시 텍스트"
          />
          <MainEndItem icon={<FaChartBar/>} endTitle="연말 회고 시간" 
          endDes="한학기 또는 주요 행사가 끝난 후 팀원이 모여 "
          endDes2ndline="회고 시간을 갖습니다.예시 텍스트"
          />
          </div>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Main;