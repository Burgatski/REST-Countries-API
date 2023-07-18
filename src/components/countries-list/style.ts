import styled from 'styled-components'
import media from "../../global/media"

export const CardListWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 26.4rem;
  gap: 2rem;

  @media (${media.sm}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }

  @media (${media.md}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (${media.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (${media.xl}) {
    gap: 7.5rem;
  }
 `