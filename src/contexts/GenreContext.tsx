import { createContext } from "react";

export const GenreContext = createContext({
    genre: "",
    handleGenre: (_genre: string) => {}
});