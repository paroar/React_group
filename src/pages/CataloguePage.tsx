import React, { Component } from "react";
import CatalogueContainer from "../containers/CatalogueContainer";

class CataloguePage extends Component {
  state = {
    currentPage: [1]
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        this.setState({
          currentPage: this.state.currentPage.concat(
            this.state.currentPage.length + 1
          )
        });
      }
    });
  }

  componentWillUnmount() {}

  render() {
    console.log(this.state.currentPage);
    return (
      <div className="grid">
        {this.state.currentPage.map(x => (
          <CatalogueContainer key={x} page={x} />
        ))}
      </div>
    );
  }
}

export default CataloguePage;
