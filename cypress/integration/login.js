import {LoginPage} from "../pages/login-page"

const loginPage = new LoginPage()


it("login test", function() {

    loginPage.navigate();
    loginPage.enterUsername();
    loginPage.enterPassword();
    loginPage.clickLogin();

    // cy.visit("https://trytestingthis.netlify.app/index.html")
    // cy.get('#uname').type("test")
    // cy.get('#pwd').type("test")
    // cy.get('[type="submit"]').click()
})

