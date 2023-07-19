import styled, {keyframes} from 'styled-components';
import media from "../../global/media"
import { IoArrowDown } from "react-icons/io5"

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 3.2rem;
  z-index: 10;
  width: 20rem;
  
  @media (${media.md}) {
    margin: 0;
  }
`;

export const Icon = styled(IoArrowDown)`
  color: ${({ theme }) => theme.colors.text};
  width: 1.6rem;
  height: 1.6rem;

  @media (${media.md}) {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

export const Header = styled.button`
  padding: 1.4rem 1.9rem 1.4rem 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.bg.secondary};
  box-shadow: 0 0.2rem 0.9rem hsla(0, 0%, 0%, 0.053);
  border-radius: 0.5rem;
  cursor: pointer;
  border: none;

  @media (${media.md}) {
    padding: 1.8rem 1.8rem 1.8rem 2.4rem;
  }
`;

export const Label = styled.span`
  font-size: 1.2rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.text};

  @media (${media.md}) {
    font-size: 1.4rem;
  }
`;

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-2rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Options = styled.ul`
  position: absolute;
  top: 5.2rem;
  width: 100%;
  padding: 1.6rem 0;
  display: grid;
  background: ${({ theme }) => theme.colors.bg.secondary};
  box-shadow: 0 0.2rem 0.9rem hsla(0, 0%, 0%, 0.053);
  border-radius: 0.5rem;
  animation: ${fadeInUp} 0.2s;
`;

export const Option = styled.option<{ value: string }>`
  padding: 0.6rem 2.4rem;
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ selected }) => selected && 'hsla(0, 0%, 0%, 0.06)'};
  cursor: pointer;
  transition: background-color 0.1s;

  &:hover {
    background-color: hsla(0, 0%, 0%, 0.08);
  }

  @media (${media.md}) {
    font-size: 1.4rem;
    padding: 0.8rem 2.4rem;
  }
`;