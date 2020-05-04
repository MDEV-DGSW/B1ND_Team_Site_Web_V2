import React from 'react';
import { inject, observer } from 'mobx-react';
import InquiryList from 'components/Inquiry/InquiryList';

const InquiryListContainer = () => {
  return (
    <InquiryList  />
  );
}

export default inject('store')(observer(InquiryListContainer));