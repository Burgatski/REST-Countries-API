import React from 'react'
import {CountriesList} from '../components/countries-list';
import {StyledLayout, InnerWrapper} from './style'
import {SearchBox} from "../components/search-box";
import {Dropdown} from "../components/dropdown";

export const Countries: React.FC = () => {
    return (
            <StyledLayout>
              <InnerWrapper>
                  <SearchBox />
                  <Dropdown />
                </InnerWrapper>
                <CountriesList />
            </StyledLayout>
    )
}