import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Inventory from "./Inventory";
import Audit from "./Audit/Audit";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Inventory/>} />
          <Route path="/inventory" element={<Inventory/>} />
          <Route path="/audit" element={<Audit/>}/>
        </Routes>
      </Router>
    );
  }
}
