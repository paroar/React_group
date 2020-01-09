import React from "react";
import { Route, Switch } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ActorPage from "./pages/ActorPage";
import NewsPage from "./pages/NewsPage";
import HelpPage from "./pages/HelpPage";
import CataloguePage from "./pages/CataloguePage";
import MovieInfoPage from "./pages/MovieInfoPage";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
import SearchPage from "./pages/SearchPage";
import UserPage from "./pages/UserPage";
import { AuthProvider } from "./context/Auth";
import PrivateRoute from "./components/SignUp/PrivateRoute";
import AdminPage from "./pages/AdminPage";

const App = () => {

  return (
    <>
          <AuthProvider>

          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/catalogue" component={CataloguePage} />
            <Route exact path="/catalogue/:slug" component={MovieInfoPage} />
            <Route exact path="/actor/:slug" component={ActorPage} />
            <Route exact path="/news" component={NewsPage} />
            <Route exact path="/help" component={HelpPage} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/user" component={UserPage} />
            <PrivateRoute exact path="/admin" component={AdminPage} />
            <Route component={ErrorPage} />
          </Switch>
          </AuthProvider>

          <Footer/>

    </>
  );
  
};

export default App;
