import { useEffect, useMemo, useReducer } from "react"
import { countriesReducer } from "../store/reducers"
import { URL } from "./constants"
import {FETCH_ERROR, FETCH_SUCCESS} from "../constants"

const initialState = {
	countries: [],
	isLoading: true,
	error: "",
};

export const useFetchCountries = () => {
	const [{ countries, isLoading, error }, dispatch] = useReducer(
		countriesReducer,
		initialState,
	);

	useEffect(() => {
		const fetchCountries = async () => {
			try {
				const res = await fetch(URL.COUNTRIES)
				const data = await res.json()
				dispatch({ type: FETCH_SUCCESS, payload: data })
			} catch (error) {
				dispatch({ type: FETCH_ERROR })
			}
		}

		fetchCountries()
	}, []);

	const sortedCountries = useMemo(() => {
		return countries.sort((a, b) =>
			a.name.official.localeCompare(b.name.official),
		);
	}, [countries])

	return { countries: sortedCountries, isLoading, error }
}
