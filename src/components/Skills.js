import React from 'react';
import '../styles/Skills.css';

// Importa los iconos (puedes usar react-icons, SVG o imágenes)
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const skillsData = [
    { name: 'React', icon: <FaReact />},
    { name: 'JavaScript', icon: <FaJs />},
    { name: 'TypeScript', icon: <SiTypescript />},
    { name: 'HTML5', icon: <FaHtml5 />},
    { name: 'CSS3', icon: <FaCss3Alt />},
    { name: 'Node.js', icon: <FaNodeJs />},
    { name: 'MongoDB', icon: <SiMongodb />},
    { name: 'Express', icon: <SiExpress />},
    { name: 'Git', icon: <FaGitAlt />},
    { name: 'Tailwind', icon: <SiTailwindcss />},
  ];

  return (
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-info">
              <h3>{skill.name}</h3>
            </div>
          </div>
        ))}
      </div>
  );
};

export default Skills;