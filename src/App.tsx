import React, { useState } from "react";
import { Route, Switch } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import ActorPage from "./pages/ActorPage";
import HelpPage from "./pages/HelpPage";
import CataloguePage from "./pages/CataloguePage";
import MovieInfoPage from "./pages/MovieInfoPage";
import ErrorPage from "./pages/ErrorPage";
import SearchPage from "./pages/SearchPage";
import UserPage from "./pages/UserPage";
import DashboardPage from "./pages/DashboardPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/SignUp/PrivateRoute";
import { LanguageContext, Lang } from "./contexts/LanguageContext";
import { GenreContext } from "./contexts/GenreContext";
import { AuthProvider } from "./contexts/Auth";

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
      <AuthProvider>
        <LanguageContext.Provider value={value}>
          <GenreContext.Provider value={valueGenre}>
            <Navbar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/catalogue" component={CataloguePage} />
              <Route exact path="/catalogue/:slug" component={MovieInfoPage} />
              <Route exact path="/actor/:slug" component={ActorPage} />
              <Route exact path="/help" component={HelpPage} />
              <Route exact path="/search" component={SearchPage} />
              <Route exact path="/user" component={UserPage} />
              <PrivateRoute exact path="/admin" component={DashboardPage} />
              <Route component={ErrorPage} />
            </Switch>
          </GenreContext.Provider>
          <Footer />
        </LanguageContext.Provider>
      </AuthProvider>
    </>
  );
};

export default App;

        