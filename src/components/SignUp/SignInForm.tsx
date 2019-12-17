import React, { Component } from "react";
import Input, { InputProps } from "../Help/ContactForm/Input/Input";

class SignInForm extends Component {
    state = {
        signIn: {
            username: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                },
                labelConfig: {
                    labelName: 'username',
                    labelContent: 'Username'
                },
                value: ''
            },
            password: {
                elementType: 'password',
                elementConfig: {
                    type: 'text', 
                },
                labelConfig: {
                    labelName: 'password',
                    labelContent: 'Password'
                },
                value: ''
            }
        }
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
            <div>
                <h2>Sign In</h2>
                <button type="submit">Proceed</button>
            </div>
        );
    };
}

export default SignInForm;