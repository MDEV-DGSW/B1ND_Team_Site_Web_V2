import React from 'react';
import './ServiceIntroduce.scss';
import Test from 'assets/images/Test.jpg';
import TeamImg from 'assets/images/Bind.jpg';
import BindLogo from 'assets/images/bind_logo.svg';
import both from 'assets/images/최석준선배.png';
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
          <div className="ServiceIntroduce-function-card">
            <b className="ServiceIntroduce-function-card-Ctitle">기능1</b>
            <div className="ServiceIntroduce-function-card-slide">
              <div
                className="ServiceIntroduce-function-card-slide-imgTemplate"
                // style={{ width: '100%', height: '468px' }}
              >
                <img
                  src={Test}
                  className="ServiceIntroduce-function-card-slide-imgTemplate-img"
                  // style={{ width: '100%', height: '468px' }}
                  alt={Test}
                />
              </div>
              <p className="ServiceIntroduce-function-card-slide-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                et, dolor laborum dolores laudantium nam eius tempora.
                Architecto voluptatem vel consequuntur perferendis excepturi!
                Impedit optio itaque sit amet nulla odio? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Ullam et, dolor laborum
                dolores laudantium nam eius tempora. Architecto voluptatem vel
                consequuntur perferendis excepturi! Impedit optio itaque sit
                amet nulla odio?
              </p>
            </div>
          </div>
          <div className="ServiceIntroduce-function-card">
            <b className="ServiceIntroduce-function-card-Ctitle">기능1</b>
            <div className="ServiceIntroduce-function-card-slide">
              <div
                className="ServiceIntroduce-function-card-slide-imgTemplate"
                // style={{ width: '100%', height: '468px' }}
              >
                <img
                  src={TeamImg}
                  className="ServiceIntroduce-function-card-slide-imgTemplate-img"
                  // style={{ width: '100%', height: '468px' }}
                  alt={Test}
                />
              </div>
              <p className="ServiceIntroduce-function-card-slide-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                et, dolor laborum dolores laudantium nam eius tempora.
                Architecto voluptatem vel consequuntur perferendis excepturi!
                Impedit optio itaque sit amet nulla odio?
              </p>
            </div>
          </div>
          <div className="ServiceIntroduce-function-card">
            <b className="ServiceIntroduce-function-card-Ctitle">기능1</b>
            <div className="ServiceIntroduce-function-card-slide">
              <div
                className="ServiceIntroduce-function-card-slide-imgTemplate"
                // style={{ width: '100%', height: '468px' }}
              >
                <img
                  src={Test}
                  className="ServiceIntroduce-function-card-slide-imgTemplate-img"
                  // style={{ width: '100%', height: '468px' }}
                  alt={Test}
                />
              </div>
              <p className="ServiceIntroduce-function-card-slide-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                et, dolor laborum dolores laudantium nam eius tempora.
                Architecto voluptatem vel consequuntur perferendis excepturi!
                Impedit optio itaque sit amet nulla odio?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceIntroduce;
