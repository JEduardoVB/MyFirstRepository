import React from 'react';
import '../styles/Index.css';
import '../styles/SectionsBar.css';
import Skills from '../components/Skills';
import ProjectCard from '../components/ProjectCard';
import Photo from '../images/PhotoPersonal.jpg';

const projectsData = [
  {
    title: "Portfolio",
    description: "This portfolio showcases my journey as a developer...",
    tags: ["React", "CSS", "Responsive Design"]
  },
  {
    title: "E-commerce App",
    description: "Full-featured online store with payment integration...",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Task Manager",
    description: "A web application to create, manage, and track daily tasks with user authentication and real-time updates.",
    tags: ["Vue", "Firebase", "Tailwind CSS"]
  },
  {
    title: "Blog Platform",
    description: "A content management system where users can write, edit, and publish blog posts with Markdown support.",
    tags: ["Next.js", "TypeScript", "MongoDB"]
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather app that displays current weather and forecasts using OpenWeatherMap API.",
    tags: ["HTML", "CSS", "JavaScript", "API"]
  },
  {
    title: "Chat Application",
    description: "A real-time chat app with multiple rooms and user presence built using WebSockets.",
    tags: ["React", "Node.js", "Socket.io"]
  }
];

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
                    <hr style={{ width: '5%', margin: '2vh 0vw', border: 'none', borderTop: '3px solid #dfec25'}} />
                    <p className='Description-Bar'>Conoce algunos proyectos personales y profesionales en los que he trabajado hasta el momento, 
                    tal vez alguno sea de tu agrado y podamos hacer algo juntos</p>
                </div>
                <div className='Proyects' style={{padding: "5% 5%"}}>
                    {projectsData.map((project, index) => (<ProjectCard 
                        key={index}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        />
                        ))}
                </div>
            </section>

            <section id="skills"></section>
            <section className='Container-Skills'>
                <div className='Bar'>
                    <h2 className='Section-Bar'>SKILLS</h2>
                    <hr style={{ width: '5%', margin: '2vh 0vw', border: 'none', borderTop: '3px solid #dfec25'}} />
                </div>
                <div className='Skills' style={{padding: "0% 20% 5% 20%"}}>
                    <Skills/>
                </div>
            </section>

            {/* Sección About Me */}
            <section id="about"></section>
            <section className='Container-AboutMe'>
                <div className='Bar'>
                    <h2 className='Section-Bar'>ABOUT ME</h2>
                    <hr style={{ width: '5%', margin: '2vh 0vw', border: 'none', borderTop: '3px solid #dfec25'}} />
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
                    <hr style={{ width: '5%', margin: '2vh 0vw', border: 'none', borderTop: '3px solid #dfec25'}} />
                    <p className='Description-Bar'>Espero que estés buscando como contactarme porque te gustó algo que te interesó
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