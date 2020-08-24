import { getNavItem, checkLocation } from '../support/app.po';

describe('dashboard', () => {
  beforeEach(() => cy.login('/'));

  it('should close menu', () => {
    cy.get('[data-cy=menu]').click();

    cy.get('[data-cy=sidenav').should('be.hidden');
  });

  it('should logout', () => {
    cy.get('[data-cy=logout]').click();

    checkLocation('/login');
  });

  describe('should navigate to', () => {
    it('Home', () => {
      getNavItem(0).click();
      checkLocation('/home');
    });

    it('Courses', () => {
      getNavItem(1).click();
      checkLocation('/courses');
    });
  });
});
