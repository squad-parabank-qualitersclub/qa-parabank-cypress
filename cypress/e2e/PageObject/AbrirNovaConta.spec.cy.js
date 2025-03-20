import abrirNovaContaPageObject from "../../support/pageObject/abrirNovaConta.pageObject";

describe('Feature: Abertura de Conta', () => {
    before(() => {
        cy.registerAndlogin();
    });

    it('Abrir Nova Conta', () => {
        abrirNovaContaPageObject.acessarFormulárioAbrirNovaConta();
        abrirNovaContaPageObject.preencherFormulárioAbrirNovaConta();
        abrirNovaContaPageObject.validarAberturaDeNovaConta();
    });
});