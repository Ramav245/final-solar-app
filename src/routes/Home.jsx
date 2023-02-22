import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Information from '../Components/Information';
import { Row, Col, Container } from 'react-bootstrap';

const Home = () => 

{
    return (

    <body>
        <section>

        <div class="hero">
        <h1 class="headings">Pavithram Energy Solutions Private Limited</h1>

        <div class="buttonHero"></div>



        <div id="bloc_page">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
        <path fill="#fff" d="M0.00,49.98 C132.29,149.50 350.85,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" ></path>
        </svg>
        </div>
        </div>
        </section>

        <section class="svgs-desktop">
        <div class="container">
        <div class="row">
        <div class="col">

            <div class="wrap-layer">
                <div class="text-layer">
                    <h3>Reliable</h3>
                </div>
                <div class="background-layer">
                    <svg id="sw-js-blob-svg" viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg">

                    <path  width="100%" height="100%" fill="url(#sw-gradient)" d="M18.5,-24.2C24.5,-17.1,30,-11.7,31.2,-5.5C32.3,0.7,28.9,7.7,24.8,13.8C20.7,19.8,15.7,24.8,9.4,28.1C3,31.4,-4.8,33,-11.4,30.8C-18,28.6,-23.4,22.6,-29.1,15.5C-34.7,8.4,-40.6,0.1,-39.5,-7.1C-38.3,-14.2,-30.1,-20.2,-22.4,-27C-14.7,-33.9,-7.3,-41.6,-0.5,-41C6.3,-40.3,12.6,-31.4,18.5,-24.2Z"stroke-width="0"></path>
                    </svg>
                </div>    
            </div>
        </div>

        <div class="col">
        <div class="wrap-layer">
        <div class="text-layer">
                    <h3>Impactful</h3>
                </div>
        <div class="background-layer">
                <svg  id="sw-js-blob-svg" viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">                    
                <defs>                         
                    <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                  
                    <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>            
                    <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>               
                    </linearGradient>                    
                </defs>               
                <path width="100%" height="100%" fill="url(#sw-gradient)" d="M15.9,-16.9C19.9,-11.9,22,-6,24.4,2.4C26.8,10.8,29.6,21.6,25.6,27.4C21.6,33.1,10.8,33.8,-0.1,33.8C-10.9,33.9,-21.9,33.4,-26.7,27.6C-31.5,21.9,-30.2,10.9,-29.8,0.4C-29.3,-10.1,-29.9,-20.2,-25.1,-25.3C-20.2,-30.3,-10.1,-30.3,-2.1,-28.2C6,-26.1,11.9,-22,15.9,-16.9Z"stroke-width="0"></path>             
                </svg>
                </div>  
                </div>
        </div>


        <div class="col">
        <div class="wrap-layer">
        <div class="text-layer">
                    <h3>Sustainable</h3>
                </div>
        <div class="background-layer">
            <svg id="sw-js-blob-svg"  viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg">                 
            <defs>                         
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">      
                <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>    
                <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>                       
                </linearGradient>                    
                </defs>                
                <path  width="100%" height="100%"fill="url(#sw-gradient)" d="M17.9,-23.6C24,-20.2,30.4,-16.1,35,-9.6C39.7,-3,42.5,5.9,40.2,13.1C37.9,20.3,30.3,25.8,22.7,30.2C15.2,34.7,7.6,38.1,0.3,37.6C-7,37.2,-13.9,33,-20,28.1C-26.1,23.1,-31.4,17.5,-35,10.4C-38.6,3.3,-40.5,-5.2,-39.2,-13.8C-37.9,-22.4,-33.4,-31.1,-26.3,-34.1C-19.2,-37.2,-9.6,-34.7,-1.9,-32.1C5.9,-29.5,11.8,-26.9,17.9,-23.6Z" stroke-width="0"></path>          
                    </svg>
                </div>
        </div>

        </div>








        </div>
        </div>


        </section>

        <section class="homepage-wwd">
            <div>   
                <Container>
                <h1>What We Do</h1>  
                    <Row>
                        <Col>
                            <h2>Rooftop Ongrid Solar Power Plant</h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h2>Rooftop Offgrid Solar power plant</h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h2>Solar parks - Secure Investment</h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h2>SOLAR PUMPS</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2>Solar carport</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2>Solar Tree</h2>
                        </Col>
                    </Row>









                    
                </Container>

            </div>

        </section>

        <section>
        <div class="aboutUs">

        <Information/>
        </div>
        </section>
    </body>
    )
}


export default Home 


