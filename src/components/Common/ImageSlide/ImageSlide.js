import React from 'react';
import './ImageSlide.scss';
import image1 from 'assets/images/슬라이드6.jpg';
import image2 from 'assets/images/슬라이드2.jpg';
import image3 from 'assets/images/슬라이드7.jpg';
import image4 from 'assets/images/슬라이드3.jpg';
import image5 from 'assets/images/슬라이드5.jpg'
import {Fade} from "react-slideshow-image";
 
const slideImages = [
  image1,
  image2,
  image3,
  image4,
  image5
];

const fadeProperties = {
  duration: 7000,
  transitionDuration: 700,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const ImageSlide = () => {
  return(
    <div className="ImageSlide">
      <Fade {...fadeProperties}>
        <div className="ImageSlide__slide" >
          <span className="ImageSlide__slide-img">
            <div className="ImageSlide__slide-img-1">
              <img src ={slideImages[0]} className ="ImageSlide__slide-img-1-1" alt ="slideimage" />
              <div className="ImageSlide__slide-textbox">
              <span className="ImageSlide__slide-textbox-title" >학생들과 함께 만나는<br/>스마트 스쿨</span> 
              <div className="ImageSlide__underline" />
              <span className="ImageSlide__slide-textbox-des">
                desdesdesddesdesdesdesdesesdes<br/>
                desdesdesdesdesdesdesdesdesdes
              </span>
              </div>
            </div>
          </span>
        </div>
        <div className="ImageSlide__slide" >
          <span className="ImageSlide__slide-img">
          <div className="ImageSlide__slide-img-2">
              <img src ={slideImages[1]} className ="ImageSlide__slide-img-2-2" alt ="slideimage" />
              <div className="ImageSlide__slide-textbox">
              <span className="ImageSlide__slide-textbox-title" >titletit<br/>letitle</span> 
              <div className="ImageSlide__underline" />
              <span className="ImageSlide__slide-textbox-des">
                desdesdesddesdesdesdesdesesdes<br/>
                desdesdesdesdesdesdesdesdesdes
              </span>
              </div>
            </div>
          </span>
        </div>
        <div className="ImageSlide__slide" >
          <span className="ImageSlide__slide-img">
          <div className="ImageSlide__slide-img-3">
              <img src ={slideImages[2]} className ="ImageSlide__slide-img-3-3" alt ="slideimage" />
              <div className="ImageSlide__slide-textbox">
              <span className="ImageSlide__slide-textbox-title" >titletit<br/>letitle</span> 
              <div className="ImageSlide__underline" />
              <span className="ImageSlide__slide-textbox-des">
                desdesdesddesdesdesdesdesesdes<br/>
                desdesdesdesdesdesdesdesdesdes
                </span>
              </div>
            </div>
          </span>
        </div>
        <div className="ImageSlide__slide" >
          <span className="ImageSlide__slide-img">
          <div className="ImageSlide__slide-img-4">
              <img src ={slideImages[3]} className ="ImageSlide__slide-img-4-4" alt ="slideimage" />
              <div className="ImageSlide__slide-textbox">
              <span className="ImageSlide__slide-textbox-title" >titletit<br/>letitle</span> 
              <div className="ImageSlide__underline" />
              <span className="ImageSlide__slide-textbox-des">
                desdesdesddesdesdesdesdesesdes<br/>
                desdesdesdesdesdesdesdesdesdes
              </span>
              </div>
            </div>
          </span>
        </div>
        <div className="ImageSlide__slide" >
          <span className="ImageSlide__slide-img">
            <div className="ImageSlide__slide-img-5">
              <img src ={slideImages[4]} className ="ImageSlide__slide-img-5-5" alt ="slideimage" />
              <div className="ImageSlide__slide-textbox">
              <span className="ImageSlide__slide-textbox-title" >titleti<br/>tletitle</span> 
              <div className="ImageSlide__underline" />
              <span className="ImageSlide__slide-textbox-des">desdesdesddesdesdesdesdesesdes<br/>desdesdesdesdesdesdesdesdesdes</span>
              </div>
            </div>
          </span>
        </div>
      </Fade>
    </div>
  );
}

export default ImageSlide;