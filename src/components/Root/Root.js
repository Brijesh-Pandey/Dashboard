/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React from "react";
import { useHistory } from "react-router";

const Root = () => {
  const history = useHistory();
  history.push("/login");

  return <></>
}

export default Root;