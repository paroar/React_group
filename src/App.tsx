import React from "react";
import "./index.css";
import { Route, Switch } from "react-router";
import Catalogue from "./components/pages/Catalogue";
import Details from "./components/pages/Details";
import Help from "./components/pages/Help";
import Error from "./components/pages/Error";
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/catalogue" component={Catalogue} />
        <Route exact path="/catalogue/:slug" component={Details} />
        <Route exact path="/news" component={News} />
        <Route exact path="/help" component={Help} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
