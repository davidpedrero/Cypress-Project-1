/// <reference types="cypress" />


it("google test", function() {
  cy.visit("https://google.com")
  cy.get('.gLFyf').type('Automation Step by Step{enter}')
  cy.contains('Videos').click()
})

// "https://www.youtube.com/watch?v=vZamodE6hrs&list=PLhW3qG5bs-L9LTfxZ5LEBiM1WFfvX3dJo&index=7"