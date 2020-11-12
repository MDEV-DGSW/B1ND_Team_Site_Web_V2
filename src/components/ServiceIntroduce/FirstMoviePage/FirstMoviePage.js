import React from 'react';
import Movie from 'assets/movie/TeamSite_Cover.mp4';
import './FirstMovie.scss';
const FirstMovie = () => {
  return (
    <>
      <div className="FirstMovie">
        <div className="FirstMovie-movie">
          <video
            autoplay="autoplay"
            muted="muted"
            loop="loop"
            src={Movie}
            className="FirstMovie-movie-video"
          ></video>
        </div>
        <div className="FirstMovie-content">
          <p>
            Connect <br />
            Everything <br />
            B1ND
          </p>
        </div>
      </div>
    </>
  );
};

export default FirstMovie;
