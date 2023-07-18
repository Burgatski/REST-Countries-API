import { useReducer, useEffect } from "react"
import { countryReducer } from "../store/reducers"
import { FETCH_SUCCESS, FETCH_ERROR } from '../constants'
import {URL} from "./constants"

const initialState = {
	country: [],
	isLoading: true,
	error: "",
};

export const useFetchCountry = (code: string | undefined) => {
	const [{ country, isLoading, error }, dispatch] = useReducer(
		countryReducer,
		initialState,
	)

	useEffect(() => {
		const requestDataCountry = async () => {
			try {
				const res = await fetch(`${URL.COUNTRY}${code}`)
				const data = await res.json();
				dispatch({ type: FETCH_SUCCESS, payload: data })
			} catch (error) {
				dispatch({ type: FETCH_ERROR })
			}
		};

		requestDataCountry()
	}, [code]);

	return { country, isLoading, error }
}
