import React from "react";
import { Route, Switch } from "react-router";
import Catalogue from "./pages/Catalogue";
import Details from "./pages/Details";
import Help from "./pages/Help";
import Error from "./pages/Error";
import Home from "./pages/Home";
import News from "./pages/News";
import Navbar from "./components/Navbar";
import Actor from "./pages/Actor/Actor";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/catalogue" component={Catalogue} />
        <Route exact path="/catalogue/:slug" component={Details} />
        <Route exact path="/actor/:slug" component={Actor} />
        <Route exact path="/news" component={News} />
        <Route exact path="/help" component={Help} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
