import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./about";
import Home from "./home";
import Login from "./login";
import Register from "./register";

function App() {
  return (
    <div>
      Hello world! :-)
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
