import React, { Component } from "react";
import Input, { InputProps } from "./Input/Input";

class ContactForm extends Component {
    state = {
        contact: {
            person_name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    required: true
                },
                labelConfig: {
                    labelName: 'first_name',
                    labelContent: 'Your ',
                    labelContentBold: 'Name *'
                },
                value: ''
            },
            person_email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    required: true
                },
                labelConfig: {
                    labelName: 'person_email',
                    labelContent: 'Your ',
                    labelContentBold: 'E-mail *'
                },
                value: ''
            },
            subject: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    required: true
                },
                labelConfig: {
                    labelName: 'subject',
                    labelContent: 'Subject'
                },
                value: ''
            },
            message: {
                elementType: 'textarea',
                elementConfig: {
                    placeholder: 'Write your message here...'
                },
                labelConfig: {
                    labelName: 'message'
                },
                value: ''
            }
        }
    }

    handleInputChange = (event: { target: any; }, inputId: string) => {
        const updatedForm = {...this.state.contact};
        //@ts-ignore
        const updatedElement = {...updatedForm[inputId]};
        updatedElement.value = event.target.value;
        //@ts-ignore
        updatedForm[inputId] = updatedForm;
        this.setState({contact: updatedForm});
    }

    render() {
        const formElements: {id: string, config: InputProps}[] = [];
        for (let key in this.state.contact) {
            formElements.push({
                id: key,
                //@ts-ignore
                config: this.state.contact[key]
            });
        }

        let form = (
            <form className="help-form">
                <h2>Get in touch</h2>
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
            <div className="contact-form-wrapper">
                <div className="contact-form-image"></div>
                <div className="contact-form-content">
                    {form}
                </div>
            </div>
        );

    };
}

export default ContactForm;