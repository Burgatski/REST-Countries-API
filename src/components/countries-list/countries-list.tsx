import React from 'react'
import {CardListWrapper} from "./style"
import {CountryCard} from "./country-card"
import {useCountriesContext} from "../../context/countries-context"
import {Loader} from "../loader"
import {ErrorPage} from "../../pages/error"

export const CountriesList: React.FC = () => {
    const {countries, isLoading, error} = useCountriesContext()
    return (
        <>
            {error && <ErrorPage/>}
            {isLoading && <Loader/>}
            <CardListWrapper>
                {countries.map(
                    ({capital, name, flags, population, region, cca3}) => (
                        <CountryCard
                            key={name.official}
                            name={name.official}
                            capital={capital}
                            flags={flags}
                            region={region}
                            population={population}
                            cca3={cca3}
                        />)
                )
                }
            </CardListWrapper>
        </>
    )
}