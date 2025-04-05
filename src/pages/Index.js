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
                    <h1>BIENVENIDO</h1>
                    <h2 className='Presentation'>Hola! Soy Eduardo, un estudiante de computación y futuro desarrollador full-stack.</h2>
                </div>
                <div>
                    <img src={Photo} alt="Selfie" className="profile-photo" />
                </div>
            </header>

            {/* Sección Projects */}
            <section id="projects"></section>
            <section className='Container-Proyects'>
                <div className='Bar'>
                    <h2 className='Section-Bar'>PROYECTOS</h2>
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
                    <h2 className='Section-Bar'>HABILIDADES</h2>
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
                    <h2 className='Section-Bar'>SOBRE MI</h2>
                    <hr style={{ width: '5%', margin: '2vh 0vw', border: 'none', borderTop: '3px solid #dfec25'}} />
                    <p className='Description-Bar'>Si necesitas saber quién soy, aquí encontraras un poco de información
                    sobre mi educación e historias.</p>
                </div>
                <div className="about-content" style={{padding: "5% 20% 5% 20%"}}>
                    <p>
                        Soy un desarrollador en formación con una meta clara: convertirme en Fullstack Developer avanzado. 
                        Me apasiona crear soluciones completas, desde el diseño y desarrollo web hasta la integración con servicios en la nube y APIs. 
                        Actualmente estoy profundizando en estructuras de datos, algoritmos y programación modular como parte de mi camino autodidacta.
                        Estudio en la Universidad de Guadalajara y estoy comprometido con mi crecimiento personal y profesional.<br /><br />
                        Fuera del código, me encantan los videojuegos, la música, tocar instrumentos y, por supuesto, los tacos. 
                        Siempre estoy buscando un buen equilibrio entre trabajar, aprender y disfrutar lo que me gusta.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Index;