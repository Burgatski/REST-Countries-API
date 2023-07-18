import React from 'react'
import {Link} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {HeadLine, StyledHeader, Wrapper, WrapperThemeSwitcher, Label, IconMoon} from './style'
import {useThemeContext} from "../../../context/theme-context"
import {IoMoonOutline} from "react-icons/io5";


export const Header: React.FC = () => {
    const {isDark, setDark} = useThemeContext()
    return (
        <Wrapper>
            <StyledHeader>
                <Link to="/">
                    <HeadLine>
                        Where in the world?
                    </HeadLine>
                </Link>
                <WrapperThemeSwitcher onClick={setDark}>
                    {isDark ? (
                        <>
                            <IconMoon/>
                            <Label> Dark Mode</Label>
                        </>
                    ) : (
                        <>
                            <IoMoonOutline/>
                            <Label>Light Mode</Label>
                        </>
                    )
                    }
                </WrapperThemeSwitcher>
            </StyledHeader>
        </Wrapper>
    )
}