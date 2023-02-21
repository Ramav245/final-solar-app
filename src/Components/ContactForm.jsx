import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContactForm = () => {
  return (
    
    <Container>
      <Row>
        <Col>
            <h1 class="subsubheadings">
                Contact Us
            </h1>

            <h1 class="subsubheadings">
                We'd love to hear from you!
            </h1>


        </Col>

        <Col><img src="./image1.png" width="500" height="500"></img></Col>
      </Row>
    </Container>
  )
}

export default ContactForm