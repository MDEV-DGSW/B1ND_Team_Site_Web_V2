import React from 'react';
import './ServiceIntroduce.scss';
import Test from 'assets/images/Test.jpg';
import TeamImg from 'assets/images/Bind.jpg';
import BindLogo from 'assets/images/LOGO초안.svg';
import both from 'assets/images/석준이형연기중.png';

const ServiceCard = ({ title, imageSource, infoSub }) => {
  return (
    <div className="ServiceIntroduce-function-card">
      <b className="ServiceIntroduce-function-card-Ctitle">{title}</b>
      <div className="ServiceIntroduce-function-card-slide">
        <div
          className="ServiceIntroduce-function-card-slide-imgTemplate"
          // style={{ width: '100%', height: '468px' }}
        >
          <img
            src={imageSource}
            className="ServiceIntroduce-function-card-slide-imgTemplate-img"
            // style={{ width: '100%', height: '468px' }}
            alt={imageSource}
          />
        </div>
        <p className="ServiceIntroduce-function-card-slide-info">{infoSub}</p>
      </div>
    </div>
  );
};

const ServiceIntroduce = () => {
  // window.onscroll = function () {
  //   let currentScrollPos = window.pageYOffset;
  //   if (currentScrollPos > ) {
  //     document.getElementById('box').style.position = 'fixed';
  //     document.getElementById('box').style.top = '100px';
  //   } else {
  //     document.getElementById('box').style.position = 'relative';
  //   }
  // };

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
                // padding: '20%',
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
                <span className="ServiceIntroduce-wrap-textBox-logoText">
                  {/* Bind */}
                </span>
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
              <div className="ServiceIntroduce-function-box" id="box">
                <ul className="ServiceIntroduce-function-box-wrap">
                  <li className="ServiceIntroduce-function-box-wrap-link">
                    생활을 편리하게
                  </li>
                  <li className="ServiceIntroduce-function-box-wrap-link">
                    생활을 풍부하게
                  </li>
                  {/* <li className="ServiceIntroduce-function-box-wrap-link">
                학교를 편리하게
              </li>
              <li className="ServiceIntroduce-function-box-wrap-link">
                생활을 풍부하게
              </li> */}
                </ul>
              </div>
              <ServiceCard
                title="1번"
                imageSource={Test}
                infoSub="이곳에 내용이 들어가는 곳입니다."
              />
              <ServiceCard
                title="2번"
                imageSource={both}
                infoSub=" 이곳에 내용이 들어가는 곳입니다."
              />
              <ServiceCard
                title="3번"
                imageSource={BindLogo}
                infoSub=" 이곳에 내용이 들어가는 곳입니다."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceIntroduce;
