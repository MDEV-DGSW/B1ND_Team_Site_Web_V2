import React from 'react';
import './DodamDark.scss';

const DodamDark = () => {
  return (
    <>
      <div className="DodamDark">
        <div className="DodamDark-explainWrap">
          <div className="DodamDark-explainWrap-topTitle">
            다크모드에 대한 설명 설명 <br />
            모바일 / 웹에서 라이트 모드와 다크모드를 지원합니다.
          </div>
          <div className="DodamDark-explainWrap-underTitle primary">
            도담도담 라이트모드🌙
          </div>
        </div>
        <div className="DodamDark-imgWrap">
          <div className="DodamDark-imgWrap-wrapper">
            <div className="DodamDark-imgWrap-wrapper-mobile"></div>
            <div className="DodamDark-imgWrap-wrapper-web"></div>
            <div className="DodamDark-imgWrap-wrapper-mobile"></div>
            <div className="DodamDark-imgWrap-wrapper-mobile"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DodamDark;
