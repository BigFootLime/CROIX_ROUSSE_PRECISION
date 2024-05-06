import React from "react";

const CustomButton = ({ styles, text: propsText }) => (
  <button
    type="button"
    className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] hover:scale-105 transition-transform duration-300 ease-in-out`}
  >
    {propsText || "Get Started"}
  </button>
);

export default CustomButton;
