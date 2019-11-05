import React from "react";
import { Route, Switch } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Actor from "./containers/Actor";
import News from "./pages/News";
import Help from "./pages/Help";
import Catalogue from "./pages/Catalogue";
import MovieInfo from "./pages/MovieInfo";
import Error from "./pages/Error";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/catalogue" component={Catalogue} />
        <Route exact path="/catalogue/:slug" component={MovieInfo} />
        <Route exact path="/actor/:slug" component={Actor} />
        <Route exact path="/news" component={News} />
        <Route exact path="/help" component={Help} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
