import { getGreeting } from '../support/app.po';

describe('demo-nx-cypress-integration-git-hub-workflow', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains(
      'Welcome demo-nx-cypress-integration-git-hub-workflow'
    );
  });
  it('should edit person', () => {
    cy.get('#personName').type('Oswald of Northumbria');
    cy.get('#personEmail').type('oswald.northumbria@gmail.com');
    cy.get('#submit').click();
    cy.get('.ant-notification-notice-message').contains('Saved');
  });
});
