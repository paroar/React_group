import React from "react";
import News from "./pages/News";
import Catalogue from "./pages/Catalogue";
import Details from "./pages/Details";
import Help from "./pages/Help";
import Error from "./pages/Error";

const App: React.FC = () => {
  return (
    <div data-testid="main">
      <News/>
      <Catalogue/>
      <Details/>
      <Help/>
      <Error/>
    </div>
  )
};

export default App;
