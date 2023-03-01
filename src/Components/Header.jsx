import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () =>
{  
  return (

       <>
        <div class="displayNav">
          <Navbar bg="dark" variant="pills">
                  <Nav className="me-auto">
                    <Navbar.Brand><img src="./final-logo.png" style={{width:75, marginTop: -7}} /></Navbar.Brand>
                    <div class="nav-link"><NavLink to="/"><h5>Home</h5></NavLink></div>
                    <div class="nav-link"><NavLink to="/about"><h5>About</h5></NavLink></div>
                    <div class="nav-link"><NavLink to="/wwd"><h5>Benefits</h5></NavLink></div>
                    <div class="nav-link"><NavLink to="/photos"><h5>Photos</h5></NavLink></div>
                    <div class="nav-link"><NavLink to="/contact"><h5>Contact</h5></NavLink></div>
                  </Nav>
            </Navbar>
          </div>


          <div class="mobile-container">
            <Navbar variant="dark" bg="dark" expand="lg">
            <Container>
              <Navbar.Brand><img src="./final-logo.png" style={{width:100, marginTop: -7}} /></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar-dark-example" />
              <Navbar.Collapse id="navbar-dark-example">
              <Nav>
              <div class="nav-link"><NavLink to="/"></NavLink></div>
                    <div class="nav-link"><NavDropdown.Item><NavLink to="/"><h5>Home</h5></NavLink></NavDropdown.Item></div>
                    <div class="nav-link"><NavDropdown.Item><NavLink to="/about"><h5>About</h5></NavLink></NavDropdown.Item></div>
                    <div class="nav-link"><NavDropdown.Item><NavLink to="/wwd"><h5>Benefits</h5></NavLink></NavDropdown.Item></div>
                    <div class="nav-link"><NavDropdown.Item><NavLink to="/photos"><h5>Photos</h5></NavLink></NavDropdown.Item></div>

              
                    


              </Nav>
              </Navbar.Collapse>
            </Container>
            </Navbar>
          </div>           
        </>
    )
}


export default Header

