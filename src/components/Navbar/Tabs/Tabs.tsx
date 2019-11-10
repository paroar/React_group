import React from "react";
import { Link } from "react-router-dom";

class Tabs extends React.Component<any> {

  not() {
    this.props.handler.setState({
      crossed: !this.props.handler
    });
  }

  render() {
    return (
      <ul className="navbar--list" onClick={() => this.not}>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/catalogue">
          <li>Catalogue</li>
        </Link>
        <Link to="/news">
          <li>News</li>
        </Link>
        <Link to="/help">
          <li>Help</li>
        </Link>
      </ul>
    );
  }
}

export default Tabs;
