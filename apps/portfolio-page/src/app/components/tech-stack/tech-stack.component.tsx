import React from 'react';
import {
  TechStackBackgroundImg,
  TechStackContainer,
  TechStackTechList,
  TechStackTechListItem,
  TechStackTextContent
} from './tech-stack.styles';
import AngularLogo from '../../../assets/img/logos/angular-logo.png';
import TypeScriptLogo from '../../../assets/img/logos/typescript-logo.png';
import JavaScriptLogo from '../../../assets/img/logos/javascript-logo.png';
import NodeJsLogo from '../../../assets/img/logos/nodejs-logo.png';
import SassLogo from '../../../assets/img/logos/sass-logo.png';

const TechStack = () => {
  const technologies: { title: string; logo: string }[] = [
    { title: 'Angular', logo: AngularLogo },
    { title: 'TypeScript', logo: TypeScriptLogo },
    { title: 'JavaScript', logo: JavaScriptLogo },
    { title: 'Node.js', logo: NodeJsLogo },
    { title: 'SASS', logo: SassLogo }
  ];

  return (
    <TechStackContainer>
      <TechStackBackgroundImg />
      <TechStackTextContent>
        <h2 className="heading-2">My Tech Stack</h2>
        <p className="tech-stack__text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy.
        </p>
      </TechStackTextContent>
      <TechStackTechList>
        {technologies.map((technology, i) => (
          <TechStackTechListItem key={i}>
            <img
              src={technology.logo}
              alt={technology.title}
              className="tech-stack-list__item-img"
            />
          </TechStackTechListItem>
        ))}
      </TechStackTechList>
    </TechStackContainer>
  );
};

export default TechStack;
