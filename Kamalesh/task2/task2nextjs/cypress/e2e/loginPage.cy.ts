describe('checking login page', () => {
    it('should return nav bar and login page contents', () => {
      cy.visit('http://localhost:3000/logIn/login')

      //checking if navbar is present
      cy.get(".navbar").should('be.visible')
      cy.get(".leftNav").should('be.visible')
      cy.get(".rightNav").should('be.visible')

      //checking login page container
      cy.get(".loginStyle_LoginWrapper__KPwMq").should('be.visible')
      cy.get(".loginStyle_Login_header__yLJel").should('be.visible').contains('Log in Up')
      cy.get(".loginStyle_loginForm__Ztlwi").should('be.visible')
      cy.get("#email[placeholder*='email']")
      cy.get("#password[placeholder*='password']")
      cy.get(".LoginButton").should('be.visible')

      //checking error messages are not shown initially 
      cy.get("#emailerror").should('not.exist')
      cy.get("#passworderror").should('not.exist')

      //checking if error messages are shown when no input is given and login is clicked
      cy.get(".LoginButton").click()
      cy.get("#emailerror").should('be.visible')
      cy.get("#passworderror").should('be.visible')

      //checking login function
      cy.get("#email[placeholder*='email']").type("mageshmohan@gmail.com")
      cy.get("#password[placeholder*='password']").type("987654")
      cy.get(".LoginButton").click()
      cy.url().should('include', '/dashboard')
    })
  })