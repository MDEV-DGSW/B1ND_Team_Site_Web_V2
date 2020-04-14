import React, { useState, useCallback } from 'react';
import { FaSistrix } from 'react-icons/fa';
import { find } from 'lodash';
import './InquiryList.scss';

const InquiryList = () => {
  const [searchValue, setSearchValue] = useState('');
  const [answerData, setAnswerData] = useState({});
  const [isAnswer, setIsAnswer] = useState(false);
  const questionList = [
    {
      id: 1,
      question: '바인드팀은 왜 바인드인가요?',
      answer: 'Lorem1'
    },

    {
      id: 2,
      question: '바인드팀은 언제 창설되었나요?',
      answer: '2017년 1월 8일에 창설되었습니다.'
    },

    {
      id: 3,
      question: '바인드팀은 무슨 활동을 하나요?',
      answer: '교내 학생들을 더욱 편리하게 관리할 수 있도록 스마트스쿨 플랫폼을 개발하고, 이외에도 대외활동을 이어나가고 있습니다.'
    },

    {
      id: 4,
      question: '바인드팀은 언제 활동하나요?',
      answer: '평일에는 방과후 8,9교시와 야자 1,2교시까지 활동을하고, 주말에는 자유롭게 활동합니다.'
    },

    {
      id: 5,
      question: '어떻게 하면 바인드팀에 들어갈 수 있나요?',
      answer: '바인드 공개 채용기간에 지원 할 수 있고, 여러 과정을 거쳐서 합격이되면 바인드팀에 입사 할 수 있습니다.'
    },

    {
      id: 6,
      question: '연차는 어떻게 쓸 수 있나요?',
      answer: 'Lorem4'
    },

    {
      id: 7,
      question: '회고는 언제하고 어떻게 진행되나요?',
      answer: 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    
    {
      id: 8,
      question: 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      answer: 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },

    {
      id: 9,
      question: 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      answer: 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },

    {
      id: 10,
      question: 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      answer: 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];

  const clickQuestionCard = useCallback((id) => {
    const findData = find([...questionList], { id });
    setAnswerData(findData);
    if (answerData.id === id) {
      setIsAnswer(!isAnswer);
    } else if (answerData.id !== id) {
      setIsAnswer(true);
    }
  }, [answerData.id, isAnswer, questionList]);

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
            Q. <span className ="InquiryList-ListBox-Contents-List-Item" onClick ={() => clickQuestionCard(id)}>
              {question}
            </span>
  
            {
              isAnswer && answerData.id === id && <div className ="InquiryList-ListBox-Answer">
                A. &nbsp;{answer}
              </div>
            }

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
            <button className ="InquiryList-TitleBox-WriteButton" onClick ={() => window.open('https://mail.google.com/mail', '_blank')}>문의 하기</button>
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