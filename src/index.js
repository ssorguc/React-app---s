import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Route, BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/login";
import Users from "./components/users";
import EditUser from "./components/editUser";

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/users" component={Users} />
      <Route path="/editUser/{id}" component={EditUser} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
serviceWorker.unregister();
