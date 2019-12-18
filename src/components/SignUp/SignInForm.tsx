import React, { Component } from "react";
import Input, { InputProps } from "../Help/ContactForm/Input/Input";

class SignInForm extends Component {
    state = {
        signIn: {
            username: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    required: true
                },
                labelConfig: {
                    labelName: 'username',
                    labelContent: 'Username'
                },
                value: '',
                valid: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    required: true
                },
                labelConfig: {
                    labelName: 'password',
                    labelContent: 'Password'
                },
                value: '',
                valid: false
            }
        }
    }
    // handleSubmit = ( event ) => {
    //     event.preventDefault();
    //     const formData;
    // }
    validate(value: any, rules: any) {
        let isValid = false;
        if (rules.required) {
            isValid = value.trim() !== '';
        }
        return isValid;
    }

    handleInputChange = (event: any, inputId: any) => {
        const updatedForm = {...this.state.signIn};
        //@ts-ignore
        const updatedElement = {...updatedForm[inputId]};
        updatedElement.value = event.target.value;
        updatedElement.value = this.validate.bind(updatedElement.value, updatedElement.config);
        console.log(updatedElement);
        //@ts-ignore
        updatedForm[inputId] = updatedForm;
        this.setState({signIn: updatedForm});
    }
    
    render() {
        const formElements: {id: string, config: InputProps}[] = [];
        for (let key in this.state.signIn) {
            formElements.push({
                id: key,
                //@ts-ignore
                config: this.state.signIn[key]
            })
        }

        let form = (
            <form className="sign-in-form">
                <h2>Sign In</h2>
                {formElements.map(formElement => (
                    <Input
                        key = {formElement.id}
                        elementType = {formElement.config.elementType}
                        elementConfig = {formElement.config.elementConfig}
                        labelConfig = {formElement.config.labelConfig}
                        value = {formElement.config.value}
                        changed = {(event: any) => this.handleInputChange.bind(event, formElement.id)}
                    />
                ))}
                <button className="btn-form">
                    Send
                </button>
            </form>
        );

        return (
            <div className="form-container contact-form-content sign-in-container">
                {form}
            </div>
        );
    };
}

export default SignInForm;