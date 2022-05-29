export class LoginPage {

    navigate() {
        cy.visit("https://trytestingthis.netlify.app/index.html")
    }

    enterUsername() {
        cy.get('#uname').type("test")
    }

    enterPassword() {
        cy.get('#pwd').type("test")
    }
    
    clickLogin() {
        cy.get('[type="submit"]').click()
    }


} 