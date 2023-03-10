import React from 'react'
import PhotoGallery from '../Components/PhotoGallery'


const Photos = () => 
{
  return (
<div>
    <section>
    <div class="hero">
      <h1 class="headings">Photos</h1>
      <div class="buttonHero"></div>

      <div id="bloc_page">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path fill="#fff" d="M0.00,49.98 C132.29,149.50 350.85,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" ></path>
        </svg>
      </div>
    </div>
      
    </section>




    
    <div>

        <PhotoGallery/>
    </div>
    </div>
  )
}

export default Photos