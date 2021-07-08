/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

"use strict";

import {toast} from 'react-toastify';

const triggerToast = (message, type = "error") => {
  toast(message, {
    autoClose: 5000,
    closeButton: false,
    type,
    hideProgressBar: false,
    position: toast.POSITION.TOP_RIGHT,
    pauseOnHover: true,
  });
};

export default triggerToast;
