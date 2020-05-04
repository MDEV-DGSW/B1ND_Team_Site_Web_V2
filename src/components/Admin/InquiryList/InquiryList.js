import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import './InquiryList.scss';

const InquiryList = ({ store, inquiryList, requestInquiryList, page, setPage, pageCountDown, pageCountUp }) => {

  const inquiryLists = inquiryList.map(inquiry => {
    const { idx, title, create_date } = inquiry;
    return (
      <div key ={idx}>
        <div>Q. {title}</div>
      </div>
    );
  })

  return (
    <div>
      {inquiryLists}
    </div>
  );
}

export default inject('store')(observer(InquiryList));