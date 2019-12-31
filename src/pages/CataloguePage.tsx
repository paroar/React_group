import React, { useState, useEffect } from "react";
import CatalogueContainer from "../containers/CatalogueContainer/CatalogueContainer";
import Filter from "../components/Filter";

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

  if (props.location.param1) {
    return (
      <>
        <Filter />
        <div className="grid">
          {state.currentPage.map(x => (
            <CatalogueContainer key={x} page={x} id={props.location.param1} />
          ))}
        </div>
      </>
    );
  } else if (
    props.location.param2 ||
    props.location.param3 ||
    props.location.param4 ||
    props.location.param5 ||
    props.location.param6
  ) {

    return (
      <>
      <Filter />
      <div className="grid">
        {state.currentPage.map(x => (
          <CatalogueContainer
            key={x}
            page={x}
            genre={props.location.param2}
            sort={props.location.param3}
            order={props.location.param4}
            rating={props.location.param5}
            keyword={props.location.param6}
          />
        ))}
      </div>
      </>
    );
  } else {
    return (
      <>
      <Filter />
      <div className="grid">
        {state.currentPage.map(x => (
          <CatalogueContainer key={x} page={x} />
        ))}
      </div>
      </>
    );
  }
};

export default CataloguePage;
