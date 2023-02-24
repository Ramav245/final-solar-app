import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  return (
    <body>
      <section>
        <div class="hero">
        <h1 class="headings">About Us</h1>

<div class="buttonHero"></div>
<div id="bloc_page">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none">
              <path fill="#fff" d="M0.00,49.98 C132.29,149.50 350.85,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" ></path>
          </svg>
        </div>
        </div>
      </section>



      <div>
          <h2 class="subsubheadings">
          About Us
        </h2>
        <p>
          <ul>
            <li>Incorporated in 2014 as a Private Limited Company.</li>
            <li>Driven by experienced, expertise team of Management and Engineers.</li>
            <li>Strong Domain expertise.</li>
            <li>Providing End to End Solutions and Services from conceptualization to execution of the projects.</li>
          </ul>
        </p>
      
      </div>





      <Container>
        <Row>
          <Col>
          

        <h2 class="subsubheadings">
          Vision
        </h2>

        <p>
          To emerge as an Expert and Professional in Renewable Energy Sector by providing innovative and sustainable energy solutions to the end users. 
        </p>

          
          </Col>

          <Col>
          <h2 class="subsubheadings">
          Mission
        </h2>
        <p>
          <ul>
            <li>Create clean and eco friendly nation through renewable energy.</li>
            <li>Attain high level of customer satisfaction and positive experience.</li>
            <li>Provide high quality and innovative solutions on renewable energy.</li>
            <li>Professional and high standard installations. </li>

          </ul>
        </p>
          </Col>
        </Row>

        <Row>
          <Col>
          <h2 class="subsubheadings">
         Solutions
        </h2>
        <p>
          <ul>
            <li>Rooftop on grid solar solutions</li>
            <li>Rooftop off grid solutions</li>
            <li>Solar Water heaters.</li>
            <li>Solar Water pumps. </li>
            <li>Solar Water farms. </li>
            <li>Battery operated vehicles </li>
            <li>Charging stations for battery operated vehicles. </li>

          </ul>
        </p>

          </Col>

          <Col>
          <h2 class="subsubheadings">
         Call for an Action
        </h2>
        <p>
          <ul>
            <li>Mobile; 96000 82399</li>
            <li>Email: pavithramenenergy@gmail.com</li>
            <li>Website: www.pavithramenergy.com</li>
          </ul>
        </p>
          </Col>
        </Row>
        </Container>
    </body>


    
  )
}

export default About
