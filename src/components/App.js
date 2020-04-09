import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

import ServiceNoticePage from 'Page/ServiceNoticePage';
import MainPage from 'Page/MainPage';
import Admin from 'containers/Admin/AdminLogin';
import AdminPage from 'Page/AdminPage';
import InquiryPage from 'Page/InquiryPage';
import MemberPage from 'Page/MemberPage';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainPage} />

        <Route exact path="/service" component={ServiceNoticePage} />

        <Route exact path="/login" component={Admin} />

        <Route exact path="/admin" component={AdminPage}/>

        <Route exact path="/inquiry" component={InquiryPage} />

        <Route exact path="/member" component={MemberPage} />
      </Switch>
    </>
  );
}

export default App;
