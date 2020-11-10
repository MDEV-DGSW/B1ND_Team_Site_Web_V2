import React from 'react';
import './iOS1.scss';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';

const IOS1 = () => {
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
        <div ref={ref} className ="IOS1">
          <div className ="IOS1-LeftSection">
            <div className ="IOS1-LeftSection-Image1"></div>
            <div className ="IOS1-LeftSection-Image2"></div>
          </div>

          <div className ="IOS1-RightSection">
            <div className ="IOS1-RightSection-Title">도담도담 iOS</div>
            <div className ="IOS1-RightSection-Contents">
              <div>학생들의 곁에는 항상 도담도담</div>
              <div>내용을 서비스에 대한 어쩌고 저쩌고</div>
              <div>간단한 소개와 텍스트들과 내용을 어쩌고 저쩌고</div>
              
              <br />
              <div>내용을 서비스에 대한 어쩌고 저쩌고</div>
              <div>간단한 소개와 텍스트들과 내용을 어쩌고 저쩌고</div>
            </div>
          </div>
        </div>
        </FadeIn>
      }
    </div>
  );
};

export default IOS1;