import {FETCH_SUCCESS, FETCH_ERROR} from "../constants"
import {Countries, Country} from '../types'
import {CountriesState, CountryState} from "./types"

type CountriesAction =
	| { type: typeof FETCH_SUCCESS; payload: Countries[] }
	| { type: typeof FETCH_ERROR };

export const countriesReducer = (
	state: CountriesState,
	action: CountriesAction,
) => {
	switch (action.type) {
		case FETCH_SUCCESS:
			return {
				...state,
				countries: action.payload,
				loading: false,
			};
		case FETCH_ERROR:
			return {
				...state,
				loading: false,
				error: "something went wrong",
			};
		default:
			return state
	}
}

type CountryAction =
	| { type: typeof FETCH_SUCCESS; payload: Country[] }
	| { type: typeof FETCH_ERROR };

export const countryReducer = (state: CountryState, action: CountryAction) => {
	switch (action.type) {
		case FETCH_SUCCESS:
			return {
				...state,
				country: action.payload,
				loading: false,
			};
		case FETCH_ERROR:
			return {
				...state,
				loading: false,
				error: "Something went wrong",
			};
		default:
			return state
	}
}