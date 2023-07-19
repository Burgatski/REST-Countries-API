import styled from "styled-components"
import {IoArrowBackOutline} from "react-icons/io5"
import media from "../../../global/media"

export const Icon = styled(IoArrowBackOutline)`
  fill: ${({ theme }) => theme.colors.text};
  @media (${media.md}) {
    width: 2rem;
    height: 2rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Wrapper = styled.div`
    width: 8rem;
    padding: 10px 20px;
    transition: 0.3s;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.bg.secondary};
    box-shadow: 0 0.2rem 0.5rem -0.1rem rgba(0, 0, 0, 0.11);
    border-radius: 0.2rem;
    z-index: 0;


  &:hover::after {
    opacity: 1;
  }

  span {
    display: block;
    font-weight: 300;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    padding-left: .5rem;
    @media (${media.md}) {
      font-size: 1.4rem;
      line-height: 1.9rem;
    }
  }
`
