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


            <ul>
            <li>Mobile; 96000 82399</li>
            <li>Email: pavithramenenergy@gmail.com</li>
            <li>Website: www.pavithramenergy.com</li>
          </ul>



        </Col>

        <Col><img src="./image1.png" width="500" height="500"></img></Col>
      </Row>
    </Container>
  )
}

export default ContactForm