/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React, {useState} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Register from "../components/Register";
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import ToDo from "../components/ToDo";
import Chat from "../components/Chat";
import Games from "../components/Games";
import Root from "../components/Root";

import ProtectedRoute from "./ProtectedRoute";

const RouteHandler = () => {
  const [token, setToken] = useState(sessionStorage.getItem("token"));

  // UPDATE : Dashboard route with PROTECTED ROUTES (LOOK INTO PROTECTED ROUTES)

  return (
    <Router>
      {
        token && token.length ? <Dashboard /> : null
      }
      <Switch>
        <Route
          exact
          path="/register"
        >
          <Register setToken={setToken} />
        </Route>
        <Route
          exact
          path="/login"
        >
          <Login
            setToken={setToken}
          />
        </Route>

        <ProtectedRoute
          exact
          path="/games"
          component={Games}
        />
        <ProtectedRoute
          exact
          path="/chat"
          component={Chat}
        />
        <ProtectedRoute
          exact
          path="/todo"
          component={ToDo}
        />
        <Route
          exact
          path={["/", "/dashboard"]}
        >
          <Root />
        </Route>
      </Switch>
    </Router>
  )
}

export default RouteHandler;