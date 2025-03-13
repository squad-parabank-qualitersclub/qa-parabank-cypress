import  CriarNovoRegistro  from '../../support/pageObject/criarNovoRegistro.pageObject';

describe('Feature: Criar novo usuário', () => {
    before(() => {
        cy.visit('/register.htm');
    });

    it('CT01: Criar e Validar a criação de novo usuário', () => {
        CriarNovoRegistro.preencherFormularioCriarNovoRegistro();
        CriarNovoRegistro.validarCriacaoNovoRegistro();
    });
});