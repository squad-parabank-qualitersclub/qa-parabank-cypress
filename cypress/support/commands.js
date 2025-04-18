// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
import criarNovoRegistroPageObject from './pageObject/criarNovoRegistro.pageObject';

Cypress.Commands.add('registerAndlogin', () => {
  cy.visit('/register.htm');
  cy.fixture('environment.json').then((userData) => {
    criarNovoRegistroPageObject.preencherFormularioCriarNovoRegistro(userData.register);
    criarNovoRegistroPageObject.validarCriacaoNovoRegistro(userData.register);
  });
});
