import { createContext, useReducer } from "react";
import { INITIAL_STATE, themeReducer } from "./reducers/ThemeReducer";

export const ThemeContext = createContext();


export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  return (
    <ThemeContext.Provider value={{state, dispatch}}>{props.children}</ThemeContext.Provider>
  );
};