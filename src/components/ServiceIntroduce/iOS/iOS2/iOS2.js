import React from 'react';
import './iOS2.scss';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';
import BubbleHome from 'assets/images/BallonSpeech/White/WhiteBubble_Home.png';
import BubbleLocation from 'assets/images/BallonSpeech/White/WhiteBubble_Location.png';
import BubbleLostFound from 'assets/images/BallonSpeech/White/WhiteBubble_LostNFound.png';
import BubbleOffbase from 'assets/images/BallonSpeech/White/WhiteBubble_OffBase.png';
import BubbleWakesong from 'assets/images/BallonSpeech/White/WhiteBubble_WakeSong.png';

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
  
  const topics = [BubbleHome, BubbleLocation, BubbleLostFound, BubbleOffbase, BubbleWakesong];

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