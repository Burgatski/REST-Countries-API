import {Link} from "react-router-dom";
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
export const Wrapper = styled(Link)`
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
`

export const Flag = styled.div.attrs<{ flag: string }>(({flag}) => ({
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
`

export const Content = styled.div`
  padding: 2.4rem 2.4rem 4.6rem;
`

export const Title = styled.h4`
  margin-bottom: 1.6rem;
  font-weight: 800;
  font-size: 1.8rem;
  line-height: 2.6rem;
  color: ${({theme}) => theme.colors.text};
`

export const Details = styled.div`
  display: grid;
  gap: 0.8rem;
`

export const Info = styled.div`
  color: ${({theme}) => theme.colors.text};
  span {
    font-weight: 600;
  }
`