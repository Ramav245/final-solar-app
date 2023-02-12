import React from 'react';
import Header from '../Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardBS from '../Components/CardBS';
import Footer from '../Components/Footer';




const Home = () => {
    return(
    <body>

        <div>
            <div class="hero"></div>
            <h1>Solar Company</h1>
        </div>

        <div>
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
        </div>  

        <div>
            <Footer/>
        </div>



    </body>
    );
}

export default Home