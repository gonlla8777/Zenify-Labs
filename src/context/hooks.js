import { useContext } from "react";
import { languageContext, userContext } from ".";

export const useLanguage = () => useContext(languageContext);
export const useUser = () => useContext(userContext);
