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
                    <Navbar.Brand><a href="#" class="navbar-left"><img width="125px" src="./title.png"/></a></Navbar.Brand>
                    <div class="nav-link"><NavLink to="/">Home</NavLink></div>
                    <div class="nav-link"><NavLink to="/about">About</NavLink></div>
                    <div class="nav-link"><NavLink to="/wwd">Benefits</NavLink></div>
                    <div class="nav-link"><NavLink to="/photos">Photos</NavLink></div>
                    <div class="nav-link"><NavLink to="/contact">Contact</NavLink></div>
                  </Nav>
            </Navbar>
          </div>


          <div class="mobile-container">
            <Navbar variant="dark" bg="dark" expand="lg">
            <Container>
              <Navbar.Brand href="#home"></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar-dark-example" />
              <Navbar.Collapse id="navbar-dark-example">
              <Nav>
              <div class="nav-link"><NavLink to="/"></NavLink></div>
                    <div class="nav-link"><NavDropdown.Item><NavLink to="/">Home</NavLink></NavDropdown.Item></div>
                    <div class="nav-link"><NavDropdown.Item><NavLink to="/about">About</NavLink></NavDropdown.Item></div>
                    <div class="nav-link"><NavDropdown.Item><NavLink to="/wwd">Benefits</NavLink></NavDropdown.Item></div>
                    <div class="nav-link"><NavDropdown.Item><NavLink to="/photos">Photos</NavLink></NavDropdown.Item></div>

              
                    


              </Nav>
              </Navbar.Collapse>
            </Container>
            </Navbar>
          </div>           
        </>
    )
}


export default Header

