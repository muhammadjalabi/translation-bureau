import React from 'react'
import { Footer, Main } from './Layout.styles'

import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'

import Nav from '../Nav'

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Nav />
      <Main>{children}</Main>
      <Footer>
        <Footer.Row></Footer.Row>
        <Footer.Row>
          <Footer.Col>
            <p>&copy; åäö Translation Bureau {new Date().getFullYear()}</p>
          </Footer.Col>
        </Footer.Row>
      </Footer>
    </>
  )
}
