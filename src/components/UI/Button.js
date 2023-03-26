import React from "react";

export const Button = (props) => {
  const { className, children, ...rest } = props;
  return (
    <button className={"py-2 px-8 rounded mx-4 " + className} {...rest}>
      {children}
    </button>
  );
};
