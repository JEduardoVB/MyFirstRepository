import React from 'react';
import '../styles/SectionsBar.css';
import '../styles/Proyects.css';
import '../styles/LapTop.css';

const Proyects = () => {
    return (
        <div className='Container-Proyects'>
            <div className='Bar'>
                <h2 className='Section-Bar'>PROYECTS</h2>
                <hr style={{ width: '5%', margin: '2vh 0vw', border: 'none', borderTop: '3px solid #3d3d3d'}} />
                <p className='Description-Bar'>Conoce algunos proyectos personales y profesionales en los que he trabajado hasta el momento, 
                tal vez alguno sea de tu agrado y podamos hacer algo juntos</p>
            </div>
            <div className='Proyects' style={{padding: "10% 20%"}}>
                <div className='Proyect'>
                    <div className='Port'>
                    
                    </div>
                    <div className='Content-Proyect'>
                        <h2 className='Name-Proyect'>Portfolio</h2>
                        <p className='Description-Proyect'>This portfolio showcases my journey as a developer, highlighting my technical skills and passion for innovative solutions. 
                        You’ll find a selection of my standout projects, each designed to solve specific problems and enhance user experience.
                        My aim is to create functional and visually appealing applications that reflect my commitment to design and usability. 
                        Explore my work and join me on this exciting journey!"</p>
                    </div>
                </div>
                <div className='Proyect'>
                    <div className='Port'>

                    </div>
                    <div className='Content-Proyect'>
                        <h2 className='Name-Proyect'>Portfolio</h2>
                        <p className='Description-Proyect'>This portfolio showcases my journey as a developer, highlighting my technical skills and passion for innovative solutions. 
                        You’ll find a selection of my standout projects, each designed to solve specific problems and enhance user experience.
                        My aim is to create functional and visually appealing applications that reflect my commitment to design and usability. 
                        Explore my work and join me on this exciting journey!"</p>
                    </div>
                </div>
                <div className='Proyect'>
                    <div className='Port'>

                    </div>
                    <div className='Content-Proyect'>
                        <h2 className='Name-Proyect'>Portfolio</h2>
                        <p className='Description-Proyect'>This portfolio showcases my journey as a developer, highlighting my technical skills and passion for innovative solutions. 
                        You’ll find a selection of my standout projects, each designed to solve specific problems and enhance user experience.
                        My aim is to create functional and visually appealing applications that reflect my commitment to design and usability. 
                        Explore my work and join me on this exciting journey!"</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Proyects;
