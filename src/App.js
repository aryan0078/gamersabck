import React from "react";
import AppLayout from "./Layout";
import Home from "./screens/Home";
import Payment from "./screens/Payment";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <Route path="/payment" component={<Payment />} />
    </Router>
  );
}

export default App;
