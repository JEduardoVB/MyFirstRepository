import React from 'react';
import '../styles/Skills.css';

// Importa los iconos (puedes usar react-icons, SVG o imágenes)
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { FaJava, FaPython, FaNode } from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiPostman, SiBootstrap, SiDjango, SiPostgresql,SiSpringboot} from 'react-icons/si';

const Skills = () => {
  const skillsData = [
    { name: 'JavaScript', icon: <FaJs />},
    { name: 'HTML5', icon: <FaHtml5 />},
    { name: 'CSS3', icon: <FaCss3Alt />},
    { name: 'Git', icon: <FaGitAlt />},
    { name: 'C++', icon: <SiCplusplus />},
    { name: 'Python', icon: <FaPython />},
    { name: 'MySQL', icon: <SiMysql />},
    { name: 'Postman', icon: <SiPostman />},
    { name: 'Java', icon: <FaJava />},
    { name: 'Bootstrap', icon: <SiBootstrap />},
    { name: 'Django', icon: <SiDjango />},
    { name: 'PostgreSQL', icon: <SiPostgresql />},
    { name: 'Spring Boot', icon: <SiSpringboot />},
    { name: 'React', icon: <FaReact />},
    { name: 'Node.js', icon: <FaNode />}
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