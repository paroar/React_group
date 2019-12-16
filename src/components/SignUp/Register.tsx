import React, { Component } from "react";
import Input, { InputProps } from "../Help/ContactForm/Input/Input";

class RegisterForm extends Component {
    state = {
        signUp: {
            first_name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    labelName: 'first_name',
                    labelContent: 'First Name'
                },
                value: ''
            },
            last_name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    labelName: 'last_name',
                    labelContent: 'Last Name'
                },
                value: ''
            },
            username: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    labelName: 'username',
                    labelContent: 'Userame'
                },
                value: ''
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    labelName: 'password',
                    labelContent: 'Password'
                },
                value: ''
            },
            password_repeat: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    labelName: 'password_repeat',
                    labelContent: 'Repeat Password'
                },
                value: ''
            },
            submit: {
                elementType: 'input',
                elementConfig: {
                    type: 'submit',
                    labelName: 'submit_signup',
                },
                value: ''
            }
            //para select podría ser -> options: [{value: '', name: '', etc}]
        }
    }

    render() {
        const formElements: {id: string, config: InputProps}[] = [];
        for (let key in this.state.signUp) {
            //name, street, etc
            formElements.push({
                id: key,
                //@ts-ignore
                config: this.state.signUp[key]
            });
        }
        let form = (
            <form>
                {formElements.map((formElement) => {
                    <Input
                        key = {formElement.id}
                        elementType = {formElement.config.elementType}
                        elementConfig = {formElement.config.elementConfig}
                        labelConfig = {formElement.config.labelConfig}
                        value = {formElement.config.value}
                    />
                })}
            </form>
        );

        return (
            <div></div>
        )
    }
}


export default RegisterForm;
