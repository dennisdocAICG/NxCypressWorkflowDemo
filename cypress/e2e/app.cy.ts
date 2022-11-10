

describe('demo-nx-cypress-integration-git-hub-workflow', () => {
  beforeEach(() => cy.visit('http://localhost:3000/'));
  it('should edit person', () => {
    cy.get('#personName').type('Oswald of Northumbria');
    cy.get('#personEmail').type('oswald.northumbria@gmail.com');
    cy.get('#submit').click();
    cy.get('.ant-notification-notice-message').contains('Saved');
  });
});
