import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    hyphens: auto;
  }

  html,
  body {
    background: ${props => props.theme.backgroundColor};
    min-height: 100%;
  }

  img {
    max-width: 100%;
  }

  body::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }
  html {
    scrollbar-width: dark;
    scrollbar-color: red palevioletred;
  }

  body::-webkit-scrollbar-track {
    background: #e6e6e6;
    border: 2.5px solid #e6e6e6;
  }
  body::-webkit-scrollbar-thumb {
    background-color: #727272;
    border-radius: 6px;
    box-shadow: inset 1px 1px 0px hsl(0deg 0% 100% / 25%),
      inset -1px -2px 1px rgb(0 0 0 / 25%);
    transition: background-color 0.3s ease;
  }
  body::-webkit-scrollbar-thumb:active {
    box-shadow: inset 2px 2px 2px #e6e6e6, inset -2px -2px 2px rgb(0 0 0 / 25%);
    background: #383838;
  }
`

export default GlobalStyles
