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
    { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB' },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
    { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
    { name: 'Java', icon: <FaJava />, color: '#007396' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3' },
    { name: 'Django', icon: <SiDjango />, color: '#092E20' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
    { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6DB33F' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Node.js', icon: <FaNode />, color: '#339933' }
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