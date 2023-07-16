import {Countries, Country} from '../types'

export interface CountriesState {
    countries: Countries[]
    loading: boolean
    error: string
}

export interface CountryState {
    country: Country[]
    loading: boolean
    error: string
}