import React from "react";
import News from "./pages/News";
import Catalogue from "./pages/Catalogue";
import Details from "./pages/Details";
import Help from "./pages/Help";
import { Route } from "react-router";

const App: React.FC = () => {
  return (
    <>
      <Route exact path="/" component={News} />
      <Route exact path="/catalogue/" component={Catalogue} />
      <Route exact path="/details" component={Details} />
      <Route exact path="/help" component={Help} />
    </>
  );
};

export default App;
