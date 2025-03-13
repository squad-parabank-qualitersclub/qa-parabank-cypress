import {criarNovoRegistroElements, validarCriacaoNovoRegistroElements} from '../elements/criarNovoRegistro.elements'

class CriarNovoRegistroPageObject {

    preencherFormularioCriarNovoRegistro() {
        cy.get(criarNovoRegistroElements.inputFirstName).type('Teste')
        cy.get(criarNovoRegistroElements.inputLastName).type('Teste')
        cy.get(criarNovoRegistroElements.inputStreet).type('Rua Teste')
        cy.get(criarNovoRegistroElements.inputCity).type('Cidade Teste')
        cy.get(criarNovoRegistroElements.inputState).type('Estado Teste')
        cy.get(criarNovoRegistroElements.inputZipCode).type('123456')
        cy.get(criarNovoRegistroElements.inputPhoneNumber).type('123456')
        cy.get(criarNovoRegistroElements.inputSSN).type('123456')
        cy.get(criarNovoRegistroElements.inputUsername).type('Teste05')
        cy.get(criarNovoRegistroElements.inputPassword).type('Teste')
        cy.get(criarNovoRegistroElements.inputRepeatedPassword).type('Teste')
        cy.get(criarNovoRegistroElements.buttonRegister).click()
    }

    validarCriacaoNovoRegistro() {
        cy.get(validarCriacaoNovoRegistroElements.labelWelcome).should('contain', 'Welcome')
        cy.get(validarCriacaoNovoRegistroElements.mensagemWelcome).contains('Thank you for registerYour account was created successfully. You are now logged in.ing')
        cy.get(validarCriacaoNovoRegistroElements.titleWelcome).should('contain', 'Welcome')
    }
}

export default new CriarNovoRegistroPageObject();