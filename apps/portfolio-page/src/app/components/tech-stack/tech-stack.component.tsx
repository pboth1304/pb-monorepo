import React from 'react';
import {
  TechStackBackgroundImg,
  TechStackContainer,
  TechStackTechList,
  TechStackTechListItem,
  TechStackTextContent
} from './tech-stack.styles';

const TechStack = () => (
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
      <TechStackTechListItem gridColStart={2} gridColEnd={3}>
        Test 1
      </TechStackTechListItem>
      <TechStackTechListItem gridColStart={3} gridColEnd={4}>
        Test 2
      </TechStackTechListItem>
    </TechStackTechList>
  </TechStackContainer>
);

export default TechStack;
