import React from 'react';
import './TeamPicture.scss';
import TeamImg from 'assets/images/B1nd_teamPicture.png';

const TeamPicture = () => {
  return (
    <div className="TeamPicture">
      <div className="TeamPicture__img">
        <img src={TeamImg} alt="바인드" />
      </div>
      <div className="TeamPicture__content">
        <h1>Team B1ND</h1>
        <ul>
          <li>창립일</li>
          <li>팀원 수</li>
          <li>주요 서비스</li>
          <li>주소</li>
          <li>문의</li>
          <li>웹 사이트</li>
        </ul>
        <ul style={{ marginLeft: '35px' }}>
          <li>2018년 1월</li>
          <li>66명</li>
          <li>도담도담</li>
          <li>대구광역시 달성군 구지면 창리로 11길 93 B1nd team</li>
          <li>
            <a href="mailto:mdev_team@dgsw.hs.kr">mdev_team@dgsw.hs.kr</a>
          </li>
          <li>
            <a href="http://b1nd.com" rel="noopener noreferrer" target="_blank">
              b1nd.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TeamPicture;
