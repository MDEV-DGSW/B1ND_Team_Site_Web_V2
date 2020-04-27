import React from 'react';
import './ServiceIntroduce.scss';
// import Test from 'assets/images/Test.jpg';
// import mobile1 from 'assets/images/mobile1.png';
import mobile_std from 'assets/images/mobile_std.png';
import web from 'assets/images/web.png';
import mobile_tch from 'assets/images/mobile_tch.png';
import window from 'assets/images/window.png';
// import web2 from 'assets/images/web2.png';
import TeamImg from 'assets/images/Bind.jpg';
import BindLogo from 'assets/images/LOGO초안.svg';
import both from 'assets/images/YBSJ.png';

const ServiceIntroduce = () => {
  return (
    <>
      <div className="ServiceIntroduce">
        <div className="ServiceIntroduce-wrap">
          <div className="ServiceIntroduce-wrap-img">
            <img
              src={both}
              style={{
                position: 'relative',
                left: '0',
                bottom: '0',
                width: '100%',
              }}
              alt={TeamImg}
            />
            <div className="ServiceIntroduce-wrap-textBox">
              <div>
                <img
                  src={BindLogo}
                  alt=""
                  style={{ width: '120px', height: '120px' }}
                />
                <span className="ServiceIntroduce-wrap-textBox-logoText"></span>
              </div>
              <div className="ServiceIntroduce-wrap-textBox-text">
                <div className="ServiceIntroduce-wrap-textBox-text-blueBox">
                  학생과 학교, 그 이상을 연결하는
                </div>{' '}
                <b className="ServiceIntroduce-wrap-textBox-text-dodamdodam">
                  도담도담
                </b>
              </div>
            </div>
            <div className="ServiceIntroduce-function">
              <div className="ServiceIntroduce-function-card">
                <b className="ServiceIntroduce-function-card-Ctitle">
                  도담도담 웹
                </b>
                <div className="ServiceIntroduce-function-card-slide">
                  <div className="ServiceIntroduce-function-card-slide-imgTemplate">
                    <img
                      src={web}
                      className="ServiceIntroduce-function-card-slide-imgTemplate-img"
                      alt={web}
                    />
                  </div>
                  <p className="ServiceIntroduce-function-card-slide-info">
                    불편한 종이 장부는 이제 그만. 어디서나 클릭 몇 번으로 위치,
                    외출/외박, 기상송을 신청해보세요. <br />
                    {/* 외출/외박도 간편하게. 승인된 외출/외박, 위치신청, 그리고
                    급식까지 다양한 정보를 한눈에 볼 수 있어요. */}
                  </p>
                </div>
              </div>
              <div className="ServiceIntroduce-function-card">
                <b className="ServiceIntroduce-function-card-Ctitle">
                  도담도담 모바일 학생용
                </b>
                <div className="ServiceIntroduce-function-card-slide">
                  <div className="ServiceIntroduce-function-card-slide-imgTemplate">
                    <img
                      src={mobile_std}
                      className="ServiceIntroduce-function-card-slide-imgTemplate-img"
                      alt={mobile_std}
                    />
                  </div>
                  <p className="ServiceIntroduce-function-card-slide-info">
                    종이 장부를 찾으러 그만 뛰어다녀도 되요. 언제 어디서나
                    편리하고 우아하게 휴대폰으로 위치신청을 할 수 있어요. <br />
                    외출/외박도 간편하게. 승인된 외출/외박, 위치신청, 그리고
                    급식까지 다양한 정보를 한눈에 볼 수 있어요.
                  </p>
                </div>
              </div>
              <div className="ServiceIntroduce-function-card">
                <b className="ServiceIntroduce-function-card-Ctitle">
                  도담도담 모바일 선생님용
                </b>
                <div className="ServiceIntroduce-function-card-slide">
                  <div className="ServiceIntroduce-function-card-slide-imgTemplate">
                    <img
                      src={mobile_tch}
                      className="ServiceIntroduce-function-card-slide-imgTemplate-img"
                      alt={mobile_tch}
                    />
                  </div>
                  <p className="ServiceIntroduce-function-card-slide-info">
                    선생님은 더 이상 불편한 종이 장부를 들고 불편하게 다니지
                    않아도 됩니다. 언제 어디서나 편리하게 학생 위치를 확인 할 수
                    있어요.
                    <br />
                    외출/외박 승인도 간편하게. 승인된 외출/외박, 위치신청,
                    그리고 급식까지 다양한 정보를 한눈에 확인 할 수 있어요.
                  </p>
                </div>
              </div>
              <div className="ServiceIntroduce-function-card endbox">
                <b className="ServiceIntroduce-function-card-Ctitle">
                  도담도담 윈도우
                </b>
                <div className="ServiceIntroduce-function-card-slide">
                  <div className="ServiceIntroduce-function-card-slide-imgTemplate">
                    <img
                      src={window}
                      className="ServiceIntroduce-function-card-slide-imgTemplate-img"
                      alt={window}
                    />
                  </div>
                  <p className="ServiceIntroduce-function-card-slide-info">
                    불편한 종이 장부는 이제 그만. 어디서나 편리하게 위치 신청을
                    할 수 있어요. <br />
                    외출/외박도 간편하게. 승인된 외출/외박, 위치신청, 그리고
                    급식까지 다양한 정보를 한눈에 볼 수 있어요.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceIntroduce;
