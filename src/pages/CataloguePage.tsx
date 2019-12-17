import React, { useState, useEffect } from "react";
import CatalogueContainer from "../containers/CatalogueContainer";

const CataloguePage = (props: any) => {
  const [state, changeState] = useState({ currentPage: [1] });

  useEffect(() => {
    const listener = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        changeState({
          currentPage: state.currentPage.concat(state.currentPage.length + 1)
        });
      }
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [state]);

  console.log(props);
  if (props.location.param1) {
    return (
      <div className="grid">
        {state.currentPage.map(x => (
          <CatalogueContainer key={x} page={x} id={props.location.param1} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="grid">
        {state.currentPage.map(x => (
          <CatalogueContainer key={x} page={x}/>
        ))}
      </div>
    );
  }
};

export default CataloguePage;
