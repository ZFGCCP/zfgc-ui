import React from 'react';
import logo from './logo.svg';
import './App.scss';
import ZfgcHeader from './components/zfgc-header/zfgc-header.component.js';
import {
  BrowserRouter as Router,
  Switch,
  Route, Link
} from "react-router-dom";
import SignIn from './components/sign-in/sign-in.component.js';
import Registration from './components/registration/registration.component.js';

function App() {
  document.body.classList.add('theme-midnight');

  return (
    <Router>
      <div className="zfgc-main">
        <ZfgcHeader></ZfgcHeader>
      </div>

      <Switch>
        <Route path="/signin">
          <SignIn/>
        </Route>
        <Route path="/registration">
          <Registration/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
