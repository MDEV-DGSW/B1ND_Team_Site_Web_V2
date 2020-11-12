import React from 'react';
import './Mobile1.scss';
import { IoMdArrowDropleft } from 'react-icons/io';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';
import BubbleLogin from 'assets/images/BallonSpeech/Bubble_Login.png';
import BubbleMain from 'assets/images/BallonSpeech/Bubble_Main.png';
import MobileHome from 'assets/images/mockup/Mobile_Home.png';
import MobileLogin from 'assets/images/mockup/Mobile_Login.png';

const Mobile1 = () => {
  const [ref, inView] = useInView({
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
              <div>학생과 학교, 그 이상을 연결하는</div>
              <div>도담도담</div>
              <div className ="Mobile1-Title-SubTitle">학교 생활을 더 쉽게, 빠르게</div>
            </div>

            <div className ="Mobile1-Middle">
              <div className ="Mobile1-Middle-LeftSection">
                <div className ="Mobile1-Middle-LeftSection-Title">
                  <img src={BubbleMain} alt ="main" />

                  <img src ={MobileHome} className ="Mobile1-Middle-LeftSection-Title-Image" alt ="main" />
                </div>

                <div className ="Mobile1-Middle-LeftSection-Title">
                  <img src={BubbleLogin} alt ="login" />
                  <img src={MobileLogin} className ="Mobile1-Middle-LeftSection-Title-Image" alt ="login" />
                </div>
              </div>

              <div className ="Mobile1-Middle-RightSection">
                <div className ="Mobile1-Middle-RightSection-SpeechBubble">
                  <IoMdArrowDropleft className ="Mobile1-Middle-RightSection-SpeechBubble-Arrow" />
                  <div className ="Mobile1-Middle-RightSection-SpeechBubble-Box">
                    <div className ="Mobile1-Middle-RightSection-SpeechBubble-Box-Contents">
                      <div>언제 어디서든</div>
                      <div>도담도담을 사용하세요</div>
                    </div>
                  </div>
                </div>

                <div className ="Mobile1-Middle-RightSection-Contents">
                  <div>도담도담은</div>
                  <div>모두가</div>
                  <div>시간과 장소의</div>
                  <div>제한을 받지 않고</div>
                  <div>사용할 수 있습니다.</div>
                  <br />

                  <div>누구나, 언제나, 어디서나</div>
                  <div>도담도담</div>
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