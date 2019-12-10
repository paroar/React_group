import React from "react";
import Input from "../Help/ContactForm/Input/Input";

const SignUpForm: React.FC = () => {
    return (
        <div className="form-container contact-form-content sign-up-container">
            <form action="#" className="sign-up-form">
                <h2>Sign Up</h2>
                <Input
                    labelName="first-name"
                    labelContent="First Name"    
                    inputName="input"
                    inputType="text"
                />
                <Input
                    labelName="last-name"
                    labelContent="Last Name"    
                    inputName="input"
                    inputType="text"
                />
                 <Input
                    labelName="username"
                    labelContent="Username"    
                    inputName="input"
                    inputType="text"
                />
                <Input
                    labelName="email"
                    labelContent="Email Address"    
                    inputName="input"
                    inputType="email"
                />
                <Input
                    labelName="password"
                    labelContent="Password"    
                    inputName="input"
                    inputType="password"
                />
                <Input
                    labelName="password_repeat"
                    labelContent="Repeat Password"    
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

export default SignUpForm;