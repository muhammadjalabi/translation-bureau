import styled from 'styled-components/macro'
import { Container, Row, Col } from 'react-bootstrap'

export const Main = styled.main`
  max-width: 1200px;
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  margin: 0 auto;
  margin: 12rem auto 4rem auto;

  margin-top: clamp(2rem, 10vw, 12rem);
  /*
  background-size: 1500px;
  margin: 12rem auto 4rem auto;
  background: ${({ theme }) => theme.navbarGradient}; */
`

Main.Container = styled(Container)`
  box-shadow: 0 0 5px 3px rgb(0 0 0 / 4%);
  background: palevioletred;
`

export const Footer = styled.footer`
  padding: 5rem 3.75rem;
  /* box-shadow: 0 4px 5px 7px rgba(0, 0, 0, 0.15); */
  /* background: radial-gradient(circle, red 0%, green 100%); */
  color: red;
`

Footer.Container = Container
Footer.Row = Row
Footer.Col = Col
