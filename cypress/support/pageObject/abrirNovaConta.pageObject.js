import { abrirNovaContaElements, validarAbrirNovaContaElements } from "../elements/abrirNovaConta.elements";

class AbrirNovaContaPageObject {
    acessarFormulárioAbrirNovaConta() {
        cy.get(abrirNovaContaElements.openNewAccountMenuLink).click();
    }

    preencherFormulárioAbrirNovaConta() {
        cy.get(abrirNovaContaElements.typeOfAccountSelect).select(0);
        cy.get(abrirNovaContaElements.accountIdSelect).select(0);
        cy.get(abrirNovaContaElements.openNewAccountButton).should('have.value', 'Open New Account').click();
    }

    validarAberturaDeNovaConta() {
        cy.get(validarAbrirNovaContaElements.openAccountTitle).contains('Account Opened!');
        cy.get(validarAbrirNovaContaElements.openAccountText).contains('Congratulations, your account is now open.');
        cy.get(validarAbrirNovaContaElements.newAccountText).contains('Your new account number:');
        cy.get(validarAbrirNovaContaElements.newAccountId).contains(/^[0-9]{5}$/).and('have.attr', 'href');
    }
}

export default new AbrirNovaContaPageObject();