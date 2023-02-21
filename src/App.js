import React from 'react';
import { HashRouter as Router, Routes, Route}
	from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Products from './routes/Products';
import WhatWeDo from "./routes/wwd";


function App() 
{
  return (


    <>
      <Header/> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/wwd' element={<WhatWeDo/>} />
        
      </Routes>
    
      <Footer/>

      
    </>

  );
}

export default App;
