import styled from "styled-components"
import media from '../../../global/media'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem;
  min-width: 9.6rem;
  height: 2.8rem;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  box-shadow: 0 0.2rem 0.5rem -0.1rem rgba(0, 0, 0, 0.11);
  border-radius: 0.2rem;
  z-index: 0;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    box-shadow: 0 0.8rem 0.7rem -0.3rem rgba(0, 0, 0, 0.11);
    border-radius: 0.2rem;
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:hover::after {
    opacity: 1;
  }

  span {
    display: block;
    font-weight: 300;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.colors.text};

    @media (${media.md}) {
      font-size: 1.4rem;
      line-height: 1.9rem;
    }
  }
`

