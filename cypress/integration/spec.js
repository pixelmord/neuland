describe('Sapper template app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has the map container', () => {
    cy.get('#map');
  });

  it('navigates to /about', () => {
    cy.get('nav a').contains('about').click();
    cy.url().should('include', '/about');
  });

  it('navigates to /blog', () => {
    cy.get('nav a').contains('blog').click();
    cy.url().should('include', '/blog');
  });
});
