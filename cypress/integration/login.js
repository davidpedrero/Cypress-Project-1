
it("login test", function() {
    cy.visit("https://trytestingthis.netlify.app/index.html"), {
        "Accept": "application/json, text/plain, */*",
        "User-Agent": "axios/0.18.0"
    }
    cy.get('#uname').type("test")
    cy.get('#pwd').type("test")
    cy.get('[type="submit"]').click()
})

