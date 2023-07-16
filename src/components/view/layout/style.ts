import styled from 'styled-components'
import media from "../../../global/media"

export const Wrapper = styled.div`
  max-width: 128rem;
  width: 91.46%;
  margin: 0 auto;

  @media (${media.md}) {
    width: 88.88%;
  }
`;