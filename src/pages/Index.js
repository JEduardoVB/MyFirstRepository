import React from 'react';
import '../styles/Index.css';
import '../styles/SectionsBar.css';
import Photo from '../images/PhotoPersonal.jpg';

const Index = () => {
    return (
        <div className="portfolio-container">
            {/* Sección Welcome/Header */}
            <section id="home"></section>
            <header>
                <div>
                    <h1>WELCOME</h1>
                    <h2 className='Presentation'>Hi! I'm Eduardo, a Mexican programming student and future full-stack developer.</h2>
                </div>
                <div>
                    <img src={Photo} alt="Selfie" className="profile-photo" />
                </div>
            </header>

            {/* Sección Projects */}
            <section id="projects"></section>
            <section className='Container-Proyects'>
                <div className='Bar'>
                    <h2 className='Section-Bar'>PROYECTS</h2>
                    <hr style={{ width: '5%', margin: '2vh 0vw', border: 'none', borderTop: '3px solid #fdfdfd'}} />
                    <p className='Description-Bar'>Conoce algunos proyectos personales y profesionales en los que he trabajado hasta el momento, 
                    tal vez alguno sea de tu agrado y podamos hacer algo juntos</p>
                </div>
                <div className='Proyects' style={{padding: "10% 20%"}}>
                    <div className='Proyect'>
                        <div className='Port'></div>
                        <div className='Content-Proyect'>
                            <h2 className='Name-Proyect'>Portfolio</h2>
                            <p className='Description-Proyect'>This portfolio showcases my journey as a developer, highlighting my technical skills and passion for innovative solutions. 
                            You'll find a selection of my standout projects, each designed to solve specific problems and enhance user experience.
                            My aim is to create functional and visually appealing applications that reflect my commitment to design and usability. 
                            Explore my work and join me on this exciting journey!</p>
                        </div>
                    </div>
                    {/* Puedes duplicar este bloque para más proyectos */}
                </div>
            </section>

            {/* Sección About Me */}
            <section id="about"></section>
            <section className='Container-AboutMe'>
                <div className='Bar'>
                    <h2 className='Section-Bar'>ABOUT ME</h2>
                    <hr style={{ width: '5%', margin: '2vh 0vw', border: 'none', borderTop: '3px solid #3d3d3d'}} />
                    <p className='Description-Bar'>Si necesitas saber quién soy, aquí encontraras un poco de información
                    sobre mi educación e historias.</p>
                </div>
                
                {/* Contenido adicional de About Me puede ir aquí */}
                <div className="about-content">
                    {/* Agrega aquí tu información personal, educación, etc. */}
                </div>
            </section>

            {/* Sección Contact */}
            <section id="contact"></section>
            <section className='Container-Contact'>
                <div className='Bar'>
                    <h2 className='Section-Bar'>CONTACT</h2>
                    <hr style={{ width: '5%', margin: '2vh 0vw', border: 'none', borderTop: '3px solid #3d3d3d'}} />
                    <p className='Description-Bar'>Espero que estés buscando como contactarme porque te gustó algo que viste
                    y no porque me quieras demandar</p>
                </div>
                
                {/* Formulario de contacto o información puede ir aquí */}
                <div className="contact-content">
                    {/* Agrega aquí tu formulario o información de contacto */}
                </div>
            </section>
        </div>
    );
};

export default Index;