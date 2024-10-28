import React from 'react';
import '../styles/SectionsBar.css'; // Importa el CSS

const AboutMe = () => {
    return (
        <div className='Container-AboutMe'>
            <div className='Bar'>
                <h2 className='Section-Bar'>ABOUT ME</h2>
                <hr style={{ width: '5%', margin: '2vh 0vw', border: 'none', borderTop: '3px solid #3d3d3d'}} />
                <p className='Description-Bar'>Si necesitas saber quién soy, aquí encontraras un poco de información
                sobre mi educación e historias.</p>
            </div>
        </div>
    );
};

export default AboutMe;
