import React from 'react'
import {CardListWrapper} from "./style";
import {CountryCard} from "./country-card";
import {useCountriesContext} from "../../context/countries-context";

export const CountriesList: React.FC = () => {
    const {countries, isLoading, error} = useCountriesContext()
    return (
        <CardListWrapper>
            { !isLoading ? countries.map(
                ({capital,name, flags ,population, region, cca3} ) => (
                        <CountryCard
                            key={name.official}
                            name={name.official}
                            capital={capital}
                            flags={flags}
                            region={region}
                            population={population}
                            cca3={cca3}
                        />)
                ) :
                <div> Loading </div>
            }
        </CardListWrapper>
    );
};