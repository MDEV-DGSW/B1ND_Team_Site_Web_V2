import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ServiceNoticePage from 'Page/ServiceNoticePage';
import MainPage from 'Page/MainPage';
import InquiryPage from 'Page/InquiryPage';
import MemberPage from 'Page/MemberPage';
import ServiceIntroducePage from 'Page/ServiceIntroducePage';
import HistoryPage from 'Page/HistoryPage';
import WebNotice from 'Page/WebNotice';
import AndroidNotice from 'Page/AndroidNotice';
import WindowNotice from 'Page/WindowNotice';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/service" component={ServiceNoticePage} />
        <Route exact path="/inquiry" component={InquiryPage} />
        <Route exact path="/member" component={MemberPage} />
        <Route exact path="/service_intro" component={ServiceIntroducePage} />
        <Route exact path="/history" component={HistoryPage} />
        <Route exact path="/web" component={WebNotice}/>
        <Route exact path="/and" component={AndroidNotice}/>
        <Route exact path="/win" component={WindowNotice}/>
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
