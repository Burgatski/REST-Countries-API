import {
	createContext,
	useReducer,
	useContext,
	useCallback,
	useMemo,
	ReactNode
} from "react"
import {useFetchCountries} from '../hooks/fetch-countries'
import { SET_SEARCH, SET_SELECT } from "../constants"
import { formReducer } from "../store/reducers"

const CountriesContext = createContext({} as CountriesContextType)

const initialState = {
	search: "",
	select: "",
};

export function CountriesProvider({ children }: { children: ReactNode }) {
	const { countries, isLoading, error } = useFetchCountries();
	const [{ search, select }, dispatch] = useReducer(formReducer, initialState);

	const setSearch = useCallback((search: string) => {
		dispatch({ type: SET_SEARCH, payload: search })
	}, []);

	const filteredCountries = useMemo(() => {
		return countries.filter(({ name: { official } }) =>
			official.toLowerCase().includes(search.toLowerCase()),
		);
	}, [countries, search])

	const setSelect = useCallback((select: string) => {
		dispatch({ type: SET_SELECT, payload: select })
	}, [])

	const selectRegion = useMemo(() => {
		return countries.filter(({ region }) => region.includes(select))
	}, [countries, select])

	const countrySorted = search ? filteredCountries : selectRegion
	return (
		<CountriesContext.Provider
			value={{
				countries: countrySorted,
				isLoading,
				error,
				setSearch,
				search,
				setSelect,
				select,
			}}
		>
			{children}
		</CountriesContext.Provider>
	);
}

export const useCountriesContext = () => useContext(CountriesContext)
