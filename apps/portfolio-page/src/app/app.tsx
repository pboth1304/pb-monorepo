import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './pages/landing-page/landing-page.component';
import './styles.css';

import './styles.css';

export const App = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
  </Switch>
);

export default App;
