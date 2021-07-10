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
    <div className="empty-container">
      <div>
        <img
          alt={message}
          src={emptyProducts}
          style={{width: "22rem"}}
        />
      </div>
      <div>
        <p className="empty-description">{message}</p>
      </div>
    </div>
  )
};

export default Empty;
