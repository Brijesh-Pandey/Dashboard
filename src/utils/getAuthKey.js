/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

const getAuthKey = () => {
  return JSON.parse(sessionStorage.getItem("token"));
}

export default getAuthKey;