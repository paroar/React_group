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
import { LanguageContext, Lang } from "./contexts/LanguageContext";
import { GenreContext } from "./contexts/GenreContext";

const App: React.FC = () => {
  const [lang, setLang] = useState<Lang>("en");
  const [genre, changeGenreState] = useState("");

  const handleLanguage = (lang: Lang) => {
    setLang(lang);
  };

  const handleGenre = (genre: string) => {
    changeGenreState(genre);
  };

  const value = { lang, handleLanguage };
  const valueGenre = { genre, handleGenre };

  return (
    <>
      <LanguageContext.Provider value={value}>
        <Navbar />
        <GenreContext.Provider value={valueGenre}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/catalogue" component={CataloguePage} />
            <Route exact path="/catalogue/:slug" component={MovieInfoPage} />
            <Route exact path="/actor/:slug" component={ActorPage} />
            <Route exact path="/help" component={HelpPage} />
            <Route exact path="/search" component={SearchPage} />
            <Route component={ErrorPage} />
          </Switch>
        </GenreContext.Provider>
        <Footer />
      </LanguageContext.Provider>
    </>
  );
};

export default App;
