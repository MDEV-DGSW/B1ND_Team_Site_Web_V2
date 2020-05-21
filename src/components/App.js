import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import * as Pages from '../Page';

function App() {
  return (
    <>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Pages.Main} />
        <Route exact path="/service" component={Pages.ServiceNotice} />
        <Route exact path="/inquiry" component={Pages.Inquiry} />
        <Route exact path="/member" component={Pages.Member} />
        <Route exact path="/service_intro" component={Pages.ServiceIntroduce} />
        <Route exact path="/history" component={Pages.History} />
        <Route exact path="/dodam_web_rel_t" component={Pages.WebNotice}/>
        <Route exact path="/dodam_web_rel_s" component={Pages.WebStNotice}/>
        <Route exact path="/dodam_and_rel_t" component={Pages.AndroidNotice}/>
        <Route exact path="/dodam_and_rel_s" component={Pages.AndroidStNotice}/>
        <Route exact path="/dodam_win_rel" component={Pages.WindowNotice}/>
        <Route exact path="/b1nd_web_rel" component={Pages.BindSite}/>
        <Route exact path="/notfound" component={Pages.notfound}/>
        <Redirect to="/notfound" />
      </Switch>
      </HashRouter>
    </>
  );
}

export default App;
