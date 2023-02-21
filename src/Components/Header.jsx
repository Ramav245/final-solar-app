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
                    <Navbar.Brand><NavLink to="/"></NavLink></Navbar.Brand>
                    <div class="nav-link"><NavLink to="/">Home</NavLink></div>
                    <div class="nav-link"><NavLink to="/contact">Contact</NavLink></div>
                    <div class="nav-link"><NavLink to="/about">About</NavLink></div>
                    <div class="nav-link"><NavLink to="/products">Products</NavLink></div>
                    <div class="nav-link"><NavLink to="/wwd">What We Do</NavLink></div>
                  </Nav>
            </Navbar>
          </div>


          <div class="mobile-container">
            <Navbar variant="dark" bg="dark" expand="lg">
            <Container>
              <Navbar.Brand href="#home">Shuttlz</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar-dark-example" />
              <Navbar.Collapse id="navbar-dark-example">
              <Nav>
              <div class="nav-link"><NavLink to="/"></NavLink></div>
                    <div class="nav-link"><NavDropdown.Item><NavLink to="/">Home</NavLink></NavDropdown.Item></div>
                    <div class="nav-link"><NavDropdown.Item><NavLink to="/contact">Contact</NavLink></NavDropdown.Item></div>
                    <div class="nav-link"><NavDropdown.Item><NavLink to="/about">About</NavLink></NavDropdown.Item></div>
                    <div class="nav-link"><NavDropdown.Item><NavLink to="/products">Products</NavLink></NavDropdown.Item></div>
                    <div class="nav-link"><NavDropdown.Item><NavLink to="/wwd">What We Do</NavLink></NavDropdown.Item></div>
                    


              </Nav>
              </Navbar.Collapse>
            </Container>
            </Navbar>
          </div>           
        </>
    )
}


export default Header

