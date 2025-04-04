// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Eliminamos Route y Routes ya que no los necesitaremos
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Index from './pages/Index'; // Este ahora contiene todo el contenido
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Index /> {/* Renderizamos directamente el componente Index que ahora contiene todo */}
      <Footer />
    </Router>
  );
};

export default App;

