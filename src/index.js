import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import CreateEvent from './screens/createEvent/CreateEvent'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css'

import AboutEvent from "./screens/AboutEvent";
import Payment from './screens/Payment'
import AllEvents from './screens/AllEvents'

import Home from './screens/Home'
import Dashboard from './screens/Dashboard';
const routing = (
  <Router>
    <Route exact path='/dashboard' component={Dashboard} />
    <Route exact path="/allevents" component={AllEvents} />
    <Route exact path="/aboutevents" component={AboutEvent} />
    <Route exact path="/payment" component={Payment} />

    <Route exact path="/home" component={Home} />

    <Route exact path="/createevent" component={CreateEvent} />
    <Route exact path="/" component={Home} />

  </Router>
)

ReactDOM.render(
  routing
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
