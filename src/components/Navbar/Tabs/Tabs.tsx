import React from "react";
import { Link } from "react-router-dom";
import { TabsProps } from "../../../utils/types";
import tabs from "./lang";
import { LangConsumer } from "../../../contexts/LangContext";

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
  return (
    <LangConsumer>
      {value => {
        const {lang} = value;
        return (
          <ul
            className={"nav-links " + (isOpen ? "open" : "")}
            onClick={handleIsOpen}
          >
            //@ts-ignore
            {tabs["tabList"].map(tab => (
              <Tab
                key={tab.path}
                //@ts-ignore
                name={tab.name[lang]}
                path={tab.path}
                fn={handleIsOpen}
              />
            ))}
          </ul>
        );
      }}
    </LangConsumer>
  );
};

export default Tabs;
