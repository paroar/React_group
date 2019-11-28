import React from "react";

const Input = ({labelName, labelContent, labelContentBold, inputName, inputType, placeholderText}: 
    {
        inputName: string;
        labelName?: string;
        labelContent?: string;
        labelContentBold?: string;
        inputType?: string;
        placeholderText?: string;
    }
    ) => {
    let inputElement = null;
    switch (inputName) {
        case ('input'):
            inputElement = <input className="input-element" type={inputType} required/>;
            break;
        case ('select'):
            inputElement = <select className="input-select" ></select>;
            break;
        case ('textarea'):
            inputElement = <textarea className="input-textarea" placeholder={placeholderText} />;
            break;
    }
    return (

        <div className="input-container">
            {inputElement}
            <label htmlFor={labelName} className="label-animation">
                <span className="input-animation">
                    {labelContent}
                    <span style={{fontWeight: "bold"}}>{labelContentBold}</span>
                </span>
            </label>
        </div>
    );
};

export default Input;