import React from "react";

const Button = ({ styles, children }) => {
  return (
    <div
      type="button"
      className={`py-4 px-6  font-poppins font-medium text-[18px]  outline-none ${styles} rounded-[20px] cursor-pointer`}
    >
      <>{children}</>
    </div>
  );
};

export default Button;
