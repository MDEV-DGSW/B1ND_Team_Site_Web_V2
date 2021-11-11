import React, { useEffect } from 'react';
import Main from 'assets/images/mockup/Main.png';
import Second from 'assets/images/mockup/AllService.png';
import './IntroPage.scss';
import FadeIn from 'react-fade-in';
import { useDencrypt } from 'use-dencrypt-effect';
const options = {
  chars: ['A', 'a', 'B', 'b'],
};
const values = ['바인드', 'B1ND'];
const IntroPage = ({ inViewEle, refEl }) => {
  const { result, dencrypt } = useDencrypt(options);

  // useEffect(() => {
  //   let i = 0;

  //   const action = setInterval(() => {
  //     dencrypt(values[i]);

  //     i = i === values.length - 1 ? 0 : i + 1;
  //   }, 2000);

  //   return () => clearInterval(action);
  // });
  return (
    <>
      {inViewEle ? (
        <>
          <FadeIn transitionDuration={400} delay={400}>
            <div className="IntroPage" ref={refEl}>
              <div className="IntroPage-textWrap">
                <span style={{ fontSize: "24px" }}>학교와 학생을 잇다, 바인드</span>
                <div className="IntroPage-textWrap-mainTitle">
                  <div className="IntroPage-textWrap-mainTitle-intro">
                    새로운 연결,<br />
                    더 나은 학교<br />
                    <span className="IntroPage-textWrap-mainTitle-intro-primary">바인드</span>
                  </div>
                  <h3 className="IntroPage-textWrap-middleTitle">
                    "Connect Everything"
                  </h3>
                  <p className="IntroPage-textWrap-serviceSubTitle">
                    바인드팀은<br />
                    학생들의 곁에서<br />
                    더 나은 학교생활을 지원하기위해<br />
                    끊임없이 노력합니다<br /><br />

                    바인드팀은 모든 학교 학생,<br />
                    선생님과 함께 나아갑니다
                  </p>
                </div>
              </div>
              {inViewEle ? (
                <div className="IntroPage-imgWrap">
                  <img
                    className="IntroPage-imgWrap-img"
                    src={Second}
                    alt=""
                    style={{ width: '100%' }}
                  />
                </div>
              ) : null}
            </div>
          </FadeIn>
        </>
      ) : (
        <div ref={refEl}>as</div>
      )}
    </>
  );
};

export default IntroPage;
