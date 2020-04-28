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
                    불편한 종이 장부는 이제 그만.<br />
                    위치신청, 외출/외박과 급식까지 다양한 정보를 한 눈에 볼 수 있어요.
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
                    학생들을 직접 찾아다니는 불편함 없이,<br />
                    언제 어디서나 위치, 외출/외박 신청 정보를 확인할 수 있어요.
                  </p>
                </div>
              </div>
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
                    더욱 더 유익하게 해줄 기능으로<br />
                    기상송, 분실물, 상담신청, 상벌점 조회, 일정 조회 기능이 있어요.
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
                  학년마다 다른 일정, 관리하기 힘드셨죠?<br />
                  웹에서는 물론 윈도우에서도 다가오는 일정을 한 눈에 모아볼 수 있어요.
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
