import { getNavItem, checkLocation } from '../support/app.po';

describe('dashboard', () => {
  beforeEach(() => cy.login('/home'));

  it('should have courses', () => {
    cy.get('[data-cy=list-item]').should('have.length.greaterThan', 0);
  });
});
