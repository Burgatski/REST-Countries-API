import styled from "styled-components"
import media from '../global/media'
import {Layout} from "../components/view/layout"
import {IoArrowBackOutline} from "react-icons/io5"

export const StyledLayout = styled(Layout)`
  margin-top: 2.4rem;
  margin-bottom: 6.5rem;

  @media (${media.lg}) {
    margin-top: 4.8rem;
    margin-bottom: 4.5rem;
  }
`

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (${media.md}) {
    margin-bottom: 4.8rem;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const ErrorText = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.text};
`

export const Icon = styled(IoArrowBackOutline)`
  fill: ${({ theme }) => theme.colors.text};
  @media (${media.md}) {
    width: 2rem;
    height: 2rem;
    color: ${({ theme }) => theme.colors.text};
  }
`