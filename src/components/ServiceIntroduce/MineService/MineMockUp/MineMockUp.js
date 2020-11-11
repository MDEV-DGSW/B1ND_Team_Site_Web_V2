import React from "react";
import "./MineMockUp.scss";

const MineMockUp = () => {
  return (
    <div className="MineMockUp">
      <div className="MineMockUp__img">
        <img alt="mine mockup img" />
      </div>
      <div className="MineMockUp__content">
        <h1><span style={{color: '#0067bc'}}>여기</span> 들어갈 내용</h1>
        <div className="MineMockUp__content-description">
          <p className="MineMockUp__content-description-title">기능 소개 제목</p>
          <p>학생들의 곁에는 항상 도담도담<br/>
          어쩌고ㅈ 저쩌고어저고
          </p>
          <p>내용들 서비스에대한 어저고저<br/>
          간단한 소개와 텍스트들과<br/>
          내용들 학생들의 곁에는
          </p>
          <p>학생들의 곁에는 항상 도담도담<br/>
          어쩌고ㅈ 저쩌고어저고
          </p>
          <p>내용들 서비스에대한 어저고저<br/>
          간단한 소개와 텍스트들과<br/>
          내용들 학생들의 곁에는
          </p>
        </div>
      </div>
    </div>
  )
}

export default MineMockUp;