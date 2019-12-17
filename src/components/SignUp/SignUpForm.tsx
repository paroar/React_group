import React, { Component } from "react";
import Input, { InputProps } from "../Help/ContactForm/Input/Input";

class SignUpForm extends Component {
    state = {
        signUp: {
            first_name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                },
                labelConfig: {
                    labelName: 'first_name',
                    labelContent: 'First Name'
                },
                value: ''
            },
            last_name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                },
                labelConfig: {
                    labelName: 'last_name',
                    labelContent: 'Last Name'
                },
                value: ''
            },
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
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                },
                labelConfig: {
                    labelName: 'password',
                    labelContent: 'Password'
                },
                value: ''
            },
            password_repeat: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                },
                labelConfig: {
                    labelName: 'password_repeat',
                    labelContent: 'Repeat Password'
                },
                value: ''
            },
            submit: {
                elementType: 'input',
                elementConfig: {
                    type: 'submit',
                },
                labelConfig: {
                    labelName: 'submit_signup',
                },
                value: ''
            }
            //para select podría ser -> options: [{value: '', name: '', etc}]
        }
    }

    render() {
        const formElements = {...this.state};
        //const formElements: {id: string, config: InputProps}[] = [];
        //for (let key in this.state.signUp) {
            //name, street, etc
            // formElements.push({
            //     id: key,
            //     config: this.state.signUp[key]
            // });
        //}
        let form = (
            <form>
                {[].map.call(formElements,(formElement) => {
                    <Input
                        key = {formElement["id"]}
                        elementType = {formElement["config"]["elementType"]}
                        elementConfig = {formElement["config"]["elementConfig"]}
                        labelConfig = {formElement["config"]["labelConfig"]}
                        value = {formElement["config"]["value"]}
                    />
                })}
            </form>
        );

        return (
            <div>
                <h2>Create Your Account</h2>
                <button type="submit">Sign Up</button>
            </div>
        )
    }
}


export default SignUpForm;
