import React from 'react'
import {Details, Wrapper, Flag, Content, Title, Info} from "./style"

type CountryCardProps = {
    name: string
    population: number
    region: string
    capital: string
    flags: { [key: string]: string }
    cca3: string
};

export const CountryCard: React.FC<CountryCardProps> = ({
                                                            name,
                                                            population,
                                                            region,
                                                            capital,
                                                            flags,
                                                            cca3
                                                        }) => (
    <Wrapper to={`/country/${cca3}?country=${name}`}>
        <Flag flag={flags.svg}/>
        <Content>
            <Title>{name}</Title>
            <Details>
                <Info>
                    <span>Population: </span>
                    {population.toLocaleString('en-US')}
                </Info>
                <Info>
                    <span>Region: </span>
                    {region}
                </Info>
                <Info>
                    <span>Capital: </span>
                    {capital}
                </Info>
            </Details>
        </Content>
    </Wrapper>
)
