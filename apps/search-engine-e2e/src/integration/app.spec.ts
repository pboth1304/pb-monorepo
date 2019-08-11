import { getGreeting } from '../support/app.po';

describe('search-engine', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to search-engine!');
  });
});
