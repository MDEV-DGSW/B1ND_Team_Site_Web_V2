import React from 'react';
import './Mobile1.scss';
import { IoMdArrowDropleft } from 'react-icons/io';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';

const Mobile1 = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0.1,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });

  return (
    <div style ={{ backgroundColor: '#0067bc' }}>
      {
        inView &&
        <FadeIn transitionDuration={400} delay={400}>
          <div ref={ref} className ="Mobile1">
            <div className ="Mobile1-Title">
              <div>도담도담 모바일 자랑하는 텍스트</div>
              <div>뭐라고 쓸지 생각이 안난다</div>
            </div>

            <div className ="Mobile1-Middle">
              <div className ="Mobile1-Middle-LeftSection">
                <div className ="Mobile1-Middle-LeftSection-Title">
                  <div className ="Mobile1-Middle-LeftSection-Title-Name">
                    <div>위치 신청</div>
                  </div>

                  <div className ="Mobile1-Middle-LeftSection-Title-Image"></div>
                </div>

                <div className ="Mobile1-Middle-LeftSection-Title">
                  <div className ="Mobile1-Middle-LeftSection-Title-Name">
                    <div>분실물</div>
                  </div>

                  <div className ="Mobile1-Middle-LeftSection-Title-Image"></div>
                </div>
              </div>

              <div className ="Mobile1-Middle-RightSection">
                <div className ="Mobile1-Middle-RightSection-Title">학교 생활을 더 쉽게 & 빠르게</div>

                <div className ="Mobile1-Middle-RightSection-SpeechBubble">
                  <IoMdArrowDropleft className ="Mobile1-Middle-RightSection-SpeechBubble-Arrow" />
                  <div className ="Mobile1-Middle-RightSection-SpeechBubble-Box"></div>
                </div>

                <div className ="Mobile1-Middle-RightSection-Contents">
                  <div>학생들의 곁에는 도담도담</div>
                  <div>내용들 서비스에 대한 어쩌고 저쩌고</div>
                  <div>간단한 소개와 텍스트들과 내용들 어쩌고 저쩌고</div>
                  <br />

                  <div>내용들 서비스에 대한 어쩌고 저쩌고</div>
                  <div>간단한 소개와 텍스트들과 내용들 어쩌고 저쩌고</div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      }
    </div>
  )
};

export default Mobile1;