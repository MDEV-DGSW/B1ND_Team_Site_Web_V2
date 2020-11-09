import React from 'react';
import './DodamLight.scss';

const DodamLight = () => {
  return (
    <>
      <div className="DodamLight">
        <div className="DodamLight-explainWrap">
          <div className="DodamLight-explainWrap-topTitle">
            다크모드에 대한 설명 설명 <br />
            모바일 / 웹에서 라이트 모드와 다크모드를 지원합니다.
          </div>
          <div className="DodamLight-explainWrap-underTitle primary">
            도담도담 라이트모드☀
          </div>
        </div>
        <div className="DodamLight-imgWrap">
          <div className="DodamLight-imgWrap-wrapper">
            <div className="DodamLight-imgWrap-wrapper-mobile"></div>
            <div className="DodamLight-imgWrap-wrapper-web"></div>
            <div className="DodamLight-imgWrap-wrapper-mobile"></div>
            <div className="DodamLight-imgWrap-wrapper-mobile"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DodamLight;
