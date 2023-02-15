import React from 'react';
import Header from '../Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardBS from '../Components/CardBS';
import Footer from '../Components/Footer';
import Button from 'react-bootstrap/Button';
import Information from '../Components/Information';
import { NavLink } from "react-router-dom";

const Home = () => {
    return(
    <body>

        <section>
            
            <div class="hero">
                <h1 class="headings">Energy with Integrity®. Since 1994.</h1>
                <h2 class="subheadings">Solar energy can lower your cost of living, protect the environment and improve your quality of life. 
                Take control of your electric bill with a no-cost solar installation today.
                </h2>
                <div class="buttonHero"><Button variant="primary"><div class="nav-link"><NavLink to="/contact">Contact Us</NavLink></div></Button></div>
            </div>
            
        </section>

        <section>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <CardBS/>
                    </div>
                    <div class="col">
                        <CardBS/>
                    </div>
                    <div class="col">
                        <CardBS/>
                    </div>
                </div>
            </div>
        </section>  


        <div class="aboutUs">

            <Information/>
            <div class="buttonAboutUs"><Button variant="primary">Go somewhere</Button></div>
</div>





        <div>
            <Footer/>
        </div>



    </body>
    );
}

export default Home