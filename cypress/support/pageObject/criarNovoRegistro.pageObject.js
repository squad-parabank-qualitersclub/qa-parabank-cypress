import {criarNovoRegistroElements, validarCriacaoNovoRegistroElements} from '../elements/criarNovoRegistro.elements'

const random = Math.floor(Math.random() * 1000)

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
        cy.get(criarNovoRegistroElements.inputUsername).type(`teste${random}`)
        cy.get(criarNovoRegistroElements.inputPassword).type('Teste')
        cy.get(criarNovoRegistroElements.inputRepeatedPassword).type('Teste')
        cy.get(criarNovoRegistroElements.buttonRegister).click()
    }

    validarCriacaoNovoRegistro() {
        cy.get(validarCriacaoNovoRegistroElements.labelWelcome).should('contain', 'Welcome')
        cy.get(validarCriacaoNovoRegistroElements.mensagemWelcome).contains('Your account was created successfully. You are now logged in.')
        cy.get(validarCriacaoNovoRegistroElements.titleWelcome).should('contain', 'Welcome')
    }
}

export default new CriarNovoRegistroPageObject();