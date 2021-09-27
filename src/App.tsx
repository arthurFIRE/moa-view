import React from "react";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Setup from "./pages/setup";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/setup" render={() => <Setup />} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
