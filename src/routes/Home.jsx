import React, {Component} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import InfoCardBS from "../Components/InfoCardBS";
import Footer from '../Components/Footer';
import Button from 'react-bootstrap/Button';
import Information from '../Components/Information';
import { NavLink } from "react-router-dom";

const Home = () => 
{
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
                    <InfoCardBS title="Reliable" 
                                text="Trust Trinity to be there 
                                for you and your family. Trinity’s 
                                been in business since 1994. With many 
                                years of experience, we’re equipped 
                                to provide you with high-quality 
                                installations and top-notch service."/>
                    </div>

                    <div class="col">
                    <InfoCardBS title="Impactful"
                                text="Over 77,000 families have made 
                                    a positive difference by switching 
                                    to solar with Trinity, the largest 
                                    privately-owned residential solar 
                                    installer in the nation."/>
                    </div>

                    <div class="col">
                       <InfoCardBS title="Sustainable***"
                                    text="Solar is a financially and 
                                    environmentally sustainable energy 
                                    source. You can stabilize your 
                                    electric costs and protect the 
                                    planet by harnessing the sun’s rays. "/>
                    </div>
                    </div>
                    </div>



        </section>


        <div class="aboutUs">

            <Information/>
            <div class="buttonAboutUs"><Button variant="primary">Contact Us</Button></div>
        </div>
    </body>
    )
}


export default Home 


