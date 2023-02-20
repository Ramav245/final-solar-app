import React from 'react';
import { HashRouter as Router, Routes, Route}
	from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import WhySolar from './routes/WhySolar';
import Battery from "./routes/Battery";
import BatterySwap from "./routes/BatterySwapping";
import PowerPlant from "./routes/PowerPlant";





import Products from './routes/Products';
import { Card } from 'react-bootstrap';
import CardBS from './Components/CardBS';




function App() 
{
  return (


    <>
      <Header/> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/whySolar' element={<WhySolar/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/battery' element={<Battery/>} />
        <Route path='/batterySwap' element={<BatterySwap/>} />
        <Route path='/powerPlant' element={<PowerPlant/>} />
      </Routes>
    
      <Footer/>

      
    </>

  );
}

export default App;
