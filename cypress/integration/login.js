import {LoginPage} from "../pages/login-page"

const loginPage = new LoginPage()


it("login test", function() {

    loginPage.navigate("https://trytestingthis.netlify.app/index.html");
    loginPage.enterUsername("test");
    loginPage.enterPassword("test");
    loginPage.clickLogin();

})

// https://www.youtube.com/watch?v=J9AHVKNDkDU&list=PLhW3qG5bs-L9LTfxZ5LEBiM1WFfvX3dJo&index=11