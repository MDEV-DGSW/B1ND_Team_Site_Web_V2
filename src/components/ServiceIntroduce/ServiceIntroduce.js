import React from 'react';
import './ServiceIntroduce.scss';
import Test from 'assets/images/Test.jpg';
import TeamImg from 'assets/images/Bind.jpg';
import BindLogo from 'assets/images/bind_logo.svg';
import both from 'assets/images/최석준선배.png';

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
                  style={{ width: '40px', height: '40px' }}
                />
                <span className="ServiceIntroduce-wrap-textBox-logoText">
                  {/* Bind */}
                </span>
              </div>
              <div className="ServiceIntroduce-wrap-textBox-text">
                학생과 학교, 그 이상을 연결하는 <br />{' '}
                <b className="ServiceIntroduce-wrap-textBox-text-dodamdodam">
                  도담도담
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className="ServiceIntroduce-function">
          <div className="ServiceIntroduce-function-title">기능1</div>

          <ServiceCard
            title="1번"
            imageSource={Test}
            infoSub=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            sunt minus! Expedita provident suscipit itaque velit facilis. Nesciunt
            quod omnis aspernatur rerum soluta, vel quaerat ducimus perspiciatis
            nemo fuga? Cumque!  "
          />

          <ServiceCard
            title="2번"
            imageSource={both}
            infoSub=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            sunt minus! Expedita provident suscipit itaque velit facilis. Nesciunt
            quod omnis aspernatur rerum soluta, vel quaerat ducimus perspiciatis
            nemo fuga? Cumque!  "
          />

          <ServiceCard
            title="3번"
            imageSource={BindLogo}
            infoSub=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            sunt minus! Expedita provident suscipit itaque velit facilis. Nesciunt
            quod omnis aspernatur rerum soluta, vel quaerat ducimus perspiciatis
            nemo fuga? Cumque!  "
          />
        </div>
      </div>
    </>
  );
};

export default ServiceIntroduce;
