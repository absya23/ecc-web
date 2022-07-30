import React from "react";

const Button = ({
  children,
  className = "",
  type = "button",
  onClick = () => {},
  ...props
}) => {
  return (
    <button
      type={type}
      className={`px-8 py-3 text-white leading-none rounded-lg my-auto ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
