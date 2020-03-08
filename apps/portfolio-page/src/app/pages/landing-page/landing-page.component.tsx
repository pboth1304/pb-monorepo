import React from 'react';
import LandingPageContainer from './landing-page.styles';
import Header from '../../components/header/header.component';
import About from '../../components/about/about.component';

const LandingPage = () => (
  <LandingPageContainer>
    <Header />
    <About />
  </LandingPageContainer>
);

export default LandingPage;
