import {IoMoon} from "react-icons/io5"
import styled from 'styled-components'
import {Layout} from "../layout";
import media from "../../../global/media"

export const Wrapper = styled.header`
  background: ${({ theme }) => theme.colors.bg.secondary};
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.0562443);
`

export const IconMoon = styled(IoMoon)`
fill: ${({ theme }) => theme.colors.white};
`
export const StyledHeader = styled(Layout)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
`

export const HeadLine = styled.h1`
  font-weight: 800;
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.text};

  @media (${media.md}) {
    font-size: 2.4rem;
    line-height: 3.3rem;
  }
`

export const WrapperThemeSwitcher = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
`

export const Label = styled.span`
  display: block;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.colors.text};

  @media (${media.md}) {
    font-size: 1.6rem;
    line-height: 2.2rem;
  }
`