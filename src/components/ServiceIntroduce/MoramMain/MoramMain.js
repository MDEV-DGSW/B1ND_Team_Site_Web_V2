import React from "react";
import FadeIn from "react-fade-in";
import { useInView } from "react-intersection-observer";
import "./MoramMain.scss";
import MoramMainIMG from "assets/images/mockup/MoramMain.png";

const MoramMain = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0.1,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });
  return (
    <>
      {inView && (
        <>
          <FadeIn transitionDuration={400} delay={400}>
            <div className="MoramMain" ref={ref}>
              <div className="MoramMain-ContentWrap">
                <div>
                  <div className="MoramMain-ContentWrap-MainTitle">이제는 팀도 간편하게!</div>
                </div>
                <div className="MoramMain-ContentWrap-Intro">
                  지금껏 교내에서 진행하는 프로젝트에서
                  <br />
                  필요한 팀원을 구하거나, 팀을 구하기 힘들었다면
                  <br />
                  이제는 <strong>모람모람</strong>을 이용해보세요!
                </div>
              </div>
              <div className="MoramMain-ImageWrap">
                <img src={MoramMainIMG} alt={MoramMainIMG} />
              </div>
            </div>
          </FadeIn>
        </>
      )}
    </>
  );
};

export default MoramMain;
