import React from 'react';
import './MineMockUp.scss';
import MineLastPageImg from "assets/images/mockup/MineLastPage.png"

const MineMockUp = () => {
  return (
    <div className="MineMockUp">
      <div className="MineMockUp-imgWrap">
        <img src={MineLastPageImg} alt={MineLastPageImg} />
      </div>
      <div className="MineMockUp-textWrap">
        <div className="MineMockUp-textWrap-topTitle primary">
          MINE, 시간의 흐름
        </div>
        <div className="MineMockUp-textWrap-underTitle">
          <h4>프로그램 하나에 담은 거대한 도약</h4>
          하루하루의 시간을 어떻게 활용 했는지<br />
          확인하고 일상에 대입할 수 있습니다.<br /><br />

          사용하는 프로그램의 통계를 통해<br />
          정확한 정보를 얻을 수 있으며<br />
          제공되는 기능들을 통해<br />
          일상의 시간을 유용하게 관리해보세요!<br /><br />

          MINE은 여러분들의<br />
          시간을 응원합니다
        </div>
      </div>
    </div>
  );
};

export default MineMockUp;
