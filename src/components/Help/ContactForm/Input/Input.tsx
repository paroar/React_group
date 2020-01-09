import React from "react";

export type InputProps = {
  //elementType: input | textarea | select, etc
  elementType: string,
  elementConfig: {
    type?: string,
    placeholder?: string,
    name?: string
  },
  labelConfig: {
    labelName?: string,
    labelContent?: string,
    labelContentBold?: string
  },
  value: string | string[] | undefined,
  changed?: any
}

const Input = (props: InputProps) => {
  let element = null;
  switch (props.elementType) {
    case "input":
      element = (
        <input
          {...props.elementConfig}
          aria-label="input"
          className="input-element"
          onChange={props.changed}
        />
      );
      break;
    case "select":
      element = (
        <select
          {...props.elementConfig}
          aria-label="Select" 
          className="input-select"
          onChange={props.changed}
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
          onChange={props.changed}
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
