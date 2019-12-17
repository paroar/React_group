import React from "react";

type InputProps = {
  inputName: string;
  labelName?: string;
  labelContent?: string;
  labelContentBold?: string;
  inputType?: string;
  placeholderText?: string;
};

const Input: React.FC<InputProps> = ({
  labelName,
  labelContent,
  labelContentBold,
  inputName,
  inputType,
  placeholderText
}) => {
  let inputElement = null;
  switch (inputName) {
    case "input":
      inputElement = (
        <input
          aria-label="Input"
          className="input-element"
          type={inputType}
          required
        />
      );
      break;
    case "select":
      inputElement = (
        <select aria-label="Select" className="input-select"></select>
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          aria-label="Textarea"
          className="input-textarea"
          placeholder={placeholderText}
        />
      );
      break;
  }
  return (
    <div className="input-container">
      {inputElement}
      <label htmlFor={labelName} className="label-animation">
        <span className="input-animation">
          {labelContent}
          <span style={{ fontWeight: "bold" }}>{labelContentBold}</span>
        </span>
      </label>
    </div>
  );
};

export default Input;
