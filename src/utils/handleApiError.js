/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/


import triggerToast from "./triggerToast";

const handleApiError = (error) => {
  let errorText = "";
  if (error && error.message) {
    errorText = error.message;
  }
  if (error && error.response && error.response.message) {
    errorText = error.message;
  }
  if (error && error.response && error.response.data) {
    if (error.response.data.message) {
      errorText = error.response.data.message;
    } else if (error.response.data.error) {
      errorText = error.response.data.error.message;
    } else {
      errorText = error.response.data;
    }
  }
  errorText.length ? triggerToast(`${errorText}`) : triggerToast("Oops! Something went wrong");
};

export default handleApiError;
