import { getGreeting } from '../support/app.po';

describe('portfolio-page', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to portfolio-page!');
  });
});
