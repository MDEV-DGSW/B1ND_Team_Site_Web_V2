import React, { useEffect } from 'react';
import iOS_Set from 'assets/images/iOS_Set.png';
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
                      <span style={{ color: '#0066ba' }}>
                        {result ? result : '도담도담'}
                      </span>{' '}
                      서비스 소개
                    </div>
                    <div>내용 들어감</div>
                    <div>도담도담, 마인</div>
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
                  <FadeIn transitionDuration={400} delay={400}>
                    <img
                      className="IntroPage-imgWrap-img"
                      src={iOS_Set}
                      alt=""
                      style={{ width: '100%', height: '850px' }}
                    />
                  </FadeIn>
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
