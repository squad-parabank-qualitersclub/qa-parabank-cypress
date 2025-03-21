import LoginPageObject from '../../support/pageObject/LoginComSucesso.pageObject'

describe('Feature: Logar com sucesso', () => {
 before (() => {
    cy.visit('/');
 });
 it('Validar o login com sucesso', () => {
   LoginPageObject.preencherFormularioLogin();
 });
});