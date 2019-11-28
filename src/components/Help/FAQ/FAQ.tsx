import React from "react";
import Accordion from "./../Accordion/Accordion";
import questionData from "./../../../assets/questions.json";
import { FaSearch } from "react-icons/fa";


const FAQ = () => {
    return (
        <div className="faq-wrapper">
            <div className="faq-header">
                <h2>Have a <span style={{color: "#f76c5e"}}>Question?</span></h2>
                <p style={{letterSpacing: "0.1rem"}}>Look Here</p>
                <form action="">
                <div className="local-search-wrapper">
                    <input type="search" className="local-search" placeholder="Search Our FAQs" />
                    <FaSearch className="local-search-icon" size="1.6rem" color={"#737373"}></FaSearch>
                </div>
            </form>

            </div>
            {
                questionData.map((detail, _index) => {
                    return (
                    <Accordion
                        title={detail.topicId}
                    >
                        <h2>{detail.question}</h2>
                        <p>{detail.answer}</p>
                    </Accordion>
                    )
                })
            }
        </div>

    );
};

export default FAQ;

