import React from 'react'
import Gallery from 'react-photo-gallery';
import { photos } from './photos';

const PhotoGallery = () => {
       
  return (
    <div><h1>Gallery</h1>
      <Gallery photos={photos} />
      </div>
  )
  
}

export default PhotoGallery