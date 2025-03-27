import {criarNovoRegistroElements, validarCriacaoNovoRegistroElements} from '../elements/criarNovoRegistro.elements'

const random = Math.floor(Math.random() * 1000)

class CriarNovoRegistroPageObject {

    preencherFormularioCriarNovoRegistro(userData) {
        cy.get(criarNovoRegistroElements.inputFirstName).type(userData.firstName)
        cy.get(criarNovoRegistroElements.inputLastName).type(userData.lastName)
        cy.get(criarNovoRegistroElements.inputStreet).type(userData.street)
        cy.get(criarNovoRegistroElements.inputCity).type(userData.city)
        cy.get(criarNovoRegistroElements.inputState).type(userData.state)
        cy.get(criarNovoRegistroElements.inputZipCode).type(userData.zipCode)
        cy.get(criarNovoRegistroElements.inputPhoneNumber).type(userData.phoneNumber)
        cy.get(criarNovoRegistroElements.inputSSN).type(userData.ssn)
        cy.get(criarNovoRegistroElements.inputUsername).type(`${userData.userName}${random}`)
        cy.get(criarNovoRegistroElements.inputPassword).type('Teste')
        cy.get(criarNovoRegistroElements.inputRepeatedPassword).type('Teste')
        cy.get(criarNovoRegistroElements.buttonRegister).click()
    }

    validarCriacaoNovoRegistro(userData) {
        cy.get(validarCriacaoNovoRegistroElements.labelWelcome).should('contain', 'Welcome')
        cy.get(validarCriacaoNovoRegistroElements.mensagemWelcome).contains(userData.msgeRegisterUser)
        cy.get(validarCriacaoNovoRegistroElements.titleWelcome).should('contain', 'Welcome')
    }
}

export default new CriarNovoRegistroPageObject();