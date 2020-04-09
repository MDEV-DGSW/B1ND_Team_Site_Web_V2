import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import './InquiryList.scss';

const InquiryList = ({ store, inquiryList, requestInquiryList, page, setPage, pageCountDown, pageCountUp }) => {
  const { pageCount, maxLength, handleCountUp, handleCountDown } = store.InquiryStore;

  useEffect(() => {
    
  }, [])

  const inquiryLists = inquiryList.map(inquiry => {
    const { idx, title, create_date } = inquiry;
    return (
      <div className ="InquiryList-ListBox-Contents-List" key ={idx}>
        <div>Q. {title}</div>
        {/* <div>생성시간: {create_date}</div> */}
      </div>
    );
  })

  return (
    <div className ="InquiryList">
      <div className ="InquiryList-Contents">
      <div className ="InquiryList-TitleBox">
        <div className ="InquiryList-TitleBox-Contents">
          <div className ="InquiryList-TitleBox-Title">문의사항</div>
          <div className ="InquiryList-TitleBox-SubTitle">※ 계열사 지원문의는 각 회사의 채용 홈페이지에서 보다 빠르고 정확한 답변이 가능합니다.</div>
        </div>
      </div>

      <div className ="InquiryList-ListBox">
        <div className ="InquiryList-ListBox-Contents">
          {inquiryLists}
        </div>
      </div>
      </div>
      {/*
      <button onClick ={pageCountDown}>이전</button>
      {page} / {maxLength}
      <button onClick ={pageCountUp}>다음</button> */}
    </div>
  );
}

export default inject('store')(observer(InquiryList));