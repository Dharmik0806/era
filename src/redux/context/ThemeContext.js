import React, { createContext, useReducer } from "react";
import { themeReducer } from "../reducer/theme.reducer";
import * as ActionType from '../ActionType'

const ThemeContext = createContext()

const initState = {
    themeStyle: 'light'
}

export const ThemeProvider = ({children}) => {
    const [state, dispatch] = useReducer(themeReducer, initState);

    const themeToggle = (themVal) => {
        console.log(themVal);
        const newThemVal = themVal === "light" ? "dark" : "light"

        dispatch({
            type : ActionType.THEME_TOGGLE , payload : newThemVal
        })
    }

    return(
        <ThemeContext.Provider
            value={{
                ...state,
                themeToggle
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;