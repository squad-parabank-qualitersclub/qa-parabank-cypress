describe.skip('Validar Login com sucesso', () => {
    it('Logar com sucesso', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
      /* ==== Generated with Cypress Studio ==== */
      cy.get(':nth-child(2) > .input').type('patyrosa');
      cy.get(':nth-child(4) > .input').type('123456');
      cy.get(':nth-child(5) > .button').click();
      cy.get('.smallText').click();
      cy.get('#showOverview > .title').click();
      /* ==== End Cypress Studio ==== */
    })
  })

 