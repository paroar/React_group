import React from "react";
import Input, { InputProps } from "../Help/ContactForm/Input/Input";
// import { RouteComponentProps } from "react-router";
import app from "../../config/base";
import { AuthContext } from "./../../context/Auth";
import { withRouter, Redirect, RouteComponentProps } from "react-router";

interface SignInFormProps extends RouteComponentProps<any> {

}

class SignInForm extends React.Component<SignInFormProps> {
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
        debugger
        const updatedForm = {...this.state.signIn};

        //@ts-ignore
        const updatedElement = {...updatedForm[inputId]};
        updatedElement.value = event.target.value;
        updatedElement.value = this.validate.bind(updatedElement.value, updatedElement.config);
        console.log("@@@@@", updatedForm);
        //@ts-ignore
        updatedForm[inputId] = updatedForm;
        this.setState({signIn: updatedForm});
    }
    signIn( event: any ) {
        event.preventDefault();
        app.auth().signInWithEmailAndPassword(this.state.signIn.email.value, this.state.signIn.password.value).then((_u: any) => {}).catch((error: any) => {
            console.log(error);
        })
    }

    async handleSignIn(event: Event) {
        event.preventDefault();
        debugger
        try {
            await app
            .auth()
            .signInWithEmailAndPassword(this.state.signIn.email.value, this.state.signIn.password.value);
            this.props.history.push("/admin");
        } catch (error) {
            alert(error);
            console.log("AAAAA",this.state.signIn.email.value);
        }
    };
    

    render() {
        const { currentUser } = this.context;
        if (currentUser) {
            console.log(this.context);
            return (
                <Redirect to="/" />
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
                        changed = {(event: Event) => this.handleInputChange(event, formElement.id)}
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