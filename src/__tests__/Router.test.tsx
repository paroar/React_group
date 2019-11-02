import { waitForElement } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import App from "../App";
import { renderRouter } from "../utils/tests";

test("app renders Home and I can navigate to catalogue, news, help pages", async () => {
  const { getByTestId, queryByTestId, history } = renderRouter(<App />);
  expect(getByTestId("home-page")).toBeInTheDocument();
  expect(queryByTestId("catalogue-page")).not.toBeInTheDocument();
  expect(queryByTestId("news-page")).not.toBeInTheDocument();
  expect(queryByTestId("help-page")).not.toBeInTheDocument();
  expect(queryByTestId("error-page")).not.toBeInTheDocument();

  history.push("/catalogue");
  await waitForElement(() => getByTestId("catalogue-page"));
  expect(queryByTestId("catalogue-page")).toBeInTheDocument();
  expect(queryByTestId("home-page")).not.toBeInTheDocument();
  expect(queryByTestId("news-page")).not.toBeInTheDocument();
  expect(queryByTestId("help-page")).not.toBeInTheDocument();
  expect(queryByTestId("error-page")).not.toBeInTheDocument();

  history.push("/catalogue/somethin-that-does-not-match]");
  await waitForElement(() => getByTestId("details-page"));
  expect(queryByTestId("news-page")).not.toBeInTheDocument();
  expect(queryByTestId("catalogue-page")).not.toBeInTheDocument();
  expect(getByTestId("navbar")).toBeInTheDocument();
  //expect(getByTestId("error-page")).toBeInTheDocument(); Preguntar al profesor
});

test("landing on a bad page shows error page", () => {
  const history = createMemoryHistory({
    initialEntries: ["/something-that-does-not-match"]
  });

  const { getByTestId, queryByTestId } = renderRouter(<App />, { history });
  expect(queryByTestId("news-page")).not.toBeInTheDocument();
  expect(queryByTestId("catalogue-page")).not.toBeInTheDocument();
  expect(getByTestId("navbar")).toBeInTheDocument();
  expect(getByTestId("error-page")).toBeInTheDocument();
});
