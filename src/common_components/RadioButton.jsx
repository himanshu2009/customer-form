import React from "react";

function RadioButton({
  id,
  value,
  checked,
  onChange,
  label,
  radioBtnCategory,
}) {
  return (
    <div className="w-[100%] md:w-[44%] ">
      <input
        className="ml-3"
        type="radio"
        id={id}
        name={radioBtnCategory}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default RadioButton;
