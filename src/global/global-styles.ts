import {createGlobalStyle} from 'styled-components'
import './fonts.css'

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    min-width: 28rem;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.4rem;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.bg.primary};
  }

  p {
    font-weight: 300;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.4rem;
    line-height: 1.6rem;
  }
  
  a {
  text-decoration: none;
  }
  
  li {
      list-style-type: none;
  }
`
