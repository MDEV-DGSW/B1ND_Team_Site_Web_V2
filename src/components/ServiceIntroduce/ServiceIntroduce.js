import React from 'react';
import { withRouter } from 'react-router-dom';
import './ServiceIntroduce.scss';
import mobile_std from 'assets/images/mobile_std.png';
import web from 'assets/images/web.png';
import mobile_tch from 'assets/images/mobile_tch.png';
import window from 'assets/images/window.png';
import TeamImg from 'assets/images/Bind.jpg';
import BindLogo from 'assets/images/LOGO초안.svg';
import both from 'assets/images/YBSJ.png';
import Button from 'components/Common/Button';
import { FaGooglePlay } from 'react-icons/fa';
import { TiVendorMicrosoft } from 'react-icons/ti';
import dodamLogoWhite from 'assets/icon/dodamLogoWhite.png';

const ServiceIntroduce = ({ history }) => {
  const smallCustomStyle = {
    width: '8.5rem',
    height: '3rem',
    fontSize: '14px',
    margin: '0 5px 0 0',
  };

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
                zIndex: '-2',
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
                    불편한 종이 장부는 이제 그만.
                    <br />
                    위치신청, 외출/외박과 급식까지 다양한 정보를 한 눈에 볼 수
                    있어요.
                  </p>
                  <div className="ServiceIntroduce-function-card-slide-download">
                    {/* 링크 가는거 나중에 해주기^^ */}
                    <a
                      href="https://play.google.com/store/apps/details?id=kr.hs.dgsw.smartschool.dodamdodam"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        appearance="primary"
                        edgeType="round"
                        customStyle={smallCustomStyle}
                      >
                        <FaGooglePlay className="ServiceIntroduce-function-card-slide-download-icon" />
                        <span>PlayStore</span>
                      </Button>
                    </a>
                    <div className="ServiceIntroduce-function-card-slide-download-Release">
                      <span className="ServiceIntroduce-function-card-slide-download-Release-version">
                        Version: 1.0.0
                      </span>
                      <span
                        className="ServiceIntroduce-function-card-slide-download-Release-contents"
                        onClick={() => {
                          history.push('/dodam_and_rel_s');
                        }}
                      >
                        Release Notes
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ServiceIntroduce-function-card">
                <b className="ServiceIntroduce-function-card-Ctitle">
                  도담도담 모바일 교사용
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
                    학생들을 직접 찾아다니는 불편함 없이,
                    <br />
                    언제 어디서나 위치, 외출/외박 신청 정보를 확인할 수 있어요.
                  </p>
                  <div className="ServiceIntroduce-function-card-slide-download">
                    <a
                      href="https://play.google.com/store/apps/details?id=kr.hs.dgsw.smartschool.dodamdodam_teacher"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        appearance="primary"
                        edgeType="round"
                        customStyle={smallCustomStyle}
                      >
                        <FaGooglePlay className="ServiceIntroduce-function-card-slide-download-icon" />
                        <span>PlayStore</span>
                      </Button>
                    </a>
                    <div className="ServiceIntroduce-function-card-slide-download-Release">
                      <span className="ServiceIntroduce-function-card-slide-download-Release-version">
                        Version: 1.0.0
                      </span>
                      <span
                        className="ServiceIntroduce-function-card-slide-download-Release-contents"
                        onClick={() => {
                          history.push('/dodam_and_rel_t');
                        }}
                      >
                        Release Notes
                      </span>
                    </div>
                  </div>
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
                    더욱 더 유익하게 해줄 기능으로
                    <br />
                    기상송, 분실물, 상담신청, 상벌점 조회, 일정 조회 기능이
                    있어요.
                  </p>
                  <div className="ServiceIntroduce-function-card-slide-download">
                    <a
                      href="http://dodam.b1nd.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        appearance="primary"
                        edgeType="round"
                        customStyle={smallCustomStyle}
                      >
                        <img
                          src={dodamLogoWhite}
                          className="ServiceIntroduce-function-card-slide-download-Image"
                          alt="logo"
                        />
                      </Button>
                    </a>
                    <div className="ServiceIntroduce-function-card-slide-download-Release">
                      <span className="ServiceIntroduce-function-card-slide-download-Release-version">
                        Version: 1.0.0
                      </span>
                      <span
                        className="ServiceIntroduce-function-card-slide-download-Release-contents"
                        onClick={() => {
                          history.push('/dodam_web_rel_s');
                        }}
                      >
                        Release Notes
                      </span>
                    </div>
                  </div>
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
                    학년마다 다른 일정, 관리하기 힘드셨죠?
                    <br />
                    웹에서는 물론 윈도우에서도 다가오는 일정을 한 눈에 모아볼 수
                    있어요.
                  </p>
                  <div className="ServiceIntroduce-function-card-slide-download">
                    {/* <Button
                      appearance="primary"
                      edgeType="round"
                      customStyle={smallCustomStyle}
                    >
                      <TiVendorMicrosoft
                        style={{ fontSize: '1.2rem' }}
                        className="ServiceIntroduce-function-card-slide-download-icon"
                      />
                      <span>Download</span>
                    </Button> */}
                    <div className="ServiceIntroduce-function-card-slide-download-Release">
                      <span className="ServiceIntroduce-function-card-slide-download-Release-version">
                        Version: 1.0.0
                      </span>
                      <span
                        className="ServiceIntroduce-function-card-slide-download-Release-contents"
                        onClick={() => {
                          history.push('/dodam_win_rel');
                        }}
                      >
                        Release Notes
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(ServiceIntroduce);
