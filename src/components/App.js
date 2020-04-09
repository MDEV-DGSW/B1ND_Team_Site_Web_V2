import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

import ServiceNoticePage from 'Page/ServiceNoticePage';
import MainPage from 'Page/MainPage';
import AdminPage from 'Page/AdminPage';
import InquiryPage from 'Page/InquiryPage';
import MemberPage from 'Page/MemberPage';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainPage} />

        <Route exact path="/ServiceNotice" component={ServiceNoticePage} />

        <Route exact path="/AdminLogin" component={AdminPage} />

        <Route exact path="/Inquiry" component={InquiryPage} />

        <Route exact path="/Member" component={MemberPage} />
      </Switch>
    </>
  );
}

export default App;
