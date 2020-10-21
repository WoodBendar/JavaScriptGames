import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Snake from "./Snake";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Snake">
          <Snake />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
