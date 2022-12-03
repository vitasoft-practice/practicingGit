import { any } from "cypress/types/bluebird"

describe('checking login page', () => {
    before(() => Cypress.automation(
        'remote:debugger:protocol', 
        { 
          command: 'Network.setCacheDisabled',
          params: { cacheDisabled: true }
        }
    ))
    it('should return nav bar and login page contents', () => {
      cy.visit('http://localhost:3000/signUp/signup')

      //checking if navbar is present
      cy.get(".navbar").should('be.visible')
      cy.get(".leftNav").should('be.visible')
      cy.get(".rightNav").should('be.visible')

      //checking SignUp page container
      cy.get(".signup_signUpHeader__V6KoW").should('be.visible')
      cy.get(".signup_signUpForm__Hshmq").should('be.visible')
      cy.get("#email[placeholder*='email']")
      cy.get("#username[placeholder*='username']")
      cy.get("#password[placeholder*='password']")
      cy.get("#signupButton").should('be.visible')
      
      //checking error messages are not shown initially 
      cy.get("#emailError").should('not.exist')
      cy.get("#usernameError").should('not.exist')
      cy.get("#passwordError").should('not.exist')

      //checking if error messages are shown when no input is given and login is clicked
      cy.get("#signupButton").click()
      cy.get("#emailError").should('be.visible')
      cy.get("#usernameError").should('be.visible')
      cy.get("#passwordError").should('be.visible')

      //checking signUp function
      cy.get("#email[placeholder*='email']").type("abcdefgh@gmail.com")
      cy.get("#username[placeholder*='username']").type("abcdefghij")
      cy.get("#password[placeholder*='password']").type("abcdefghij")

      cy.intercept("POST",'http://localhost:8000/user/signUp').as('signUpCall')
      cy.get("#signupButton").click()
      cy.wait('@signUpCall').then((signUpObj : any) => {
        cy.log(signUpObj.response.body.user._id)
        expect(signUpObj.response.body.message).to.eq("Sucess")
        expect(signUpObj.response.body.status).to.eq("200")
        expect(signUpObj.response.statusCode).to.eq(201)
        const createdId = signUpObj.response.body.user._id
        cy.wrap(createdId).as("createdId")

        //delete user after signup , to automate the testing
        cy.request({
            method: "DELETE",
            url: "http://localhost:8000/user/" + createdId 
        })
        
      })
      
    })
  })