import React, { ChangeEvent, useState, useEffect } from "react";
import firebase from './../../../../config/base';

export type InputProps = {
  //elementType: input | textarea | select, etc
  elementType: string,
  elementConfig: {
    type?: string,
    placeholder?: string,
    name?: string,
    options?: string[]
  },
  labelConfig: {
    labelName?: string,
    labelContent?: string,
    labelContentBold?: string
  },
  value: string | string[] | undefined,
  changed?: React.EventHandler<ChangeEvent>
}

const Input = (props: InputProps) => {
  let element = null;
  const [options, setOptions] = useState([]);
  useEffect(() => {
      const fetchFirebase = async () => {
          const db = firebase.firestore()
          const data: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData> = 
          (await db.collection("users/testUser/lists").get());
          //@ts-ignore
          setOptions(data.docs.map(doc => 
              doc.data()
          ))
      }        
      fetchFirebase()
  }, [])
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
         {options.map((op) => (
           //@ts-ignore
           <option value={op.name} key={op.name}>{op.name}</option>
         ))}
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
