import React from "react";
import News from "./pages/News";
import Catalogue from "./pages/Catalogue";
import Details from "./pages/Details";
import Help from "./pages/Help";
import { Route } from "react-router";

const App: React.FC = () => {
  return (
    <>
      <Route path="/" component={News} />
      <Route path="/catalogue/" component={Catalogue} />
      <Route path="/details" component={Details} />
      <Route path="/help" component={Help} />
    </>
  );
};

export default App;
