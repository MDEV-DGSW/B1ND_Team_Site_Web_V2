import React from "react";
import "./DodamDetailFunction.scss";
import DodamMeal from "assets/images/mockup/DodamMeal.png";
import DodamPoints from "assets/images/mockup/DodamPoints.png";
import DodamBus from "assets/images/mockup/DodamBus.png";
import DodamPlan from "assets/images/mockup/DodamPlan.png";
import { useInView } from "react-intersection-observer";
import FadeIn from "react-fade-in";

const DodamDetailFunction = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0.1,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });
  return (
    <>
      <div className="DodamDetailFunctionBackground">
        {inView ? (
          <FadeIn transitionDuration={400} delay={200}>
            <div className="DodamDetailFunction" ref={ref}>
              <div className="DodamDetailFunction-ImgWrap">
                <img src={DodamBus} alt={DodamBus} />
                <img src={DodamMeal} alt={DodamMeal} />
                <img src={DodamPoints} alt={DodamPoints} />
                <img src={DodamPlan} alt={DodamPlan} />
              </div>
            </div>
          </FadeIn>
        ) : null}
      </div>
    </>
  );
};

export default DodamDetailFunction;
