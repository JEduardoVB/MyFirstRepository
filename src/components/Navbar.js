import React from 'react';
import { Link } from 'react-scroll'; // Cambiamos react-router-dom por react-scroll
import '../styles/Navbar.css';
import Logo from '../images/Logo.png';

const Navbar = () => {
    return (
        <nav>
            <Link to="home" smooth={true} duration={500} className="logo-link">
                <img src={Logo} alt="Logo" className='Logo-nav'/>
            </Link>
            <ul className='List-nav-options'>
                <li className='Option-nav'>
                    <Link to="projects" smooth={true} duration={500}>Projects</Link>
                </li>
                <li className='Option-nav'>
                    <Link to="about" smooth={true} duration={500}>About Me</Link>
                </li>
                <li className='Option-nav'>
                    <Link to="contact" smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;