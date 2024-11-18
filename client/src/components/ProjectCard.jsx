//import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import '../App.css';

// hover effects: https://codepen.io/nxworld/pen/ZYNOBZ
// tooltip: https://www.npmjs.com/package/react-tippy

function ProjectCard({ image, title, description, projectUrl, projectGitUrl }) {

  return (
    <div className="project-card">
      <a className="a-title" href={projectUrl} target="_blank" rel="noopener noreferrer">
      <div className="image-container">
        <img src={image} alt={title} className="project-image"/>

        <div className="label">
          <p>View this App in Browser</p>
        </div>
        </div>
        </a>
      
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <Tooltip title="Visit this GitHub Repo" position="top" trigger="mouseenter" className="custom-tooltip-content">
          <a href={projectGitUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </Tooltip>

      </div>
    </div>

  );
}

export default ProjectCard;