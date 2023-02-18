import React from 'react'
import CardBS from '../Components/CardBS'
const Products = () => {
  return (
    <section>

    <div class="hero">
      <h1 class="headings">Products</h1>
      <div class="buttonHero"></div>
      <div class="svg-div" >
        <svg class="curve" viewBox="0 0 500 150" preserveAspectRatio="none">
            <path class="path-div" d="M0.00,49.98 C132.29,149.50 350.85,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" >
                </path>
            </svg>
        </div>
    </div>

    <section>
            <div class="container">
                <div class="row">
                    <div class="col">
                       <CardBS url="./src/images/image1.png"/>
                    </div>

                    <div class="col">
                       <CardBS url="./src/images/image2.png"/>
                    </div>

                    <div class="col">
                       <CardBS url="./src/images/image3.png"/>
                    </div>

                    <div class="col">
                       <CardBS url="/image4.png"/>
                    </div>

                </div>
            </div>
        </section>  

    <div class="subsubheadings">Products</div>




    <h3>
    <ul>
  <li> SHUTTLZ Scooter (LOHIA South India Distributer)</li>
  <li>E-Handy (Specially Designed for Physically challenged entrepreneur)</li>
  <li>Shuttlz E-rickshaws/Auto (Commercial Onroad Product for Common
        Man)</li>
        <li>Shuttlz-Cargo Variants (350kgs-1 ton)</li>
        <li>
        Passenger Utility Vehicle (4-8 Seater vehicles)</li>
         <li>Passenger Connectivity BUS (14 -21 Seater Capacity )</li>
</ul>  
    </h3>






    </section>
  )
}

export default Products