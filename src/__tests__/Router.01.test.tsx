import { waitForElement } from "@testing-library/react";
import React from "react";
import App from "../App";
import { renderRouter } from "../utils/tests";

test("app renders News, Catalogue, Details and Help and I can navigate to those pages", async () => {
  const { getByTestId, queryByTestId, history } = renderRouter(<App />);
  expect(getByTestId("news-page")).toBeInTheDocument();
  expect(queryByTestId("catalogue-page")).not.toBeInTheDocument();
  expect(queryByTestId("details-page")).not.toBeInTheDocument();
  expect(queryByTestId("help-page")).not.toBeInTheDocument();

  history.push("/catalogue");
  await waitForElement(() => getByTestId("catalogue-page"));
  expect(queryByTestId("news-page")).toBeInTheDocument();
});

test("landing on a bad page shows news page", () => {
  const { getByTestId, queryByTestId } = renderRouter(<App />);
  expect(getByTestId("news-page")).toBeInTheDocument();
  expect(queryByTestId("catalogue-page")).not.toBeInTheDocument();
});
