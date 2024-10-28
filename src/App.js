// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Proyects from './pages/Proyects';
import AboutMe from './pages/AboutMe';
import Index from './pages/Index';
import './App.css';


const App = () => {
    return (
      <Router>
          <Navbar />
          <Routes> {/* Cambia aquí de Switch a Routes */}
              <Route path="/Index" element={<Index />} /> {/* Cambia component a element */}
              <Route path="/Proyects" element={<Proyects />} />
              <Route path="/AboutMe" element={<AboutMe />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<h1 style={{margin: '10vw 10vw 10vw 10vw'}}>Page no found</h1>} />
          </Routes>
          <Footer />
      </Router>
    );
};

export default App;

