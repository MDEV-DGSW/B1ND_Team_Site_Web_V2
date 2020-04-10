import React from 'react';
import Main from 'components/Main/Main';
import MainTemplate from 'components/MainTemplate/MainTemplate';

const MainPage = () => {
    return (
        <MainTemplate pageType={'main'}>
          <Main/>
        </MainTemplate>
    );
}

export default MainPage;