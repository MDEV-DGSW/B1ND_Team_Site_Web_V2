import React from 'react';
import './ImageSlide.scss';

import {Fade} from "react-slideshow-image";
 
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
            <div className="ImageSlide__slide-img-1"/>
          </span>
        </div>
        <div className="ImageSlide__slide" >
          <span className="ImageSlide__slide-img">
            <div className="ImageSlide__slide-img-2"/>
          </span>
        </div>
        <div className="ImageSlide__slide" >
          <span className="ImageSlide__slide-img">
            <div className="ImageSlide__slide-img-3"/>
          </span>
        </div>
        <div className="ImageSlide__slide" >
          <span className="ImageSlide__slide-img">
            <div className="ImageSlide__slide-img-4"/>
          </span>
        </div>
      </Fade>
    </div>
  );
}

export default ImageSlide;