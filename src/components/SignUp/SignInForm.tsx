import React from "react";
import Input from "../Help/ContactForm/Input/Input";
import ButtonComponent from "../Help/ButtonComponent/ButtonComponent";

const SignInForm: React.FC = () => {
    return (
        <>
            <form className="help-form">
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
                <ButtonComponent
                    action="submit"
                    class="btn btn-submit"
                >
                    Sign In
                </ButtonComponent>

            </form>
        </>
        
    );
};

export default SignInForm;