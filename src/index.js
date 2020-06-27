import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css'
import Landing from './screens/Landing'
import AppLayout from  './Layout'
import PaymentP from './screens/PaymentPageHF'
import AboutEventP from './screens/AboutEventP'
const routing = (
  <Router>
    <div>
      <Route path="/payment" component={PaymentP} />
       <Route path="/aboutevents" component={AboutEventP} />
      <Route path="/" component={Landing} />
     
    </div>
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
