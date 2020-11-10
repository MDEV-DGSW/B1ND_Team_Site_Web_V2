import React from 'react';
import './Mobile2.scss';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';

const Mobile2 = () => {
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
        <div ref={ref} className ="Mobile2">
          <div className ="Mobile2-LeftSection">
            <div className ="Mobile2-LeftSection-Title">
              <div>모바일에서도 간편하게 글을 작성해서</div>
              <div>분실물을 빠르게 찾을 수 있어요.</div>
            </div>

            <div className ="Mobile2-LeftSection-Board">
              <div className="Mobile2-LeftSection-Board-ItemWrapper">
                <div className ="Mobile2-LeftSection-Board-ItemWrapper-Profile"></div>
                <div className ="Mobile2-LeftSection-Board-ItemWrapper-ContentsWrapper">
                  <div className ="Mobile2-LeftSection-Board-ItemWrapper-ContentsWrapper-Contents">
                    <div>분실물을 찾습니다.</div>
                    <div>서상렬</div>
                    <div>2020 11-05 17:09</div>
                  </div>
                </div>
              </div>

              <div className="Mobile2-LeftSection-Board-ItemWrapper">
                <div className ="Mobile2-LeftSection-Board-ItemWrapper-Profile"></div>
                <div className ="Mobile2-LeftSection-Board-ItemWrapper-ContentsWrapper">
                  <div className ="Mobile2-LeftSection-Board-ItemWrapper-ContentsWrapper-Contents">
                    <div>분실물을 찾습니다.</div>
                    <div>서상렬</div>
                    <div>2020 11-05 17:09</div>
                  </div>
                </div>
              </div>

              <div className="Mobile2-LeftSection-Board-ItemWrapper">
                <div className ="Mobile2-LeftSection-Board-ItemWrapper-Profile"></div>
                <div className ="Mobile2-LeftSection-Board-ItemWrapper-ContentsWrapper">
                  <div className ="Mobile2-LeftSection-Board-ItemWrapper-ContentsWrapper-Contents">
                    <div>분실물을 찾습니다.</div>
                    <div>서상렬</div>
                    <div>2020 11-05 17:09</div>
                  </div>
                </div>
              </div>
            </div>

              <div className ="Mobile2-LeftSection-Contents">
                <div>학생들의 곁에는 도담도담</div>
                <div>내용들 서비스에 대한 어쩌고 저쩌고</div>
                <div>간단한 소개와 텍스트들과 내용들 어쩌고 저쩌고</div>

                <br />

                <div>내용들 서비스에 대한 어쩌고 저쩌고</div>
                <div>간단한 소개와 텍스트들과 내용들 어쩌고 저쩌고</div>
              </div>
            </div>

            <div className ="Mobile2-RightSection">
              <div className ="Mobile2-RightSection-Wrapper">
                <div className ="Mobile2-RightSection-Wrapper-Item">
                  <div className ="Mobile2-RightSection-Wrapper-Item-Image"></div>
                  <div className ="Mobile2-RightSection-Wrapper-Item-Name">외출, 외박</div>
                </div>

                <div className ="Mobile2-RightSection-Wrapper-Item">
                  <div className ="Mobile2-RightSection-Wrapper-Item-Image"></div>
                  <div className ="Mobile2-RightSection-Wrapper-Item-Name">기상송</div>
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