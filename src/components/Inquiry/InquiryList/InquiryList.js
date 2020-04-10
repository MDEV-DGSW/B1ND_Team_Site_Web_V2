import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import { FaSistrix } from 'react-icons/fa';
import './InquiryList.scss';

const InquiryList = () => {
  const [searchValue, setSearchValue] = useState('');
  const questionList = [
    {
      id: 1,
      question: '바인드팀은 왜 바인드인가요?',
      answer: 'Lorem'
    },

    {
      id: 2,
      question: '바인드팀은 무슨 활동을 하나요?',
      answer: 'Lorem'
    },

    {
      id: 3,
      question: '바인드팀은 언제 창설되었나요?',
      answer: 'Lorem'
    },

    {
      id: 4,
      question: '어떻게 하면 바인드팀에 들어갈 수 있나요?',
      answer: 'Lorem'
    },

    {
      id: 5,
      question: '연차는 어떻게 쓸 수 있나요?',
      answer: 'Lorem'
    },

    {
      id: 6,
      question: '바인드팀은 언제 활동하나요?',
      answer: 'Lorem'
    },
  ];

  const searchQuestions = (arrayParam) => {
    arrayParam.sort();
    arrayParam = arrayParam.filter(contact => {
      return (
        contact.question.indexOf(searchValue) > -1 
      );
    });

    return arrayParam.map(data => {
      const { id, question, answer } = data;
      return (
        <>
          <div className ="InquiryList-ListBox-Contents-List" key ={id}>
            Q. <span className ="InquiryList-ListBox-Contents-List-Item">
              {question}
            </span>
  
            <div className ="InquiryList-ListBox-Answer">
              {answer}
            </div>
          </div>
        </>
      );
    })
  }

  return (
    <div className ="InquiryList">
      <div className ="InquiryList-Contents">
      <div className ="InquiryList-TitleBox">
        <div className ="InquiryList-TitleBox-Contents">
          <div className ="InquiryList-TitleBox-Title">
            문의사항
            <button className ="InquiryList-TitleBox-WriteButton">문의 작성</button>
          </div>
          <div className ="InquiryList-TitleBox-SubTitle">
            ※ 계열사 지원문의는 각 회사의 채용 홈페이지에서 보다 빠르고 정확한 답변이 가능합니다.
            </div>
          <hr className ="InquiryList-TitleBox-Line" />
          <div className ="InquiryList-TitleBox-Input">
            <div className="InquiryList-TitleBox-InputZone">
              <div className="InquiryList-TitleBox-InputZone-Column">
                <div className="InquiryList-TitleBox-InputZone-Icon">
                  <FaSistrix style={{ fontSize: '20px', marginTop: '4px' }} />
                </div>
              </div>
              <div className="InquiryList-TitleBox-Inputzone-Column">
                <input 
                  className="InquiryList-TitleBox-InputZone-InputArea"
                  type="text"
                  value ={searchValue}
                  onChange ={(e) => setSearchValue(e.target.value)}
                  placeholder="Search Keywords"
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <div className ="InquiryList-ListBox">
        <div className ="InquiryList-ListBox-Contents">
          {searchQuestions(questionList)}
        </div>

        <hr className ="InquiryList-ListBox-Line" />
      </div>
      </div>
    </div>
  );
}

export default InquiryList;