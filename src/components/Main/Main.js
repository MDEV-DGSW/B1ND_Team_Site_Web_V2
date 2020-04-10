import React from 'react';

import './Main.scss';

const MainTopItem = ({header, number, Increase, updateDate, linkName, link}) => {
  return(
    <li className="main__content-toplist-item">
      <h1 className="main__content-toplist-item-header">{header}</h1>
      <span className="main__content-toplist-item-number">{number}개</span>
      <span className="main__content-toplist-item-increase">{Increase}</span>
      <div className="main__content-toplist-item-updateDate">update:{updateDate}</div>
      <div className="main__content-toplist-item-link">
        <a href={link}>{linkName}</a>
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
      <ul className="main__content-toplist">
        <MainTopItem
        header="코드 파일 수" number="202020"
        updateDate="2020.04.11"
        linkName="깃허브 바로가기" link="guthub.com"
        />
      </ul>
    </div>
    </div>
  );
}

export default Main;