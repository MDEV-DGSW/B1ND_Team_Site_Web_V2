import React from 'react';
import './iOS2.scss';
import LocationBallon from 'assets/images/BallonSpeech/Location.png';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';

const IOS2Item = ({ topic }) => {
  return (
    <div className ="IOS2-ItemWrapper-Item">
      <div className ="IOS2-ItemWrapper-Item-TopicWrapper">
        <img src ={topic} alt ="topic" className ="IOS2-ItemWrapper-Item-TopicWrapper-Topic" />
      </div>
      <div className ="IOS2-ItemWrapper-Item-Image"></div>
    </div>
  );
};

const IOS2 = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });
  
  const topics = [LocationBallon, LocationBallon, LocationBallon, LocationBallon, LocationBallon];

  return (
    <div>
      {
        inView &&
        <FadeIn transitionDuration={400} delay={400}>
          <div ref={ref} className ="IOS2">
            <div className ="IOS2-ItemWrapper">
            {
              topics.map((topic) => {
                return <IOS2Item topic ={topic} />
              })
            }
            </div>
          </div>
        </FadeIn>
      }
    </div>
  );
};

export default IOS2;