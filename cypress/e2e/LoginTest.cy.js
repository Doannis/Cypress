///<reference types="cypress" />
import LoginPage from '../integration/pom/LoginPage.spec'

describe('My test suite', () => {
     it('Open the browser', () => {
          LoginPage.Navegar();
          cy.wait(5000)     
     });

     it('Validar Home Page', () => {
          cy.wait(5000)     
        //  LoginPage.ValidateHomePage()
     });

     it('Open the Register Option', () => {
          LoginPage.ValidateRegisterOptionVisible()
         LoginPage.ClickRegisterOption()
     });
})






