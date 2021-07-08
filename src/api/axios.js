/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

"use strict";

import axios from "axios";
import humps from "humps";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["X-APP-VERSION"] = "cgt-web";

const transformedAxios = axios.create({});

transformedAxios.defaults.transformResponse = [
  ...axios.defaults.transformResponse,
  data => humps.camelizeKeys(data)
];

transformedAxios.defaults.transformRequest = [
  data => humps.decamelizeKeys(data),
  ...axios.defaults.transformRequest
];

export {
  transformedAxios,
  axios as plainAxios
};