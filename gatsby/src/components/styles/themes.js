import {
  primaryBlue,
  secondaryBlue,
  neutral,
  yellow,
  red,
  green,
  navbarGradients,
  background,
  primary,
} from './colors'

export const defaultTheme = {
  backgroundColor: background[100],

  navbarGradient: navbarGradients[100],
  navbarActive: yellow[100],
  nav: {
    link: green[400],
    linkHover: green[500],
    linkActive: green[500],
    // linkUnderline: primaryBlue[500],
    linkUnderline: primary[400],
    logo: {
      outerBorder: green[500],
      outerBg: green[100],
      innerBorder: green[500],
      innerBg: neutral[200],
    },
    menuBtn: green[400],
  },
}
