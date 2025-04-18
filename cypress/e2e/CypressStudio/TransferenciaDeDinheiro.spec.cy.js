describe.skip('Validar a transferência de dinheiro', () => {
    it('Ter duas contas e validar a transferência de dinheiro entre elas', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
      /* ==== Generated with Cypress Studio ==== */
      cy.get(':nth-child(2) > .input').clear();
      cy.get(':nth-child(2) > .input').type('john');
      cy.get(':nth-child(4) > .input').clear();
      cy.get(':nth-child(4) > .input').type('demo');
      cy.get(':nth-child(5) > .button').click();
      cy.get('#leftPanel > ul > :nth-child(3) > a').click();
      cy.get('#amount').clear();
      cy.get('#amount').type('999');
      cy.get('#toAccountId').select('12456');
      cy.get(':nth-child(4) > .button').click();
      cy.get('#showResult > .title').click();
      cy.get('#rightPanel').click();
      /* ==== End Cypress Studio ==== */
    })
  })