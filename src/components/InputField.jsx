import React from "react";

function InputField({ field, onChange, error, touched }) {
  const { type, name, value, label, inputType } = field;

  return inputType === "normal" ? (
    <div className="w-[90%] justify-evenly flex flex-row border-2 py-1">
      <label className="w-[50%] pl-3 border-r-2">{label}</label>
      <input
        className="border-solid border-black-600 w-[50%]"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />

      {error && touched[name] ? <p className="form-error">{error}</p> : null}
    </div>
  ) : inputType === "Advance" ? (
    <div className="w-[90%] justify-evenly flex flex-row border-2">
      <div className="w-[50%] pl-3 border-r-2">
        <label>{label}</label>
        {field.options.map((option) => {
          return <p>{option}</p>;
        })}
      </div>
      <div className="border-solid border-black-600 w-[50%] flex items-end ">
        <div className="border border-solid w-[100%]">
          <input
            className="my-1 px-2 w-[100%]"
            type={type}
            name={name}
            placeholder="Direct Number"
            value={value}
            onChange={onChange}
          />
          <hr />
          <input
            className=" px-2 mt-1 w-[100%]"
            type={type}
            name={name}
            value={value}
            placeholder="Mobile Number"
            onChange={onChange}
          />
        </div>
      </div>

      {error && touched[name] ? <p className="form-error">{error}</p> : null}
    </div>
  ) : null;
}

export default InputField;
