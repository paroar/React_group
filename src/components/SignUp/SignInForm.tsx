import React from "react";
import Input from "../Help/ContactForm/Input/Input";

const SignInForm: React.FC = () => {
    return (
        <div className="form-container contact-form-content sign-in-container">
            <form action="#" className="sign-in-form">
                <h2>Sign In</h2>
                <Input
                    labelName="username"
                    labelContent="Username"    
                    inputName="input"
                    inputType="text"
                />
                 <Input
                    labelName="password"
                    labelContent="Password"    
                    inputName="input"
                    inputType="password"
                />
                <button className="btn-form">
                    Send
                </button>
            </form>
        </div>
        
    );
};

export default SignInForm;