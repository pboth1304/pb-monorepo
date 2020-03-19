import React from 'react';
import LandingPageContainer from './landing-page.styles';
import Header from '../../components/header/header.component';
import About from '../../components/about/about.component';
import TechStack from '../../components/tech-stack/tech-stack.component';
import RecentWork from '../../components/recent-work/recent-work.component';

const LandingPage = () => (
  <LandingPageContainer>
    <Header />
    <About />
    <TechStack />
    <RecentWork />
  </LandingPageContainer>
);

export default LandingPage;
