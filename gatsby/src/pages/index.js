import React from 'react'
import { Seo } from '../components'

import { Container, Row, Col } from 'react-bootstrap'

export default function Home() {
  return (
    <>
      <Seo title="Welcome!" />
      <Container>
        <Row>
          <Col xs={12} sm={8}>
            <p>
              Hellooo and welcome to this page, maybe you'll like it, maybe you
              wont.
            </p>
            Welcome to this page
          </Col>
          <Col xs={12} sm={4}>
            some image
          </Col>
        </Row>
      </Container>
    </>
  )
}
