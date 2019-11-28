import React from "react";
import { Link } from "react-router-dom";
import {TabsProps} from "../../../utils/types";

const Tabs:React.FC<TabsProps> = (props) => {
    return (
      <ul className="navbar--list">
        <Link to="/">
          <li onClick={props.not}>Home</li>
        </Link>
        <Link to="/search">
          <li onClick={props.not}>Search</li>
        </Link>
        <Link to="/catalogue">
          <li onClick={props.not}>Catalogue</li>
        </Link>
        <Link to="/help">
          <li onClick={props.not}>Help</li>
        </Link>
      </ul>
    );
}

export default Tabs;
