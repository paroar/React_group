import React, { useState } from "react";
import { Route, Switch } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import ActorPage from "./pages/ActorPage";
import HelpPage from "./pages/HelpPage";
import CataloguePage from "./pages/CataloguePage";
import MovieInfoPage from "./pages/MovieInfoPage";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
import SearchPage from "./pages/SearchPage";
import { LanguageContext } from "./contexts/LanguageContext";

const App: React.FC = () => {
  const [lang, setLang] = useState("es");
  const handleLanguage = (lang: string) => {
    setLang(lang);
  };

  const value = { lang, handleLanguage };

  return (
    <>
      <LanguageContext.Provider value={value}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/catalogue" component={CataloguePage} />
          <Route exact path="/catalogue/:slug" component={MovieInfoPage} />
          <Route exact path="/actor/:slug" component={ActorPage} />
          <Route exact path="/help" component={HelpPage} />
          <Route exact path="/search" component={SearchPage} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </LanguageContext.Provider>
    </>
  );
};

export default App;
