import React from 'react'
import {createContext, ReactNode, useContext, useReducer} from "react"
import { ThemeProvider } from 'styled-components';
import {ThemeContextType} from "./types"
import {dark, light} from "../global/theme";

const ThemeContext = createContext({} as ThemeContextType)

const initialState = false

export const ThemesProvider = ({ children }: { children: ReactNode }) => {
	const [isDark, setDark] = useReducer(
		(prevMode: boolean) => !prevMode,
		initialState,
	);
	console.log('darkTHE')
	return (
		<ThemeContext.Provider value={{ isDark, setDark }}>
			<ThemeProvider theme={isDark ? dark : light}>
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	);
}

export const useThemeContext = () => useContext(ThemeContext);
