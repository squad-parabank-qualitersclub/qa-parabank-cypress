import TransferenciaDeDinheiro from '../../support/pageObject/transferenciaDeDinheiro.pageObject';

describe('Validar a transferência de dinheiro', () => {
    before(() => {
        cy.registerAndlogin();
        cy.visit('/transfer.htm');
    });

    it('Ter duas contas e validar a transferência de dinheiro entre elas', () => {
        TransferenciaDeDinheiro.transferenciaDeDinheiro('999');
        TransferenciaDeDinheiro.validarTransferenciaDeDinheiro();
    });
});