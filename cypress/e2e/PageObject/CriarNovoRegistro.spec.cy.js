import  CriarNovoRegistro  from '../../support/pageObject/criarNovoRegistro.pageObject';

describe('Feature: Criar novo usuário', () => {
    let userData; 

    before(() => {
        cy.visit('/register.htm');
        cy.fixture('environment.json').then((data)=>{
            userData = data
        })
    });

    it('CT01: Criar e Validar a criação de novo usuário', () => {
        CriarNovoRegistro.preencherFormularioCriarNovoRegistro(userData.register);
        CriarNovoRegistro.validarCriacaoNovoRegistro(userData.register);
    });
});