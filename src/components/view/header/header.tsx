import React from 'react'
import {Link} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {HeadLine, StyledHeader, Wrapper, WrapperThemeSwitcher, Label} from './style'
import {useThemeContext} from "../../../context/theme-context"
import {faMoon} from '@fortawesome/free-solid-svg-icons'


export const Header: React.FC = () => {
    const {setDark} = useThemeContext()
    return (
        <Wrapper>
            <StyledHeader>
                <Link to="/">
                    <HeadLine>
                        Where in the world?
                    </HeadLine>
                </Link>
                <WrapperThemeSwitcher onClick={setDark}>
                    <FontAwesomeIcon icon={faMoon}/>
                    <Label>Dark Mode</Label>
                </WrapperThemeSwitcher>
            </StyledHeader>
        </Wrapper>
    )
}