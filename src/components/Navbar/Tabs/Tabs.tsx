import React from "react";
import { Link } from "react-router-dom";
import { TabsProps } from "../../../utils/types";

const tabList = [
  { name: "home", path: "" },
  { name: "search", path: "search" },
  { name: "catalogue", path: "catalogue" },
  { name: "user", path: "user" },
  { name: "help", path: "help" }
];

type TabProps = {
  name: string;
  path: string;
  fn: any;
};

const Tab: React.FC<TabProps> = ({ name, path, fn }) => {
  return (
    <li onClick={fn} className="nav-links__li">
      <Link to={`/${path}`}>{name}</Link>
    </li>
  );
};

const Tabs: React.FC<TabsProps> = ({ handleIsOpen }) => {
  return (
    <>
      {tabList.map(tab => (
        <Tab key={tab.path} name={tab.name} path={tab.path} fn={handleIsOpen} />
      ))}
    </>
  );
};

export default Tabs;
