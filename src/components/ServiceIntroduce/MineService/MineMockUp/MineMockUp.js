import React from 'react';
import './MineMockUp.scss';
import TeacherSecondPage from 'assets/images/mockup/Teacher_SecondPage.png';

const MineMockUp = () => {
  return (
    <div className="MineMockUp">
      <div className="MineMockUp-imgWrap">
        <img src={TeacherSecondPage} alt={TeacherSecondPage} />
      </div>
      <div className="MineMockUp-textWrap">
        <div className="MineMockUp-textWrap-topTitle primary">
          여기 글자 <br /> 이렇게
          <br /> 넣으면 <br /> 예쁠듯
        </div>
        <div className="MineMockUp-textWrap-underTitle">
          학생들의 곁에는 항상 도담도담 <br />
          어쩌고 저쩌고어ㅉ
          <br />
          <br />
          에 대한 어쩌고 저쩌고어ㅉ
          <br />
          한 소개와 텍스트들과 내용들 <br />
        </div>
      </div>
    </div>
  );
};

export default MineMockUp;
