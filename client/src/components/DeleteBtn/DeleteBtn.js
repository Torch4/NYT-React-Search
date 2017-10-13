import React from "react";

export const removeBtn = props =>
  <button {...props} style={{ float: "right" }} className="btn btn-primary">
    {props.children}
  </button>;
