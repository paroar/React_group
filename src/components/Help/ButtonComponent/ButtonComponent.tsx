import React from "react";

export type ButtonProps = {
  //action es el texto que queremos que tenga el botón
  action: string;
  class: string;
  onClick?: any;
  //children va principalmente para links o popups
  children?: React.ReactNode;
};

const ButtonComponent = (props: ButtonProps) => {
  return (
    <button className={props.class} onClick={props.onClick}>
      {props.action}
      {props.children}
    </button>
  );
};

export default ButtonComponent;
