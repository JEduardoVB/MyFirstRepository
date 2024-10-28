import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Importa el CSS
import Logo from '../images/Logo.png';

const Navbar = () => {
    return (
        <nav>
            <Link to="/Index"><img src={Logo} alt="Logo" className='Logo-nav'/></Link>
            <ul className='List-nav-options'>
                <li className='Option-nav'>
                    <Link to="/Proyects">Proyects</Link>
                </li>
                <li className='Option-nav'>
                    <Link to="/AboutMe">AboutMe</Link>
                </li>
                <li className='Option-nav'>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;