import React from "react";
import Accordion from "./../Accordion/Accordion";
import questionData from "./../../../assets/questions.json";
import { FaSearch } from "react-icons/fa";

type Questions = {
  topicId: string;
  id: number;      
  question: string;
  answer: string;
}

class FAQ extends React.Component {
  state = {
    FaqState: questionData as Questions[]
  };

  searchFaq = (term: string) => {
    let results = questionData.filter(details => {
      const regex = new RegExp(`${term}`, 'gi');
      return details.topicId.match(regex) || details.question.match(regex) || details.answer.match(regex);
    });

    if (results){
      this.setState({FaqState: results});
    } else {
      this.setState({FaqState: null});
    }
  }

  handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    this.searchFaq(event.target.value);
  }

  render () {
    return (
      <div className="faq-wrapper">
        <div className="faq-header">
          <h2>
            Have a <span style={{ color: "#f76c5e" }}>Question?</span>
          </h2>
          <p style={{ letterSpacing: "0.1rem" }}>Look Here</p>
          <form action="">
            <div className="local-search-wrapper">
              <input
                //accesibilidad
                aria-label="local-search"
                type="text"
                name="local-search"
                className="local-search"
                placeholder="Search Our FAQs"
                onChange={this.handleSearch.bind(this)}
              />
              <FaSearch
                className="local-search-icon"
                size="1.6rem"
                color={"#737373"}
              />
            </div>
          </form>
        </div>
        {this.state.FaqState !== null ? 
            this.state.FaqState.map((details, _index) => {
              return (
                <Accordion title={details.topicId}>
                  <h2>{details.question}</h2>
                  <p>{details.answer}</p>
                </Accordion>
              );
            })
          : 
          null
        }
      </div>
    );
  }
};

export default FAQ;