// components/ProjectCard.js
import React from 'react';
import '../styles/Proyects.css'; // Asegúrate de tener los estilos

const ProjectCard = ({ title, description, imageUrl, tags }) => {
  return (
    <div className='Proyect'>
      <div className='Port'>
        {imageUrl && <img src={imageUrl} alt={title} />}
      </div>
      <div className='Content-Proyect'>
        <h2 className='Name-Proyect'>{title}</h2>
        <p className='Description-Proyect'>{description}</p>
        {tags && (
          <div className="project-tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;