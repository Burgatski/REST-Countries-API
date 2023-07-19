import React, { ReactElement } from "react"
import { render, RenderOptions } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { ThemesProvider } from '../context/theme-context'
import { CountriesProvider } from "../context/countries-context"

const AllProviders = ({ children }: ChildrenProp) => {
	return (
		<BrowserRouter>
			<ThemesProvider>
				<CountriesProvider>
					{children}
				</CountriesProvider>
			</ThemesProvider>
		</BrowserRouter>
	);
};

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, "wrapper">,
) =>
	render(ui, {
		wrapper: AllProviders,
		...options,
	});

export * from "@testing-library/react"
export { customRender as render }
