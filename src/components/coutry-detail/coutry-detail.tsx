import {useParams} from "react-router-dom";
import {useCountriesContext} from "../../context/countries-context";
import {useFetchCountry} from "../../hooks/fetch-country"
import {Wrapper, Flag, Content, Heading, Group, Info, BorderCountries, Category, ButtonsGroup} from './style'
import {ButtonLink} from "../button/button-link";

export const CountryDetail = () => {
    const {code} = useParams();
    const {country, isLoading} = useFetchCountry(code);
    const {countries} = useCountriesContext();

    const getBorderName = (border: string) => {
        return countries
            .filter(({cca3}) => cca3.includes(border))
            .map(({name}) => name.common)[0];
    }

    return (isLoading ? <div>LOADING</div> :
            <>
                {country.map(({
                                  flags,
                                  name,
                                  population,
                                  region,
                                  subregion,
                                  capital,
                                  tld,
                                  currencies,
                                  languages,
                                  borders,
                              }) => (
                    <Wrapper key={name.official}>
                        <Flag flag={flags.svg}/>
                        <Content>
                            <Heading>{name.common}</Heading>
                            <Group>
                                <Info>
                                    <span>Native Name: </span>
                                    {name.official}
                                </Info>
                                <Info>
                                    <span>Population: </span>
                                    {population.toLocaleString('en-US')}
                                </Info>
                                <Info>
                                    <span>Region: </span>
                                    {region}
                                </Info>
                                <Info>
                                    <span>Sub Region: </span>
                                    {subregion}
                                </Info>
                                <Info>
                                    <span>Capital: </span>
                                    {capital.join(', ')}
                                </Info>
                            </Group>
                            <Group>
                                <Info>
                                    <span>Top Level Domain: </span>
                                    {tld.join(', ')}
                                </Info>
                                <Info>
                                    <span>Currencies: </span>
                                    {currencies
                                        ? Object.values(currencies)
                                            .map((country: any) => country.name)
                                            .join(", ")
                                        : "N/A"}
                                </Info>
                                <Info>
                                    <span>Languages: </span>
                                    {Object.values(languages).join(", ")}
                                </Info>
                            </Group>
                            {borders && <BorderCountries>
                                <Category>Border Countries:</Category>
                                <ButtonsGroup>
                                    {
                                        borders.map(border => (
                                            <ButtonLink key={border}
                                                        to={`/country/${border}`}
                                                        borderName={getBorderName(border)}
                                            />
                                        ))
                                    }
                                </ButtonsGroup>
                            </BorderCountries>
                            }
                        </Content>
                    </Wrapper>))
                }
            </>
    )
}
