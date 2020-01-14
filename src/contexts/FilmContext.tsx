import { createContext } from "react";

export const FilmContext = createContext({
    films: [],
    handleFilms: (_films: never[]) => {}
});