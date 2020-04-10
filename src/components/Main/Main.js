import React from 'react';

import { AiOutlineCaretUp } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
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

const MainBottomItem = ({ imageUrl, hoverTitle }) => {
  return(
    <li className="main__content-bottmList-item" style="background-image: url"></li>
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
        <MainBottomItem
        imageUrl="../../assets/images/Test.jpg"
        />
      </ul>
    </div>
    </div>
  );
}

export default Main;