import React from "react";
import { Link } from "react-router-dom";

class Tabs extends React.Component<any> {

  render() {
    return (
      <ul className="navbar--list">
        <Link to="/">
          <li onClick={this.props.not}>Home</li>
        </Link>
        <Link to="/catalogue">
          <li onClick={this.props.not}>Catalogue</li>
        </Link>
        <Link to="/news">
          <li onClick={this.props.not}>News</li>
        </Link>
        <Link to="/help">
          <li onClick={this.props.not}>Help</li>
        </Link>
      </ul>
    );
  }
}

export default Tabs;
