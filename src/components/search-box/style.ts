import styled from 'styled-components';
import media from "../../global/media"
import { IoSearchSharp } from "react-icons/io5"

export const Wrapper = styled.form`
  margin-bottom: 4rem;
  padding: 1.4rem 3.2rem;
  display: flex;
  align-items: center;
  gap: 2.6rem;
  background: ${({ theme }) => theme.colors.bg.secondary};
  box-shadow: 0 0.2rem 0.9rem rgba(0, 0, 0, 0.0532439);
  border-radius: 0.5rem;

  @media (${media.md}) {
    margin: 0;
    flex-grow: 1;
    padding: 1.8rem 3.2rem;
    max-width: 40rem;
  }
`;

export const Icon = styled(IoSearchSharp)`
  fill: ${({ theme }) => theme.colors.input};
  width: 1.6rem;
  height: 1.6rem;

  @media (${media.md}) {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

export const Input = styled.input`
  padding: 0;
  width: 100%;
  font-family: inherit;
  font-size: 1.2rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.input};
  background-color: transparent;
  border: 0;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.input};
  }

  @media (${media.md}) {
    font-size: 1.4rem;
  }
`;