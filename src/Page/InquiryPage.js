import React from 'react';
import InquiryList from 'containers/Inquiry/InquiryList/InquiryListContainer';
import MainTemplate from 'components/MainTemplate/MainTemplate';

const InquiryPage = () => {
    return (
        <MainTemplate pageType={'inquiry'}>
          <InquiryList />
        </MainTemplate>
    );
}

export default InquiryPage;