import {
    updateDeUsuarioElements,
    validateUpdate,
    menuUpdate
}from '../elements/updateDeUsuario.elements';

class UpdateDeUsuarioPageObject {

    acessarUpdateDeUsuario() {
        cy.get(menuUpdate.menuUpdateUser).click();
    }

    preencherFormularioUpdateDeUsuario() {
        cy.get(updateDeUsuarioElements.inputFirstName).clear().type('Novo Nome');
        cy.get(updateDeUsuarioElements.inputLastName).clear().type('Novo Sobrenome');
        cy.get(updateDeUsuarioElements.inputStreet).clear().type('Nova Rua');
        cy.get(updateDeUsuarioElements.inputCity).clear().type('Nova Cidade');
        cy.get(updateDeUsuarioElements.inputState).clear().type('Novo Estado');
        cy.get(updateDeUsuarioElements.inputZipCode).clear().type('987654');
        cy.get(updateDeUsuarioElements.inputPhoneNumber).clear().type('987654321');
        cy.get(updateDeUsuarioElements.buttonUpdate).click();
    }
  
}

export default new UpdateDeUsuarioPageObject();
