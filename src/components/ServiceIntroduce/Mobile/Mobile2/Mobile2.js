import React from 'react';
import './Mobile2.scss';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';
import BubbleLost from 'assets/images/BallonSpeech/Bubble_LostNFound.png';
import BubbleOffBase from 'assets/images/BallonSpeech/Bubble_OffBase.png';
import MobileLostFound from 'assets/images/mockup/Mobile_LostFound.png';
import MobileOffbase from 'assets/images/mockup/Mobile_OffBase.png';
import { IoMdArrowDropright } from 'react-icons/io';

const BoardItem = ({ name }) => {
  return (
    <div className="Mobile2-LeftSection-Board-ItemWrapper">
      <div className="Mobile2-LeftSection-Board-ItemWrapper-Profile"></div>
      <div className="Mobile2-LeftSection-Board-ItemWrapper-ContentsWrapper">
        <div className="Mobile2-LeftSection-Board-ItemWrapper-ContentsWrapper-Contents">
          <div>분실물을 찾습니다.</div>
          <div>{name}</div>
          <div>2020 11-05 17:09분</div>
        </div>
      </div>
    </div>
  );
};

const Mobile2 = () => {
  // const names = ['권순관', '권용빈', '김혜선'];
  const [ref, inView] = useInView({
    threshold: 0.1,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });

  return (
    <div style={{ backgroundColor: '#0067bc' }}>
      {
        inView &&
        <FadeIn transitionDuration={400} delay={400}>
          <div ref={ref} className="Mobile2">
            <div className="Mobile2-Wrapper">
              <div className="Mobile2-LeftSection">
                <div className="Mobile2-LeftSection-Title">
                  모바일에서도 간편하게 글을 작성해서<br />
                  분실물을 빠르게 찾을 수 있어요.
                </div>

                {/* <div className ="Mobile2-LeftSection-Board">
                {
                  names.map((name, index) => {
                    return <BoardItem key={index} name ={name} />
                  })
                }
              </div> */}
                <div className="Mobile2__Bubble">
                  <div className="Mobile2__Bubble-backGround">
                    <div className="Mobile2__Bubble-backGround-box">
                      시청각실에서 열쇠를<br />
                      잃어버렸어요ㅠㅠ
                    </div>
                    <IoMdArrowDropright className="Mobile2__Bubble-backGround-box-arrow" />
                  </div>
                  <div className="Mobile2__Bubble-backGround">
                    <div className="Mobile2__Bubble-backGround-box">
                      2학년 1반 권순관 학생이<br />
                      보관 중입니다 !
                    </div>
                    <IoMdArrowDropright className="Mobile2__Bubble-backGround-box-arrow" />
                  </div>
                </div>

                <div className="Mobile2-LeftSection-Contents">
                  잃어버린 물건이 있나요?<br />
                  도담도담에서 분실물을 확인하세요<br />
                  보다 쉽게 찾을 수 있습니다
                </div>
              </div>

              <div className="Mobile2-RightSection">
                <div className="Mobile2-RightSection-Wrapper">
                  <div className="Mobile2-RightSection-Wrapper-Item">
                    <img src={MobileLostFound} alt="lostfound" className="Mobile2-RightSection-Wrapper-Item-Image" />
                    <img src={BubbleLost} alt="lostfound" className="Mobile2-RightSection-Wrapper-Item-Bubble" />
                  </div>

                  <div className="Mobile2-RightSection-Wrapper-Item">
                    <img src={MobileOffbase} alt="offbase" className="Mobile2-RightSection-Wrapper-Item-Image" />
                    <img src={BubbleOffBase} alt="offbase" className="Mobile2-RightSection-Wrapper-Item-Bubble" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      }
    </div>
  );
};

export default Mobile2;