import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Tab1  from "./components/tab1";
import Tab2  from "./components/tab2";
import Tab3  from "./components/tab3";
import Tab4 from "./components/tab4";
import Navbar  from "./components/navbar";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Tab1}/>
        <Route path="/animations" component={Tab2}/>
        <Route path="/games" component={Tab3}/>
        <Route path="/posenet" component={Tab4}/>
      </Switch>
  </Router>
  );
}

export default App;
