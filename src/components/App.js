import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./about";
import Home from "./home";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
