import React from 'react';
import '../styles/Index.css'; // Importa el CSS
import Photo from '../images/layered-waves-haikei2.png';

const Index = () => {
    return (
        <>
            <header>
                <div>
                    <h1>WELCOME</h1>
                    <h2 className='Presentation'>I´m Eduardo 
                    Programming student and future fullstack</h2>
                </div>
                <div>
                    <img src={Photo} alt="Selfie" />
                </div>
            </header>
        </>
    );
};

export default Index;
