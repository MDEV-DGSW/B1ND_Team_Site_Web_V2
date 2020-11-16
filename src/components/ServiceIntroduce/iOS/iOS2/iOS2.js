import React from 'react';
import './iOS2.scss';
import FadeIn from 'react-fade-in';
import { useInView } from 'react-intersection-observer';
// import BubbleHome from 'assets/images/BallonSpeech/White/WhiteBubble_Home.png';
import BubbleLocation from 'assets/images/BallonSpeech/White/WhiteBubble_Location.png';
// import BubbleLostFound from 'assets/images/BallonSpeech/White/WhiteBubble_LostNFound.png';
import BubbleOffbase from 'assets/images/BallonSpeech/White/WhiteBubble_OffBase.png';
import BubbleScore from 'assets/images/BallonSpeech/White/WhiteBubble_Score.png';
import BubbleMeal from 'assets/images/BallonSpeech/White/WhiteBubble_Meal.png';
import BubbleBus from 'assets/images/BallonSpeech/White/WhiteBubble_Bus.png';

// import iOS_Home from 'assets/images/mockup/iOS_Main.png';
import iOS_Location from 'assets/images/mockup/iOS_Location.png';
// import iOS_LostFound from 'assets/images/mockup/iOS_LostFound.png';
import iOS_OffBase from 'assets/images/mockup/iOS_OffBase.png';
import iOS_Score from 'assets/images/mockup/iOS_Point.png';
import iOS_Meal from 'assets/images/mockup/iOS_Meal.png';
import iOS_Bus from 'assets/images/mockup/iOS_Bus.png';

const IOS2Item = ({ topic, image }) => {
  return (
    <div className="IOS2-ItemWrapper-Item">
      <div className="IOS2-ItemWrapper-Item-TopicWrapper">
        <img src={topic} alt="topic" className="IOS2-ItemWrapper-Item-TopicWrapper-Topic" />
      </div>
      <img src={image} alt="images" className="IOS2-ItemWrapper-Item-Image" />
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

  const topicImages = [
    // {
    //   topics: BubbleHome,
    //   image: iOS_Home,
    // },
    {
      topics: BubbleBus,
      image: iOS_Bus
    },

    {
      topics: BubbleMeal,
      image: iOS_Meal
    },

    {
      topics: BubbleLocation,
      image: iOS_Location,
    },

    // {
    //   topics: BubbleLostFound,
    //   image: iOS_LostFound,
    // },

    {
      topics: BubbleOffbase,
      image: iOS_OffBase,
    },

    {
      topics: BubbleScore,
      image: iOS_Score,
    },
  ];

  return (
    <div style={{ backgroundColor: '#f7f7f7' }}>
      {
        inView &&
        <FadeIn transitionDuration={400} delay={400}>
          <div ref={ref} className="IOS2">
            <div className="IOS2-ItemWrapper">
              {
                topicImages.map((topic, index) => {
                  const { topics, image } = topic;
                  return <IOS2Item key={index} topic={topics} image={image} />
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