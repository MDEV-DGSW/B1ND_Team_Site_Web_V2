import React from "react";
import "./MoramFunction.scss";
import MoramMain from "assets/images/mockup/MoramMobileMain.png";
import MoramProfile from "assets/images/mockup/MoramMobileProfile.png";
import MoramApplication from "assets/images/mockup/MoramMobileApplication.png";
import MoramPostView from "assets/images/mockup/MoramMobilePostview.png";

const MoramFunction = () => {
  const imageArray = [
    { intro: "프로필을 설정해서", image: MoramProfile },
    { intro: "현재 가장 인기있는 모집글 중에서", image: MoramMain },
    { intro: "마음에 드는 모집글을 선택하여", image: MoramPostView },
    { intro: "간편하게 지원해보세요!", image: MoramApplication },
  ];
  return (
    <div className="MoramFunction">
      <div className="MoramFunction-ImgWrap">
        {imageArray.map((img) => {
          return (
            <div className="MoramFunction-ImgWrap-Content">
              <div className="MoramFunction-ImgWrap-Content-Intro">{img.intro}</div>
              <img src={img.image} alt={img.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoramFunction;
