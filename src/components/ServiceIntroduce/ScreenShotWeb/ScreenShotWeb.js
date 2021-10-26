import React from 'react';
import './ScreenShotWeb.scss';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';
import MobileFirstPage from 'assets/images/mockup/MobileFirstPage.png';
import Web_Cap_LostFound from 'assets/images/mockup/Web_Cap_LostFound.png';
import Web_Cap_Main from 'assets/images/mockup/Web_Cap_Main.png';
import Web_Cap_MyInfo_Dark from 'assets/images/mockup/Web_Cap_MyInfo_Dark.png';
import Web_Cap_Schedule_Dark from 'assets/images/mockup/Web_Cap_Schedule_Dark.png';
import Web_Cap_WakeSong from 'assets/images/mockup/Web_Cap_WakeSong.png';
import DodamMain from 'assets/images/mockup/dodamMain1.png';
const ScreenShotWeb = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0.1,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });

  return (
    <>
      <div className="ScreenShotWeb">
        <div className="ScreenShotWeb__grid">
          <img src={DodamMain} alt={DodamMain} />
        </div>
        <div className="ScreenShotWeb__grid">
        </div>
        <div className="ScreenShotWeb__grid">
          <div className="ScreenShotWeb-rightWrap-textWrap-topTitle-wrapper">
            <div>학생들을 위한</div>
            <div>학생들이 만든</div>
            <div>스마트 스쿨 플랫폼</div>
            <div className="ScreenShotWeb-rightWrap-textWrap-topTitle-wrapper-primary">
              도담도담
            </div>
          </div>
        </div>
        <div className="ScreenShotWeb__grid">
          <img
            src={Web_Cap_MyInfo_Dark}
            alt={Web_Cap_MyInfo_Dark}
          />
        </div>
        <div className="ScreenShotWeb__grid">
          <div className="ScreenShotWeb-rightWrap-textWrap-bottomTitle-wrapper">
            <div>학생들의 곁에는 항상 도담도담</div>
            <div>
              {' '}
            </div>
            <div>도담도담은,</div>
            <div>학생과 선생님이 조금 더 편리한</div>
            <div>학교생활을 할 수 있도록</div>
            <div>바인드팀이 개발한</div>
            <div>학생생활 관리 시스템입니다.</div>
          </div>
        </div>
        <div className="ScreenShotWeb__grid"></div>
        <div className="ScreenShotWeb__grid">
          <img src={Web_Cap_LostFound} alt={Web_Cap_LostFound} />
        </div>
        <div className="ScreenShotWeb__grid">
          <img
            src={Web_Cap_Schedule_Dark}
            alt={Web_Cap_Schedule_Dark}
          />
        </div>
        <div className="ScreenShotWeb__grid">
          <img src={Web_Cap_WakeSong} alt={Web_Cap_WakeSong} />
        </div>
      </div>
      {
        inView ? (
          <>
            <FadeIn transitionDuration={400} delay={400}>
              <div className="ScreenShotWeb-underWrap">
                <div className="ScreenShotWeb-underWrap-mobileTextWrap">
                  <div>언제든 내 손 안에,</div>
                  <div className="ScreenShotWeb-underWrap-mobileTextWrap-mobileText primary">
                    도담도담 모바일
                  </div>
                </div>
                <div className="ScreenShotWeb-underWrap-imgWrap">
                  <img src={MobileFirstPage} alt={MobileFirstPage} />
                </div>
              </div>
            </FadeIn>
          </>
        ) : null
      }
    </>
  )

  // return (
  //   <>
  //     <div ref={ref}>
  //       <div className="ScreenShotWeb">
  //         <div className="ScreenShotWeb-leftWrap">
  //           {inView ? (
  //             <>
  //               <FadeIn transitionDuration={400} delay={120}>
  //                 <div className="ScreenShotWeb-box">
  //                   <img src={Web_Cap_Main} alt={Web_Cap_Main} />
  //                 </div>
  //                 <div className="ScreenShotWeb-box">
  //                   <img
  //                     src={Web_Cap_Schedule_Dark}
  //                     alt={Web_Cap_Schedule_Dark}
  //                   />
  //                 </div>
  //                 <div className="ScreenShotWeb-box">
  //                   <img src={Web_Cap_WakeSong} alt={Web_Cap_WakeSong} />
  //                 </div>
  //               </FadeIn>
  //             </>
  //           ) : null}
  //         </div>
  //         <div className="ScreenShotWeb-rightWrap">
  //           {inView ? (
  //             <>
  //               {/* <FadeIn transitionDuration={400} delay={120}> */}
  //               <div className="ScreenShotWeb-rightWrap-textWrap">
  //                 <div className="ScreenShotWeb-rightWrap-textWrap-topTitle">
  //                   <div className="ScreenShotWeb-rightWrap-textWrap-topTitle-wrapper">
  //                     <div>학생들을 위한</div>
  //                     <div>학생들이 만든</div>
  //                     <div>스마트 스쿨 플랫폼</div>
  //                     <div className="ScreenShotWeb-rightWrap-textWrap-topTitle-wrapper-primary">도담도담</div>
  //                   </div>
  //                 </div>

  //                 <div className="ScreenShotWeb-rightWrap-textWrap-bottomTitle">
  //                   <div className="ScreenShotWeb-rightWrap-textWrap-bottomTitle-wrapper">
  //                     <div>학생들의 곁에는 항상 도담도담</div>
  //                     <div>
  //                       <br />
  //                     </div>
  //                     <div>도담도담은,</div>
  //                     <div>학생과 선생님이 조금 더 편리한</div>
  //                     <div>학교생활을 할 수 있도록</div>
  //                     <div>바인드팀이 개발한</div>
  //                     <div>학생생활 관리 시스템입니다.</div>
  //                   </div>
  //                 </div>
  //               </div>
  //               {/* </FadeIn> */}
  //             </>
  //           ) : null}

  //           {inView ? (
  //             <>
  //               <FadeIn transitionDuration={400} delay={400}>
  //                 <div className="ScreenShotWeb-rightWrap-imgWrap">
  //                   <div className="ScreenShotWeb-box">
  //                     <img
  //                       src={Web_Cap_MyInfo_Dark}
  //                       alt={Web_Cap_MyInfo_Dark}
  //                     />
  //                   </div>
  //                   <div className="ScreenShotWeb-box">
  //                     <img src={Web_Cap_LostFound} alt={Web_Cap_LostFound} />
  //                   </div>
  //                 </div>
  //               </FadeIn>
  //             </>
  //           ) : null}
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
  // };
}

export default ScreenShotWeb;
