import React, { useState, useEffect } from "react";
import CatalogueContainer from "../containers/CatalogueContainer/CatalogueContainer";
import Filter from "../components/Filter";

const CataloguePage = (props: any) => {
  const [state, changeState] = useState({ currentPage: [1] });
  const [genreState, changeGenreState] = useState("");
  const [ratingState, changeRatingState] = useState("");
  const [sortState, changeSortState] = useState("");
  const [orderState, changeOrderState] = useState("");
  const [keywordState, changeKeywordState] = useState("");

  const handleGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeGenreState(e.target.value);
  };

  const handleRating = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeRatingState(e.target.value);
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeSortState(e.target.value);
  };

  const handleOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeOrderState(e.target.value);
  };

  const handleKeyword = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeKeywordState(e.target.value);
  };

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
  console.log("LALA", props.location.param1);

  return (
    <>
      <Filter
        handleGenre={handleGenre}
        handleSort={handleSort}
        handleOrder={handleOrder}
        handleRating={handleRating}
        handleKeyword={handleKeyword}
      />
      <div className="grid">
        {state.currentPage.map(x => (
          <CatalogueContainer
            key={x}
            page={x}
            genre={`${
              typeof props.location.param1 === "undefined"
                ? genreState
                : props.location.param1
            }`}
            sort={sortState}
            order={orderState}
            rating={ratingState}
            keyword={keywordState}
          />
        ))}
      </div>
    </>
  );
};

export default CataloguePage;
