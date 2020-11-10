import React from 'react';
import './iOS2.scss';
import LocationBallon from 'assets/images/BallonSpeech/Location.png';

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
  const topics = [LocationBallon, LocationBallon, LocationBallon, LocationBallon, LocationBallon];

  return (
    <div className ="IOS2">
      <div className ="IOS2-ItemWrapper">
      {
        topics.map((topic) => {
          return <IOS2Item topic ={topic} />
        })
      }
      </div>
    </div>
  );
};

export default IOS2;