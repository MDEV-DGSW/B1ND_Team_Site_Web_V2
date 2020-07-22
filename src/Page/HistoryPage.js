import React from 'react';
import History from 'components/History';
import MainTemplate from 'components/MainTemplate/MainTemplate';

const HistoryPage = () => {
  return (
    <MainTemplate pageType={'history'}>
      <History />
    </MainTemplate>
  );
};

export default HistoryPage;
