import { 
    updateDeUsuarioElements, 
    menuUpdate 
} from '../elements/updateDeUsuario.elements';

class UpdateDeUsuarioPageObject {
    
    acessarUpdateDeUsuario() {
        cy.get(menuUpdate.menuUpdateUser).click();
    }

    preencherFormularioUpdateDeUsuario(userData) {
        cy.get(updateDeUsuarioElements.inputFirstName).clear().type(userData.firstName);
        cy.get(updateDeUsuarioElements.inputLastName).clear().type(userData.lastName);
        cy.get(updateDeUsuarioElements.inputStreet).clear().type(userData.street);
        cy.get(updateDeUsuarioElements.inputCity).clear().type(userData.city);
        cy.get(updateDeUsuarioElements.inputState).clear().type(userData.state);
        cy.get(updateDeUsuarioElements.inputZipCode).clear().type(userData.zipCode);
        cy.get(updateDeUsuarioElements.inputPhoneNumber).clear().type(userData.phoneNumber);
        cy.get(updateDeUsuarioElements.buttonUpdate).click();
    }
}

export default new UpdateDeUsuarioPageObject();

