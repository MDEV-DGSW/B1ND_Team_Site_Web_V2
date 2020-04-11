import React from 'react';

import { AiOutlineCaretUp } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";

import Image1 from "assets/images/이미지1.jpg";
import Image2 from "assets/images/이미지2.jpg";
import Image3 from "assets/images/이미지3.jpg";
import Image4 from "assets/images/이미지5.jpg";
import Image5 from "assets/images/이미지4.jpg";
import Image6 from "assets/images/이미지6.jpg";
import Image7 from "assets/images/이미지7.jpg";
import Image8 from "assets/images/이미지8.jpg";
import Image9 from "assets/images/이미지9.jpg";

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

const Main = () => {
  return(
    <div className="main">
    <div className="main__slide">
      <div className="main__slide-title">Title text</div>
      <div className="main__slide-content">content text here</div>
    </div>

    <div className="main__content">

      {/* top list ---------------- */}
      <ul className="main__content-toplist">
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
      </ul>

      {/* bottomList-------------- */}
      <ul className="main__content-bottomList">
        <MainBottomItem imageUrl={Image1} hoverTitle="2020 예시" hoverDes="2020.04.10 Lorem"/>
        <MainBottomItem imageUrl={Image2} hoverTitle="2020 예시" hoverDes="2020.04.10 Lorem"/>
        <MainBottomItem imageUrl={Image3} hoverTitle="2020 예시" hoverDes="2020.04.10 Lorem"/>
        <MainBottomItem imageUrl={Image4} hoverTitle="2020 예시" hoverDes="2020.04.10 Lorem"/>
        {/* <MainBottomItem imageUrl={Image5} hoverTitle="2020 예시" hoverDes="2020.04.10 Lorem"/>
        <MainBottomItem imageUrl={Image6} hoverTitle="2020 예시" hoverDes="2020.04.10 Lorem"/> */}
        <li className="main__content-bottomList-textBox">
          <div className="main__content-bottomList-textBox-content">
            <span className="main__content-bottomList-textBox-content-title">디귿디귿</span>
            <span className="main__content-bottomList-textBox-content-des">오하형 바보 멍청이</span>
          </div>
        </li>
        <MainBottomItem imageUrl={Image7} hoverTitle="2020 예시" hoverDes="2020.04.10 Lorem"/>
        <MainBottomItem imageUrl={Image8} hoverTitle="2020 예시" hoverDes="2020.04.10 Lorem"/>
        <MainBottomItem imageUrl={Image9} hoverTitle="2020 예시" hoverDes="2020.04.10 Lorem"/>
      </ul>
    </div>
    </div>
  );
}

export default Main;