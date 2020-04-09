import React from 'react';
import './ServiceIntroduce.scss';
import Test from 'assets/images/Test.jpg';

const ServiceIntroduce = () => {
  return (
    <>
      <div className="ServiceIntroduce">
        <div className="ServiceIntroduce-wrap">
          <div
            className="ServiceIntroduce-wrap-list"
            style={{ height: '768px' }}
          >
            <div className="ServiceIntroduce-wrap-list-thumb">
              <img
                src={Test}
                alt={Test}
                style={{ width: '100%', height: '768px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceIntroduce;
