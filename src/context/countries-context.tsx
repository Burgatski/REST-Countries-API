import {
	createContext,
	useReducer,
	useContext,
	useCallback,
	useMemo,
	ReactNode
} from "react";
import {useFetchCountries} from "../hooks/fetch-countries";

const CountriesContext = createContext({} as any)

// export function CountriesProvider({ children }: {children: ReactNode}) {
// 	const { countries, loading, error } = useFetchCountries();
// 	return (
// 		// <CountriesContext.Provider
// 		// 	value={{
// 		// 		countries: countries,
// 		// 		loading,
// 		// 		error
// 		// 	}}
// 		// >
// 		// 	{children}
// 		// </CountriesContext.Provider>
// 	);
// }

export const useCountriesContext = () => useContext(CountriesContext)
