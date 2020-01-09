import React, { Component, useCallback } from "react";
import Input, { InputProps } from "../Help/ContactForm/Input/Input";
//import { withRouter } from "react-router";
import app from "../../config/base";

class SignUpForm extends Component {
    state = {
        signUp: {
            first_name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    required: true
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
                    required: true
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
                    required: true
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
                    required: true
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
                    required: true
                },
                labelConfig: {
                    labelName: 'password_repeat',
                    labelContent: 'Repeat Password'
                },
                value: ''
            }
            // submit: {
            //     elementType: 'input',
            //     elementConfig: {
            //         type: 'submit',
            //     },
            //     labelConfig: {
            //         labelName: 'submit_signup',
            //     },
            //     value: 'Sign Up'
            // }

            //para select podría ser -> options: [{value: '', name: '', etc}]
        }
    }

    handleInputChange = (event: { target: any; }, inputId: string) => {
        const updatedForm = {...this.state.signUp};
        //@ts-ignore
        const updatedElement = {...updatedForm[inputId]};
        updatedElement.value = event.target.value;
        //@ts-ignore
        updatedForm[inputId] = updatedForm;
        this.setState({signUp: updatedForm});
    }
    //@ts-ignore
    handleSignUp = ({ history }) => {
        useCallback(async event => {
            const { email, password } = event.target.elements;
            try {
                await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                alert(error);
            }
        }, [history]);
    }

    render() {
        const formElements: {id: string, config: InputProps}[] = [];
        for (let key in this.state.signUp) {
            formElements.push({
                id: key,
                //@ts-ignore
                config: this.state.signUp[key]
            });
        }
        let form = (
            //@ts-ignore
            <form className="sign-up-form" onSubmit={this.handleSignUp}>
                <h2>Create Your Account</h2>
                {formElements.map(formElement => (
                    <Input
                        key = {formElement.id}
                        elementType = {formElement.config.elementType}
                        elementConfig = {formElement.config.elementConfig}
                        labelConfig = {formElement.config.labelConfig}
                        value = {formElement.config.value}
                    />
                ))}
                <button className="btn-form">
                    Send
                </button>
            </form>
        );

        return (
            <div className="form-container contact-form-content sign-up-container">
                {form}
            </div>
        );
    };
}

export default SignUpForm;
