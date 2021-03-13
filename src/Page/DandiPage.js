import React from 'react';
import MainTemplate from 'components/MainTemplate/MainTemplate';
import Dandi from 'components/Dandi';

const DandiPage = () => {
  return(
    <MainTemplate pageType={'dandi'}>
      <Dandi />
    </MainTemplate>
  );
};

export default DandiPage;