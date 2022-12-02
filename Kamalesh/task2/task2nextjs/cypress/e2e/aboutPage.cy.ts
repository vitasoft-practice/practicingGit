describe('checking about page', () => {
    it('should return nav bar and about page contents', () => {
      cy.visit('http://localhost:3000/')
      cy.get(".FallPage_Fallpage__HY7BZ").should('be.visible')
      //checking left side content
      cy.get(".FallPage_leftsidePage__6bx1V").should('be.visible')
      cy.get(".FallPage_leftPageHeader__IrxvT").should('be.visible').contains('Your patients are on the web, you should be too.')
      cy.get(".FallPage_leftPageContent__W0CFz").should('be.visible').contains('Modernize your practice with cutting edge e-commerce technology, exclusively through Z Suite.')
      
      //checking right side content
      cy.get(".FallPage_rightsidePage__zuU0T").should('be.visible')
      cy.get(".FallPage_womenImage__fHbf7").should('be.visible')
      cy.get(".FallPage_graph1___eORv").should('be.visible')
      cy.get(".FallPage_graph2__NxEkO").should('be.visible')
      cy.get(".FallPage_doctorPrescription__WqW6b").should('be.visible')
      cy.get(".FallPage_catalog__wM9KK").should('be.visible')

      //checking if navbar is present
      cy.get(".navbar").should('be.visible')
      cy.get(".leftNav").should('be.visible')
      cy.get(".rightNav").should('be.visible')
    })
  })