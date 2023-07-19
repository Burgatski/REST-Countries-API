import styled from "styled-components"
import media from '../global/media'
import {Layout} from "../components/view/layout"

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