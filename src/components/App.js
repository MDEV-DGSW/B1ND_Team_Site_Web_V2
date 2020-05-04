import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from 'containers/Login/LoginContainer';
import Register from 'containers/Register/RegisterContainer';
import Todo from './Todo';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Register}/>
        <Route exact path="/service" component={Todo} />
      </Switch>
    </>
  );
}

export default App;
