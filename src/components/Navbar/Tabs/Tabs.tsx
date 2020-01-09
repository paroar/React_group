import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TabsProps } from "../../../utils/types";
import tabs from "./lang";
import { LanguageContext } from "../../../contexts/LanguageContext";

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

const Tabs: React.FC<TabsProps> = ({ isOpen, handleIsOpen }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <ul
      className={"nav-links " + (isOpen ? "open" : "")}
      onClick={handleIsOpen}
    >
      {tabs["tabList"].map(tab => (
        <Tab
          key={tab.path}
          name={tab.name[lang]}
          path={tab.path}
          fn={handleIsOpen}
        />
      ))}
    </ul>
  );
};

export default Tabs;
