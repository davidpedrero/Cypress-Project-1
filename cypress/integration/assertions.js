it('learning assertions', function() {

  cy.visit('https://example.cypress.io/')
  cy.contains('get').click()
  cy.get('#query-btn', {timeout: 4000}).should('contain', 'Button')
  .should('have.class', 'query-btn')
  .should('be.enabled')

  cy.get('#query-btn').invoke('attr', 'id')
  .should('equal', 'query-btn')

  cy.get('#query-btn')
  .should('contain', 'Button')
  .and('have.class', 'query-btn')


    // Explicit Assertions
    // Expect
  expect(true).to.be.true

  let name = 'David'
  expect(name).to.be.equal('David')

  // assert
  assert.equal(4, 4, 'YO DUMBASS, NOT EQUAL')
  assert.strictEqual(4, '4', 'NOT STRICTLY EQUAL')


})