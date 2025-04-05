// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Index from './pages/Index';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Index /> {}
      <Footer />
    </Router>
  );
};

export default App;

