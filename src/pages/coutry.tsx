import React from 'react'
import {CountryDetail} from "../components/coutry-detail";
import {ButtonBack} from "../components/button/button-back";
import {StyledLayout} from './style'

export const Country: React.FC = () => (
    <StyledLayout>
        <ButtonBack to="/"/>
        <CountryDetail/>
    </StyledLayout>
)