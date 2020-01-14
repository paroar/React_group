import { createContext } from "react";

export type Lang = "en" | "es"



export const LanguageContext = createContext<{lang: Lang, handleLanguage: (lang: Lang) => void}>({
    lang : "en" ,
    handleLanguage: (_lang: string) => {}
});