import React from 'react';
import '../styles/Skills.css';

// Importa los iconos (puedes usar react-icons, SVG o imágenes)
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const skillsData = [
    { name: 'React', icon: <FaReact />, level: 'Avanzado' },
    { name: 'JavaScript', icon: <FaJs />, level: 'Avanzado' },
    { name: 'TypeScript', icon: <SiTypescript />, level: 'Intermedio' },
    { name: 'HTML5', icon: <FaHtml5 />, level: 'Experto' },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 'Experto' },
    { name: 'Node.js', icon: <FaNodeJs />, level: 'Intermedio' },
    { name: 'MongoDB', icon: <SiMongodb />, level: 'Intermedio' },
    { name: 'Express', icon: <SiExpress />, level: 'Intermedio' },
    { name: 'Git', icon: <FaGitAlt />, level: 'Intermedio' },
    { name: 'Tailwind', icon: <SiTailwindcss />, level: 'Avanzado' },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className='Bar'>
        <h2 className='Section-Bar'>SKILLS</h2>
        <hr style={{ width: '5%', margin: '2vh 0vw', border: 'none', borderTop: '3px solid #fdfdfd' }} />
        <p className='Description-Bar'>Tecnologías y herramientas que domino y uso en mis proyectos</p>
      </div>
      
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-info">
              <h3>{skill.name}</h3>
              <div className="skill-level">
                <div 
                  className="level-bar" 
                  style={{ width: skill.level === 'Experto' ? '100%' : 
                           skill.level === 'Avanzado' ? '80%' : '60%' }}
                ></div>
              </div>
              <span className="skill-tag">{skill.level}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;