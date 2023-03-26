import React from "react";

export const Button = (props) => {
  const classes = "py-2 px-8 rounded mx-4 " + props.className;
  return (
    <button className={classes} {...props}>
      {props.children}
    </button>
  );
};
