import React, { ChangeEvent } from "react";
import Input, { InputProps } from "../Help/ContactForm/Input/Input";
import app from "../../config/base";
import { AuthContext } from "../../contexts/Auth";
import { withRouter, Redirect, RouteComponentProps } from "react-router";


class SignInForm extends React.Component<RouteComponentProps> {
    state = {
        signIn: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    name: 'email',
                    required: true
                },
                labelConfig: {
                    labelName: 'email',
                    labelContent: 'Email'
                },
                value: '',
                valid: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    name: 'password', 
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
    static contextType = AuthContext;

    //@ts-ignore
    handleInputChange = (event: ChangeEvent<HTMLInputElement>, identifier: string) => {
        const updatedForm = {...this.state.signIn}
        console.log(updatedForm);
        //@ts-ignore
        const updatedFormElement = {...updatedForm[identifier]};
        updatedFormElement.value = event.target.value;
        //@ts-ignore
        updatedForm[identifier] = updatedFormElement;
        this.setState({signIn: updatedForm});
    }

    async handleSignIn(event: React.FormEvent<HTMLInputElement>) {
        event.preventDefault();
        try {
            await app
            .auth()
            .signInWithEmailAndPassword(this.state.signIn.email.value, this.state.signIn.password.value);
            this.props.history.push("/admin");
        } catch (error) {
            alert(error);
        }
    };
    

    render() {
        const { currentUser } = this.context;
        if (currentUser) {
            console.log(this.context);
            return (
                <Redirect to="/admin" />
            ); 
        } 


        const formElements: {id: string, config: InputProps}[] = [];
        for (let key in this.state.signIn) {
            formElements.push({
                id: key,
                //@ts-ignore
                config: this.state.signIn[key]
            })
        }

        let form = (
            //@ts-ignore
            <form className="sign-in-form" onSubmit={this.handleSignIn.bind(this)}>
                <h2>Sign In</h2>
                {formElements.map(formElement => (
                    <Input
                        key = {formElement.id}
                        elementType = {formElement.config.elementType}
                        elementConfig = {formElement.config.elementConfig}
                        labelConfig = {formElement.config.labelConfig}
                        value = {formElement.config.value}
                        changed = {(event: React.ChangeEvent<HTMLInputElement>) => this.handleInputChange(event, formElement.id)}
                    />
                ))}
                <button type="submit" className="btn-form">
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
//@ts-ignore
export default withRouter(SignInForm);