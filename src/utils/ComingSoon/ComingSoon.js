/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React from "react";

import ComingSoonIllustration from "./assets/coming-soon-illustration.png";

const ComingSoon = ({
  message
}) => {
  return (
    <div style={{textAlign: "center"}}>
      <div>
        <img
          alt={message}
          src={ComingSoonIllustration}
          style={{width: "22rem"}}
        />
      </div>
      <div>
        <p className="lead" >{message}</p>
      </div>
    </div>
  )
};

export default ComingSoon;
