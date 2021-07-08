/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/


import React from "react";

import emptyProducts from "./assets/empty-products-illustration.svg";

const Empty = ({
  message,
  messageDescription
}) => {
  return (
    <div>
      <div>
        <img
          alt={message}
          src={emptyProducts}
          style={{width: "22rem"}}
        />
      </div>
      <div>
        <p>{message}</p>
        <p>{messageDescription}</p>
      </div>
    </div>
  )
};

export default Empty;
