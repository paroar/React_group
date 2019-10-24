import React from "react";
import News from "./pages/News";
import Catalogue from "./pages/Catalogue";
import Details from "./pages/Details";
import Help from "./pages/Help";
import { Route, Switch } from "react-router";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={News} />
        <Route exact path="/catalogue/" component={Catalogue} />
        <Route exact path="/catalogue/:slug" component={Details} />
        <Route exact path="/help" component={Help} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
