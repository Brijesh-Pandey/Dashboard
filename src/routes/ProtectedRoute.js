/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React from "react";

import {Route} from "react-router-dom";

import isAuthenticated from "../../src/utils/isAuthenticated";


const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!isAuthenticated()) {
          window.location.assign(window.location.origin);
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
