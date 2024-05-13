import { PlusIcon } from "lucide-react";
import { PlusCircleIcon } from "lucide-react";
import { Plus } from "lucide-react";
import React from "react";

const CustomButton = ({ styles, text: propsText }) => (
  <button
    type="button"
    className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] hover:scale-105 transition-transform duration-300 ease-in-out`}
  >
    {propsText ? (
      propsText
    ) : (
      <div className="flex flex-row ">
        En savoir
        <PlusCircleIcon className="ml-2" />
      </div>
    )}
  </button>
);

export default CustomButton;
