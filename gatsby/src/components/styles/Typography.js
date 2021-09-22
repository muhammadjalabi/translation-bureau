import { createGlobalStyle } from 'styled-components'
import font from '../../assets/fonts/BeVietnamPro-Regular.woff'

const Typography = createGlobalStyle`
  @font-face {
    font-family: BVP;
    src: url(${font});
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }

  html, body {
    font-family: BVP, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
    color: ${({ theme }) => theme.textColor};
  }

  html[lang='ar'] * {
    letter-spacing: unset;
  }


`

export default Typography
