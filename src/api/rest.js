/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import {transformedAxios as axios} from "./axios";

const userURL = "https://api-nodejs-todolist.herokuapp.com/user";
const taskURL = "https://api-nodejs-todolist.herokuapp.com/task";


const userLogin = (payload) => {
  const finalUrl = `${userURL}/login`;
  return axios.post(finalUrl, payload);
};

const userRegister = (payload) => {
  const finalUrl = `${userURL}/register`;
  return axios.post(finalUrl, payload);
};

const getUser = (authKey) => {
  const finalUrl = `${userURL}/me`;
  return axios.get(finalUrl, { headers: { Authorization: authKey } })
};

const logoutUser = (authKey) => {
  const finalUrl = `${userURL}/logout`;
  return axios.post(finalUrl, null, {headers: {Authorization: authKey}});
};


// Task Api's

const addTask = (authKey, payload) => {
  return axios.post(taskURL, payload, {headers: {Authorization: authKey}});
};

const getTasks = (authKey) => {
  return axios.get(taskURL, {headers: {Authorization: authKey}});
};

const markDone = (authKey, id, payload) => {
  const finalUrl = `${taskURL}/${id}`;
  return axios.put(finalUrl, payload, {headers: {Authorization: authKey}});
};

const deleteTask = (authKey, id) => {
  const finalUrl = `${taskURL}/${id}`;
  return axios.delete(finalUrl, {headers: {Authorization: authKey}});
}


export {
  userLogin,
  userRegister,
  getUser,
  logoutUser,

  // Task Api's

  addTask,
  getTasks,
  markDone,
  deleteTask
}
