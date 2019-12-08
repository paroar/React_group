import React from "react";
import Input from "./Input/Input";
/*import SideImage from "./../../../img/2001.jpg";*/

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

export default ContactForm;



/*<img src={SideImage} alt="contact"/>*/
