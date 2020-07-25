import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CreateEvent from './screens/CreateEvent'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css'
import Landing from './screens/Landing'
import AppLayout from './Layout'
import AllEventsP from './screens/AllEventsP'
import PaymentP from './screens/PaymentPageHF'
import AboutEvent from "./screens/AboutEvent";
import Payment from './screens/Payment'
import AllEvents from './screens/AboutEvent'
import AboutEventP from './screens/AboutEventP'
import Home from './screens/Home'
import Dashboard from './screens/Dashboard';
const routing = (
  <Router>


    <Route exact path="/aboutevents" component={AboutEvent} />
    <Route exact path="/payment" component={Payment} />
    <Route exact path="/allevents" component={AllEvents} />
    <Route exact path='/Dashboard' component={Dashboard} />

    <Route exact path="/createevent" component={CreateEvent} />
    <Route exact path="/" component={Home} />

  </Router>
)

ReactDOM.render(
  routing
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
