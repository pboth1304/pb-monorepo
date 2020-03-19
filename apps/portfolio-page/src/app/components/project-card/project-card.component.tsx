import React from 'react';
import ProjectCardContainer from './project-card.styles';
import { Project } from '../../models/project.model';

const ProjectCard = ({ title, type, backgroundImagePath }: Project) => (
  <ProjectCardContainer backgroundImagePath={backgroundImagePath}>
    <span className="project-card__type">{type}</span>
    <h3 className="project-card__title">{title}</h3>
  </ProjectCardContainer>
);

export default ProjectCard;
