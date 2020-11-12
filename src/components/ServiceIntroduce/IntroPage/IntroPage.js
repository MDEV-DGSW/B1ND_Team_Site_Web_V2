import React, { useEffect } from 'react';
import Main from 'assets/images/mockup/Main.png';
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
  console.log(inViewEle);
  return (
    <>
      {inViewEle ? (
        <>
          <FadeIn transitionDuration={400} delay={400}>
            <div className="IntroPage" ref={refEl}>
              <div className="IntroPage-textWrap">
                <div className="IntroPage-textWrap-textSection">
                  <div className="IntroPage-textWrap-subTitle">
                    학교와 학생을 잇다, 바인드
                  </div>
                  <div className="IntroPage-textWrap-mainTitle">
                    <div className="IntroPage-textWrap-mainTitle-intro">
                      새로운 연결,
                    </div>
                    <div>더 나은 학교</div>
                    <div className="primary">바인드</div>
                  </div>
                  <div className="IntroPage-textWrap-middleTitle">
                    웹팀이 짱이야 최고최고
                  </div>
                  <div className="IntroPage-textWrap-serviceSubTitle">
                    간단한 소개와 텍스트들과 내용들 서비스에 대한 어쩌고
                    저쩌고어ㅉ 간단한 소개와 텍스트들과 내용들 서비스에 대한
                    어쩌고 저쩌고어ㅉ
                  </div>
                </div>
              </div>
              {inViewEle ? (
                <div className="IntroPage-imgWrap">
                  <img
                    className="IntroPage-imgWrap-img"
                    src={Main}
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
