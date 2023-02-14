import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContactForm = () => {
  return (
    <Container>
      <Row>
        <Col>
            <h1>
                Contact Us
            </h1>

            <header class="header">
                We'd love to hear from you!
            </header>

            <p>
                Office hours are 8am-5pm, Monday through Friday. 
                Please call us at (831) 201-6759. Or send us an email: info@allterrasolar.com
            </p>

            <p>
                Allterra Solar
                207-B McPherson Street
                Santa Cruz, CA 95060
            </p>
        </Col>

        <Col><img src="img1.jpeg" width="500" height="500"></img></Col>
      </Row>
    </Container>
  )
}

export default ContactForm