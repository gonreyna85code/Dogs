import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from "./routes/home.jsx";
import detail from "./routes/detail.jsx";
import create from "./routes/create.jsx";
import start from "./routes/start.jsx";



function App() {
  return (
    <div>
      <Router>
      <Switch>
          <Route exact path={"/"} component={start}></Route>
        </Switch>
        <Switch>
          <Route exact path={"/home"} component={home} ></Route>
        </Switch>
        <Switch>
          <Route exact path={"/dog/:id"} component={detail}></Route>
        </Switch>
        <Switch>
          <Route exact path={"/create"} component={create}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
