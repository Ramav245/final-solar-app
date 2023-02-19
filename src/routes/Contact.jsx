import React from 'react'
import CardBS from '../Components/CardBS'
import ContactForm from '../Components/ContactForm'
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
const Contact = () => 
{
  return (
    <body>
      <section>
      <div class="hero">
        <h1 class="headings">Contact Us</h1>
        <div class="buttonHero"></div>
  
        <div id="bloc_page">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none">
              <path fill="#fff" d="M0.00,49.98 C132.29,149.50 350.85,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" ></path>
          </svg>
        </div>
      </div>
        
      </section>
      
 
    <div>
      <ContactForm/>
    </div>
    </body>

  )
}

export default Contact