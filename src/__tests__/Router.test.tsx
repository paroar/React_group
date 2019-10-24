import { waitForElement } from "@testing-library/react";
import { createMemoryHistory } from "history";
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
  expect(queryByTestId("news-page")).not.toBeInTheDocument();

  history.push("/catalogue/1");
  await waitForElement(() => getByTestId("details-page"));
  expect(queryByTestId("news-page")).not.toBeInTheDocument();
  expect(queryByTestId("catalogue-page")).not.toBeInTheDocument();
});

test("landing on a bad page shows news page", () => {
  const history = createMemoryHistory({
    initialEntries: ["/something-that-does-not-match"]
  });

  const { queryByTestId } = renderRouter(<App />, { history });
  expect(queryByTestId("news-page")).not.toBeInTheDocument();
  expect(queryByTestId("catalogue-page")).not.toBeInTheDocument();
});
