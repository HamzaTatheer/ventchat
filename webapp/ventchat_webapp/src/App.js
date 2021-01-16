import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "./components/Welcome";
import Chat from "./components/Chat";
import Selection from "./components/VentSelection";
//import "./App.css";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Welcome} exact />
        <Route path="/selection" component={Selection} exact />
        <Route path="/chat" component={Chat} exact />
      </Switch>
    </main>
  );
}

export default App;
