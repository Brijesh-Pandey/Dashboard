/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

const isAuthenticated = () => {
  const token = sessionStorage.getItem('token');

  if (token) {
    return !!token.length;
  } else {
    return false;
  }
}

export default isAuthenticated;
