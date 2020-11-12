import React from 'react';
import Movie from 'assets/movie/shortFirst.mp4';
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
            여기도 글을 쓸 수 <br />
            있는데 뭐 쓸래 <br />
            이렇게 뭐 쓸꺼야!
          </p>
        </div>
      </div>
    </>
  );
};

export default FirstMovie;
