import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

import './App.css';

function App() {
  return (
    <Router>
    <div className="bodydiv">
      <Switch>
        <Route excat path="/" component={About}></Route>
        <Route excat path="/about" component={About}></Route>
        <Route excat path="/contact" component={Contact}></Route>
        <Route excat path="/portfolio" component={Portfolio}></Route>
      </Switch>


    </div>
    </Router>
  );
}

export default App;
