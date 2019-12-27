import React, { createContext, useState } from "react";

const LangContext = createContext({
  lang: "en"
});

const LangProvider = (props: any) => {
  const [lang, setLang] = useState("en");

  const handleLang = (language:string) => {
    setLang(language);
  }

  const language = {
    lang,
    handleLang
  };

  return (
    <LangContext.Provider value={language}>
      {props.children}
    </LangContext.Provider>
  );
};

const LangConsumer = LangContext.Consumer;
export { LangProvider, LangConsumer };
