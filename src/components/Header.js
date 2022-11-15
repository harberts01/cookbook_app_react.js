import React from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

export const Header = () => {
  return (
    <Container>
    <Row>
            <Col></Col>
            <Col xs={6}>
                <div className='text-center mt-3 text-white'>
                    <h1>Your Virtual CookBook</h1>
                </div>
            </Col>
            <Col></Col>
        </Row>
    </Container>
  )
}
