import React from 'react';
import { ProjectsGrid, RecentWorkContainer } from './recent-work.styles';
import ProjectCard from '../project-card/project-card.component';
import { Project } from '../../models/project.model';

const RecentWork = () => {
  const projects: Project[] = [
    {
      title: 'Projekt 1',
      type: 'Web Development',
      backgroundImagePath: 'assets/img/card-img-1.jpg'
    },
    {
      title: 'Projekt 2',
      type: 'Webdesign',
      backgroundImagePath: 'assets/img/card-img-1.jpg'
    },
    {
      title: 'Projekt 3',
      type: 'Web Development',
      backgroundImagePath: 'assets/img/card-img-1.jpg'
    }
  ];

  return (
    <RecentWorkContainer>
      <h2 className="heading-2">My Recent Work</h2>
      <ProjectsGrid>
        {projects.map(({ title, type, backgroundImagePath }: Project) => (
          <ProjectCard
            key={title}
            title={title}
            type={type}
            backgroundImagePath={backgroundImagePath}
          />
        ))}
      </ProjectsGrid>
    </RecentWorkContainer>
  );
};

export default RecentWork;
