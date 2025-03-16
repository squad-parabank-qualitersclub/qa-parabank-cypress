
describe('EXEMPLO DE UTILIZAÇÃO DO CYPRESS COMMANDS', () => {
    before(() => {
        cy.registerAndlogin();
    });

    it('FAÇA SEU TESTE AQUI', () => {
        cy.get('#leftPanel > ul > :nth-child(1) > a').click();
        cy.get('#type').select(0);
        cy.get('#fromAccountId').select(0);
        cy.get('input[type=button]').should('have.value', 'Open New Account').click();
    });
});