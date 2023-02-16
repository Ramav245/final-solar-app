import React from 'react'
import CardBS from '../Components/CardBS'
const Products = () => {
  return (
    <body>

    <div class="hero">
      <h1 class="headings">Products</h1>
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






    </body>
  )
}

export default Products