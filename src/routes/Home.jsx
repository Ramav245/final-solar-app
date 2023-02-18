import React, {Component} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import InfoCardBS from "../Components/InfoCardBS";
import Footer from '../Components/Footer';

import Information from '../Components/Information';
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
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

        <div class="buttonHero"></div>
        <div class="svg-div" >
          <svg class="curve" viewBox="0 0 500 150" preserveAspectRatio="none">
              <path class="path-div" d="M0.00,49.98 C132.29,149.50 350.85,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" ></path>
          </svg>
        </div>
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

        <section>
        <div class="aboutUs">

            <Information/>
            <div class="buttonAboutUs"><Button variant="primary">Contact Us</Button></div>
        </div>
        </section>

    </body>



    )
}


export default Home 


