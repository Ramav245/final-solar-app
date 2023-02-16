import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route}
	from 'react-router-dom';
import Header from './Components/Header';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import WhySolar from './routes/WhySolar';

import Products from './routes/Products';
import { Card } from 'react-bootstrap';
import CardBS from './Components/CardBS';



function App() {
  return (


    <>
 

    <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/whySolar' element={<WhySolar/>} />
        <Route path='/products' element={<Products/>} />
      </Routes>
    </>

  );
}

export default App;
