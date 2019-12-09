import React from "react";
import Input from "../Help/ContactForm/Input/Input";
import ButtonComponent from "../Help/ButtonComponent/ButtonComponent";

const SignUpForm: React.FC = () => {
    return (
        <>
            <form className="help-form">
                <Input
                    labelName="first_name"
                    labelContent="First Name"    
                    inputName="input"
                    inputType="text"
                />
                <Input
                    labelName="last_name"
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
                <ButtonComponent
                    action="Sign Up"
                    class="btn btn-submit"
                >
                </ButtonComponent>
            </form>
        </>
        
    );
};

export default SignUpForm;