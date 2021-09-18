import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../src/routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/:hello" exact component={Detail}></Route>
    </Router>
  );
}

export default App;
