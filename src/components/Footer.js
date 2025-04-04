import React from 'react';
import {FaInstagram, FaGithub, FaEnvelope, FaLinkedin} from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <ul className='List-footer-social'>
                <li className='Social'>
                    <a href="https://www.instagram.com/eduardovb._/"><FaInstagram className='icon' /></a>
                </li>
                <li className='Social'> 
                    <a href=""><FaGithub className='icon' /></a>
                </li>
                <li className='Social'>
                    <a href=""><FaLinkedin className='icon' /></a>
                </li>
                <li className='Social'>
                    <a href=""><FaEnvelope className='icon' /></a>
                </li>
            </ul>
            <hr style={{ margin: '2vh 8vw', border: 'none', borderTop: '1px solid #fdfdfd'}} />
            <p className='Copyright'>&copy; {new Date().getFullYear()} José Eduardo Vásquez Bielma. All rights reserved.</p>
            
        </footer>
    );
};

export default Footer;