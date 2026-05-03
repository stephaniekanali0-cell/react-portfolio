import React from 'react'

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {project.link && (
        <a href={project.link} target="_blank" rel="noreferrer">
          View Project
        </a>
      )}
    </div>
  )
}

export default ProjectCard