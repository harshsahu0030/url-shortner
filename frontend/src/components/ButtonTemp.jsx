import React from "react";

const ButtonTemp = ({ label = "", onClick = () => {} }) => {
  return (
    <button
      className="text-base py-2 px-4 font-semibold border-2 border-gray-600 cursor-pointer transition-all hover:bg-gray-200"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ButtonTemp;
