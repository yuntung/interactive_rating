import React from "react";


const Button = ({ number, onSelect, isSelected }) => {
  return (
    <li
      className={`list__rating ${isSelected ? "selected" : ""}`}
      onClick={onSelect}
    >
      {number}
    </li>
  );
};

export default Button;