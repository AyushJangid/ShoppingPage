import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid>
        <Row className='text-center footer'>
            <Col sm={12}>All Rights Reserved</Col>
        </Row>
    </Container>
  )
}

export default Footer