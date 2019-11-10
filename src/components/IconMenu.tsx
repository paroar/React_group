import React, { Component } from "react";
import Tabs from "./Navbar/Tabs/Tabs";

class IconMenu extends Component {
  state = {
    crossed: true,
    handler: this
  };

  not() {
    this.setState({
      crossed: !this.state.crossed
    });
  }

  render() {
    return (
      <>
        <div
          className={`${this.state.crossed ? "menu" : "cross"}`}
          onClick={() => this.not()}
        >
          <span className="bar" />
        </div>
        <div className={`${this.state.crossed ? "overlay hidden" : "overlay"}`}>
          <Tabs handler={this.state.handler}/>
        </div>
      </>
    );
  }
}

export default IconMenu;
