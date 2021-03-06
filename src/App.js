import React from 'react';
import logo from './logo.svg';
import './App.scss';
import ZfgcHeader from './components/zfgc-header/zfgc-header.component.js';
import ZfgcFooter from './components/zfgc-header/zfgc-footer.component.js';
import {
  BrowserRouter as Router,
  Switch,
  Route, Link
} from "react-router-dom";
import SignIn from './components/sign-in/sign-in.component.js';
import NewUserRoute from './routing/new-user.route.js';
import ViewMembers from './routing/members/view-members.route.js';
import ProfileRoute from './routing/profile/profile.route.js';

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
          <NewUserRoute/>
        </Route>

        //top nav
        <Route path="/members">
          <ViewMembers/>
        </Route>


        //user profile
        <Route path="/profile/profileinfo" component={ProfileRoute}/>
      </Switch>


      <div className="zfgc-bottom">
        <ZfgcFooter></ZfgcFooter>
      </div>
    </Router>
  );
}

export default App;
