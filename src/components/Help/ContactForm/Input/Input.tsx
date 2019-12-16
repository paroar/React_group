import React from "react";

// export type InputProps = {
//   element: input | textarea | select, etc
//   elementType: string;
//   elementId?: string | undefined;
//   inputType?: string;
//   inputValue?: string | number | string[] | undefined;
//   placeholderText?: string;
//   atributos label:
//   labelName?: string;
//   labelContent?: string;
//   labelContentBold?: string;
// };

export type InputProps = {
  elementType: string,
  elementConfig: {
    type: string,
    placeholder?: string
  },
  labelConfig: {
    labelName?: string,
    labelContent?: string,
    labelContentBold?: string
  },
  value: string | string[] | undefined
}


const Input = (props: InputProps) => {
  let element = null;
  switch (props.elementType) {
    case "input":
      element = (
        <input
          {...props.elementConfig}
          // value={props.inputValue}
          // id={props.elementId}
          aria-label="input"
          className="input-element"
          required
        />
      );
      break;
    case "select":
      element = (
        <select
          {...props.elementConfig}
          aria-label="Select" 
          className="input-select"
        >
        </select>
      );
      break;
    case "textarea":
      element = (
        <textarea
          {...props.elementConfig}
          aria-label="Textarea"
          className="input-textarea"
        />
      );
      break;
  }
  return (
    <div className="input-container">
      {element}
      <label htmlFor={props.labelConfig.labelName} className="label-animation">
        <span className="input-animation">
          {props.labelConfig.labelContent}
          <span style={{ fontWeight: "bold" }}>{props.labelConfig.labelContentBold}</span>
        </span>
      </label>
    </div>
  );
};

export default Input;
