import React from "react";
import HelpBlock from "./HelpBlock/HelpBlock";
import { FaQuestion, FaBook, FaSpeakap} from "react-icons/fa";
import ContactForm from "./ContactForm/ContactForm";
import FAQ from "./FAQ/FAQ";

const HelpPage = () => {
    return (
        <div className="help-page__wrapper">
            <div>
                <FaBook size="2rem" />
                <HelpBlock 
                    title="Terms"
                    description="Our Terms and Conditions policy"
                    buttonText="Read"
                    buttonClass="btn btn-help"
                >
                </HelpBlock>
            </div>
            <div>
                <FaQuestion size="2rem" />
                <HelpBlock 
                    title="FAQ"
                    description="Frequently Asked Questions"
                    buttonText="Take a Look"
                    buttonClass="btn btn-help"
                >
                    <FAQ></FAQ>
                </HelpBlock>
            </div>
            <div>
                <FaSpeakap size="2rem" />
                <HelpBlock 
                    title="Contact Us"
                    description="Any doubts or questions?"
                    buttonText="Ask Away!"
                    buttonClass="btn btn-help"
                >
                    <ContactForm />
                </HelpBlock>
            </div>
        </div>
    );
};

export default HelpPage;