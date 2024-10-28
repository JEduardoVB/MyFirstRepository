import React from 'react';
import '../styles/SectionsBar.css'; // Importa el CSS

const Contact = () => {
    return (
        <div className='Container-Contact'>
            <div className='Bar'>
                <h2 className='Section-Bar'>CONTACT</h2>
                <hr style={{ width: '5%', margin: '2vh 0vw', border: 'none', borderTop: '3px solid #3d3d3d'}} />
                <p className='Description-Bar'>Espero que estés buscando como contactarme porque te gustó algo que viste
                y no porque me quieras demandar</p>
            </div>
        </div>
    );
};

export default Contact;
