import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`bg-orange-600 text-white px-5 py-2 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
