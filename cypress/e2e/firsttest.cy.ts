describe('test', () => {
  it('renders main page', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="cypress-first"]').should('exist').should('not.be.NaN');
    cy.get('[data-testid="cypress-fourth"]').should('exist');
  })

  it('renders products list',() => {
    cy.visit('http://localhost:3000/products')
    
    for(let i=1;i <= 10;i++){
      cy.get(`[data-testid="product-${i}"]`).should('exist');
    }
    
  })
})