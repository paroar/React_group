import { createContext } from "react";

export type Lang = "en" | "es"



export const LanguageContext = createContext<{lang: Lang, handleLanguage: (lang: Lang) => void}>({
    lang : "es" ,
    handleLanguage: (_lang: string) => {}
});