import React from 'react';
import './ServiceIntroduce.scss';
// import Test from 'assets/images/Test.jpg';
import mobile1 from 'assets/images/mobile1.png';
import mobile2 from 'assets/images/mobile2.png';
import web1 from 'assets/images/web1.png';
import web2 from 'assets/images/web2.png';
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
              
              <ServiceCard title="1번" imageSource={mobile1} infoSub="모바일" />
              <ServiceCard
                title="2번"
                imageSource={mobile2}
                infoSub=" 모바일"
              />
              <ServiceCard title="3번" imageSource={web1} infoSub=" 웹 부분" />
              <ServiceCard
                title="4번"
                imageSource={web2}
                infoSub=" 더 들어가야하는데 어떤씩으로 정렬 해야 할까요??"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceIntroduce;