import styled, {keyframes} from 'styled-components'

const ringAnimation = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: auto;
    padding: 1rem 0;
    display: grid;
    place-items: center;
`

export const Ring = styled.div`
    width: 80px;
    height: 80px;
    opacity: 0.15;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid ${({theme}) => theme.colors.text};
    border-radius: 50%;
    animation: ${ringAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({theme}) => theme.colors.text} transparent transparent
      transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }

    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`