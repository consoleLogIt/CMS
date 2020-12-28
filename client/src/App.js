
import React from 'react';
import {SignUp,SignIn,Homepage} from './Components';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactNotification from 'react-notifications-component'

//css
import 'react-notifications-component/dist/theme.css'


function App(props) {
  return (
    <Router>
       <ReactNotification />
      <Switch>
        <Route path  = "/" exact component = {SignIn}></Route>
        <Route path  = "/signup" exact component = {SignUp}></Route>
        <Route path  = "/homepage" exact component = {Homepage}></Route>
      </Switch>
    </Router>
  )
}

export default App;