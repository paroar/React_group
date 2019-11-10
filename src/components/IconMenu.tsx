import React, { Component } from "react";
import Tabs from "./Navbar/Tabs/Tabs";

class IconMenu extends Component {
  state = {
    crossed: true
  };

  f(e: any) {
    e.preventDefault();
    this.setState({
      crossed: !this.state.crossed
    });
  }

  render() {
    return (
      <>
        <div
          className={`${this.state.crossed ? "menu" : "cross"}`}
          onClick={e => this.f(e)}
        >
          <span className="bar" />
        </div>
        <div className={`${this.state.crossed ? "overlay hidden" : "overlay"}`}>
          <Tabs />
        </div>
      </>
    );
  }
}

export default IconMenu;
