import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route}
	from 'react-router-dom';
import Header from './Components/Header';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import WhySolar from './routes/WhySolar';
import GoSolar from './routes/GoSolar';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/whySolar' element={<WhySolar/>} />
      </Routes>
    </>

  );
}

export default App;
