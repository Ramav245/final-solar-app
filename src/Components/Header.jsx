import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
              <Navbar.Brand class="navbar-brand"></Navbar.Brand>
              <Nav  className="me-auto">
                <div class="nav-link"><NavLink to="/">Home</NavLink></div>
                <div class="nav-link"><NavLink to="/contact">Contact</NavLink></div>
                <div class="nav-link"><NavLink to="/about">About</NavLink></div>
              </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header