/// <reference types="cypress" />


it("google test", function() {
  
  cy.visit("https://google.com")
  cy.get('.gLFyf').type('Automation Step by Step{enter}')
  cy.contains('Videos').click()

})

it.only("login test", function() {

  cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/login");
  cy.get('#txtUsername').type("Admin")
  cy.get('#txtPassword').type("admin123")
  cy.get('#btnLogin').click();

})

// https://www.youtube.com/watch?v=vZamodE6hrs&list=PLhW3qG5bs-L9LTfxZ5LEBiM1WFfvX3dJo&index=8 