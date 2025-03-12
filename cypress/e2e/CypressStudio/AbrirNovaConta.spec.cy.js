describe('Validar a abertura de uma nova conta', () => {
    it('Fazer login e abrir uma nova conta', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(2) > .input').clear('j');
        cy.get(':nth-child(2) > .input').type('john');
        cy.get(':nth-child(4) > .input').clear();
        cy.get(':nth-child(4) > .input').type('demo');
        cy.get(':nth-child(5) > .button').click();
        cy.get('#leftPanel > ul > :nth-child(1) > a').click();
        cy.get('#type').select(0);
        cy.get('#fromAccountId').select(0);
        cy.get('input[type=button]').should('have.value', 'Open New Account').click();
        /* ==== End Cypress Studio ==== */
    })
})