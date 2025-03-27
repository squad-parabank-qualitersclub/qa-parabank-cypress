import LoginPageObject from '../../support/pageObject/LoginComSucesso.pageObject'

describe('Feature: Logar com sucesso', () => {
  let userData;
 before (() => {
    cy.visit('/');
    cy.fixture('environment.json').then((data)=>{
      userData = data
    })
 });
 it('Validar o login com sucesso', () => {
   LoginPageObject.preencherFormularioLogin(userData.login);
 });
});