import React from "react";
import Input from "./Input/Input";
import SideImage from "./../../../img/contact01.jpg";

const ContactForm = () => {
    return (
        <div className="contact-form-wrapper">
            <div className="contact-form-image">
                <img src={SideImage} alt="contact"/>
            </div>
            <div className="contact-form-content">
                <form action="">
                    <h2>Get in Touch</h2>
                    <Input 
                        labelName="person-name"
                        labelContent="Name:"
                        inputName="input"
                        inputType="text"
                    ></Input>
                    <Input 
                        labelName="person-email"
                        labelContent="Email"
                        inputName="input"
                        inputType="email"
                    ></Input>
                    <Input 
                        labelName="subject"
                        labelContent="Subject:"
                        inputName="input"
                        inputType="text"
                    ></Input>
                    <textarea placeholder="Write your message here..."></textarea>
                    <button className="btn-form">
                        Send
                    </button>

                </form>
            </div>
        </div>
    )
}

export default ContactForm;