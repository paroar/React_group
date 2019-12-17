import React, { Component } from "react";
import Input, { InputProps } from "./Input/Input";

class ContactForm extends React.Component {
    state = {
        contact: {
            person_name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
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

    render() {
        const formElements: {id: string, config: InputProps}[] = [];
        return (

        );
    };
}

export default ContactForm;


/*import SideImage from "./../../../img/2001.jpg";*/
/*
const ContactForm = () => {
    return (
        <div className="contact-form-wrapper">
            <div className="contact-form-image">
            </div>
            <div className="contact-form-content">
                <form action="" className="help-form">
                    <h2>Get in touch</h2>
                    <Input
                        labelName="person-name"
                        labelContent="Your "
                        labelContentBold="Name *"
                        inputName="input"
                        inputType="text"
                    ></Input>
                    <Input 
                        labelName="person-email"
                        labelContent="Your "
                        labelContentBold="Email *"
                        inputName="input"
                        inputType="email"
                    ></Input>
                    <Input 
                        labelName="subject"
                        labelContent="Subject"
                        inputName="input"
                        inputType="text"
                    ></Input>
                    <textarea aria-label="Textarea" placeholder="Write your message here..."></textarea>
                    <button className="btn-form">
                        Send
                    </button>

                </form>
            </div>
        </div>
    )
}

*/


/*<img src={SideImage} alt="contact"/>*/
