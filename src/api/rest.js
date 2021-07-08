/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import {transformedAxios as axios} from "./axios";

const userURL = "https://api-nodejs-todolist.herokuapp.com/user";

const userLogin = (payload) => {
  const finalUrl = `${userURL}/login`;
  return axios.post(finalUrl, payload);
}

const userRegister = (payload) => {
  const finalUrl = `${userURL}/register`;
  return axios.post(finalUrl, payload);
}

const getUser = (authKey) => {
  const finalUrl = `${userURL}/me`;
  return axios.get(finalUrl, { headers: { Authorization: authKey } })
}

const logoutUser = (authKey) => {
  const finalUrl = `${userURL}/logout`;
  return axios.post(finalUrl, null, {headers: {Authorization: authKey}})
}

export {
  userLogin,
  userRegister,
  getUser,
  logoutUser
}
