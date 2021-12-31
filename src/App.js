import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/general"><News key="general" pageSize={6} country="in" category="general" /></Route>
          </Switch>
          <Switch>
            <Route exact path="/business"><News key="business" pageSize={6} country="in" category="business" /></Route>
          </Switch>
          <Switch>
            <Route exact path="/entertainment"><News key="entertainment" pageSize={6} country="in" category="entertainment" /></Route>
          </Switch>
          <Switch>
            <Route exact path="/health"><News key="health" pageSize={6} country="in" category="health" /></Route>
          </Switch>
          <Switch>
            <Route exact path="/sports"><News key="sports" pageSize={6} country="in" category="sports" /></Route>
          </Switch>
          <Switch>
            <Route exact path="/science"><News key="science" pageSize={6} country="in" category="science" /></Route>
          </Switch>
          <Switch>
            <Route exact path="/technology"><News key="technology" pageSize={6} country="in" category="technology" /></Route>
          </Switch>
        </Router>
      </div >
    ) // for instructing to re-render the component on the page we give the unique key to every component
  }
}
