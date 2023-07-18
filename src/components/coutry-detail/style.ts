import styled from 'styled-components'
import media from "../../global/media"

export const Wrapper = styled.div`

  margin-top: 6.4rem;
  display: grid;
  gap: 4.4rem;

  @media (${media.md}) {
    justify-content: center;
  }

  @media (${media.lg}) {
    grid-template-columns: 43.75% 1fr;
    align-items: start;
  }

  @media (${media.xl}) {
    gap: 12rem;
  }
`;

export const Flag = styled.img<{ flag: string }>`
  height: 61vw;
  width: 100%;
  max-height: 40.1rem;
  max-width: 56rem;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  background-image: url(${({ flag }) => flag});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  box-shadow: 0 0 0.8rem 0.2rem rgba(0, 0, 0, 0.0294384);
  border-radius: 0.6rem;
  overflow: hidden;
`;

export const Content = styled.div`
  @media (${media.sm}) {
    display: grid;
    grid-template:
      'heading heading' auto
      'group-1 group-2' auto
      'border-countries border-countries' auto
      / 1fr 1fr;
  }

  @media (${media.md}) {
    width: 56rem;
  }

  @media (${media.lg}) {
    margin-top: 3.9rem;
    width: auto;
  }
`;

export const Heading = styled.h2`
  margin-bottom: 1.6rem;
  font-weight: 800;
  font-size: 2.2rem;
  line-height: 3rem;
  color: ${({ theme }) => theme.colors.text};

  @media (${media.sm}) {
    grid-area: heading;
    margin-bottom: 2.3rem;
    font-size: 3.2rem;
    line-height: 4.4rem;
  }
`;

export const Group = styled.div`
  &:first-of-type {
    margin-bottom: 3.2rem;

    @media (${media.sm}) {
      grid-area: group-1;
      margin-bottom: 6.8rem;
    }
  }
  &:last-of-type {
    margin-bottom: 3.4rem;

    @media (${media.sm}) {
      grid-area: group-2;
      margin-bottom: 0;
    }
  }
`;

export const Info = styled.div`
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 3.2rem;
  color: ${({ theme }) => theme.colors.text};

  span {
    font-weight: 600;
  }

  @media (${media.sm}) {
    font-size: 1.6rem;
    line-height: 3.2rem;
  }
`;
export const BorderCountries = styled.div`
  @media (${media.sm}) {
    grid-area: border-countries;
    display: flex;
    align-items: start;
    gap: 1.6rem;
  }
`;

export const Category = styled.h5`
  flex-shrink: 0;
  margin-bottom: 1.6rem;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colors.text};

  @media (${media.sm}) {
    margin-bottom: 0;
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`;
