import React from 'react';
import LandingPageContainer from './landing-page.styles';
import Header from '../../components/header/header.component';
import About from '../../components/about/about.component';
import TechStack from '../../components/tech-stack/tech-stack.component';

const LandingPage = () => (
  <LandingPageContainer>
    <Header />
    <About />
    <TechStack />
  </LandingPageContainer>
);

export default LandingPage;
