import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

import ServiceNoticePage from 'Page/ServiceNoticePage';
import MainPage from 'Page/MainPage';
import AdminPage from 'Page/AdminPage';
import InquiryPage from 'Page/InquiryPage';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainPage} />

        <Route exact path="/ServiceNotice" component={ServiceNoticePage} />

        <Route exact path="/Admin" component={AdminPage} />

        <Route exact path="/Inquiry" component={InquiryPage} />
      </Switch>
    </>
  );
}

export default App;
