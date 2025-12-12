import React from "react";

const Container = ({ children, className = "" }) => {
  return (
    <div className={` mx-auto px-5 sm:px-9 lg:px-9 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
