import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
      <Navbar class="navbar" bg="dark" variant="dark">
            <Navbar.Brand class="navbar-brand"></Navbar.Brand>
              <Nav  className="me-auto">
                <div class="nav-link"><NavLink to="/">Home</NavLink></div>
                <div class="nav-link"><NavLink to="/whySolar">Why Solar</NavLink></div>
                <div class="nav-link"><NavLink to="/contact">Contact</NavLink></div>
                <div class="nav-link"><NavLink to="/about">About</NavLink></div>
                <div class="nav-link"><NavLink to="/products">Products</NavLink></div>
                <div class="nav-link"><NavLink to="/battery">Battery</NavLink></div>
                <div class="nav-link"><NavLink to="/batterySwap">BatterySwap</NavLink></div>
                <div class="nav-link"><NavLink to="/powerPlant">PowerPlant</NavLink></div>
              </Nav>

      </Navbar>
  
  )
}

export default Header