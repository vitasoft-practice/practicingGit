import { any } from "cypress/types/bluebird"

describe('checking dashboard/index page', () => {
    before(() => Cypress.automation(
        'remote:debugger:protocol', 
        { 
          command: 'Network.setCacheDisabled',
          params: { cacheDisabled: true }
        }
    ))
    it('should return patients of the logging in doctor', () => {
      cy.visit('http://localhost:3000/logIn/login')

      cy.get("#email[placeholder*='email']").type("mageshmohan@gmail.com")
      cy.get("#password[placeholder*='password']").type("987654")
      cy.intercept("POST",'http://localhost:3000/api/login').as('loginCall')
      cy.get(".LoginButton").click()
      
      cy.wait('@loginCall').then((loginObj : any) => {
        cy.log(loginObj)
        cy.intercept("GET",`http://localhost:8000/patient/${loginObj.response.body.doctorId}`).as('doctorPatienApi')
        //cy.request(`http://localhost:8000/patient/${loginObj.response.body.doctorId}`)
        //.then((response: any) => {
        // cy.log(response)
        //})
        
      })
      
      cy.wait('@doctorPatienApi').then((response: any) => {
        cy.log(response.response.body.length)
        const responseLength = response.response.body.length
        cy.wrap(responseLength).as("responseLength")

        //check if the doctorPatientTable has four columns
        cy.get("#doctorPatientsTable")
        .find("thead").find("tr").find("th").then((cell:any) => {
            expect(cell.length).to.eq(4)
            //checking table header content
            cy.get('#doctorPatientsTable > thead > tr > th:nth-child(1)').invoke("text").should("eq", "First Name"); 
            cy.get('#doctorPatientsTable > thead > tr > th:nth-child(2)').invoke("text").should("eq", "Last Name"); 
            cy.get('#doctorPatientsTable > thead > tr > th:nth-child(3)').invoke("text").should("eq", "email"); 
            cy.get('#doctorPatientsTable > thead > tr > th:nth-child(4)').invoke("text").should("eq", "country"); 
          });

        //get the doctorPatientTable and check if the rows generated is equal to the response body length
        cy.get("#doctorPatientsTable")
        .find("tbody")
        .find("tr")
        .then((row:any) => {
          cy.log(row.length);
          expect(row.length).to.eq(responseLength)
        });
      })
      
    })
  })