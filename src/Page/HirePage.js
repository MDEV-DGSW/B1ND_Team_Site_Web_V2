import React from 'react';
import MainTemplate from 'components/MainTemplate/MainTemplate';
import Hire from 'components/Hire/Hire';

const HirePage = () => {
  return (
    <MainTemplate pageType={'hire'}>
      <Hire />
    </MainTemplate>
  );
};

export default HirePage;
