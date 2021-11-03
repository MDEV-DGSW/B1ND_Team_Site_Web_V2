import React from "react";
import "./MoramFunction.scss";
import MoramMain from "assets/images/mockup/MoramMobileMain.png";
import MoramProfile from "assets/images/mockup/MoramMobileProfile.png";
import MoramApplication from "assets/images/mockup/MoramMobileApplication.png";
import MoramPostView from "assets/images/mockup/MoramMobilePostview.png";

const MoramFunction = () => {
  const imageArray = [
    { intro: "프로필을 작성한뒤", image: MoramProfile },
    { intro: `현재 가장 인기있는`, intro2: "모집글 중에서", image: MoramMain },
    { intro: "마음에 드는", intro2: "모집글을 선택하여", image: MoramPostView },
    { intro: "간편하게 지원해보세요!", image: MoramApplication },
  ];
  return (
    <div className="MoramFunction">
      <div className="MoramFunction-ImgWrap">
        <div className="MoramFunction-ImgWrap-Content">
          <div className="MoramFunction-ImgWrap-Content-Intro">{imageArray[0].intro}</div>
          <img src={imageArray[0].image} alt={imageArray[0].image} />
        </div>
        <div className="MoramFunction-ImgWrap-Content">
          <div className="MoramFunction-ImgWrap-Content-Intro" style={{ margin: 0 }}>
            {imageArray[1].intro}
          </div>
          <div className="MoramFunction-ImgWrap-Content-Intro">{imageArray[1].intro2}</div>
          <img src={imageArray[1].image} alt={imageArray[1].image} />
        </div>
        <div className="MoramFunction-ImgWrap-Content">
          <div className="MoramFunction-ImgWrap-Content-Intro" style={{ margin: 0 }}>
            {imageArray[2].intro}
          </div>
          <div className="MoramFunction-ImgWrap-Content-Intro">{imageArray[2].intro2}</div>
          <img src={imageArray[2].image} alt={imageArray[2].image} />
        </div>
        <div className="MoramFunction-ImgWrap-Content">
          <div className="MoramFunction-ImgWrap-Content-Intro">{imageArray[3].intro}</div>
          <img src={imageArray[3].image} alt={imageArray[3].image} />
        </div>
      </div>
    </div>
  );
};

export default MoramFunction;
