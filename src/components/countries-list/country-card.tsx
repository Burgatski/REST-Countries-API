import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled(Link)`
  position: relative;
  background-color: ${({theme}) => theme.colors.bg.secondary};
  border-radius: 0.5rem;
  box-shadow: 0 0 0.7rem 0.2rem rgba(0, 0, 0, 0.0294384);
  transition: transform 0.2s, opacity 0.2s;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    box-shadow: 0 2rem 2rem -1rem rgba(0, 0, 0, 0.15);
    border-radius: 0.2rem;
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:hover {
    transform: translateY(-0.5rem);
    &::after {
      opacity: 1;
    }
  }
`;

const Flag = styled.div.attrs<{ flag: string }>(({flag}) => ({
    style: {
        backgroundImage: `url(${flag})`,
    },
}))<{ flag: string }>`
  height: 16rem;
  border-radius: 0.5rem 0.5rem 0 0;
  overflow: hidden;
  background-color: ${({theme}) => theme.colors.bg.primary};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

const Content = styled.div`
  padding: 2.4rem 2.4rem 4.6rem;
`;

const Heading = styled.h4`
  margin-bottom: 1.6rem;
  font-weight: 800;
  font-size: 1.8rem;
  line-height: 2.6rem;
  color: ${({theme}) => theme.colors.text};
`;

const Details = styled.div`
  display: grid;
  gap: 0.8rem;
`;

const Info = styled.div`
  color: ${({theme}) => theme.colors.text};
  span {
    font-weight: 600;
  }
`;

type CountryCardProps = {
    name: string;
    population: number;
    region: string;
    capital: any;
    flags: { [key: string]: string }
    cca3: string;
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
            <Heading>{name}</Heading>
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
