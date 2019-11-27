import React from "react";
import questionData from "./../../../assets/questions.json";
import Collapsible from "../Collapsible/Collapsible";
import { FaSearch } from "react-icons/fa";

const FAQ = () => {
    return (
        <div className="faq-wrapper">
            <h2>Frequently Asked Questions</h2>
            <form action="">
                <div className="local-search-wrapper">
                    <input type="search" className="local-search" placeholder="Search Our FAQ" />
                    <FaSearch className="local-search-icon"></FaSearch>
                </div>
            </form>
            {
                questionData.map((detail, _index) => {
                    return (
                    <Collapsible
                        title={detail.topicId}
                    >
                        <h2>{detail.question}</h2>
                        <p>{detail.answer}</p>
                    </Collapsible>
                    )
                })
            }
        </div>
    )
}

export default FAQ;