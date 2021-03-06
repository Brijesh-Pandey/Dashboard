/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/


import React, {useState, useEffect} from "react";
import { useHistory } from "react-router";

import {
  getUser,
  logoutUser
} from "api";
import {
  handleApiError,
  getAuthKey
} from "utils";

import Dashboard from "./Dashboard";

const DashboardContainer = ({setToken}) => {

  const [openMenu, setOpenMenu] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showSidePanel, setShowSidePanel] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    id: "",
    age: ""
  });
  const history = useHistory();

  useEffect(() => {
    handleGetUser();
  }, [])

  const handleGetUser = () => {
    const userModel = {};
    setIsLoading(true);
    getUser(getAuthKey())
      .then(({data}) => {
        userModel.name = data.name;
        userModel.email = data.email;
        userModel.id = data.id;
        userModel.age = data.age;
      })
      .catch(handleApiError)
      .finally(() => setIsLoading(false))
      setUser(userModel);
  };

  const handleLogout = () => {
    setIsLoading(true);
    logoutUser(getAuthKey())
      .then(() => {
        sessionStorage.clear();
        history.push("/login");
        setToken(null);
      })
      .catch(handleApiError)
      .finally(() => setIsLoading(false))
  }

  return (
    <Dashboard
      isLoading={isLoading}
      user={user}
      openMenu={openMenu}
      setOpenMenu={setOpenMenu}
      handleLogout={handleLogout}
      showSidePanel={showSidePanel}
      setShowSidePanel={setShowSidePanel}
    />
  )

}

export default DashboardContainer;