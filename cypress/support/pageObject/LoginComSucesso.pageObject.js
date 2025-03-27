import { realizarLoginElements } from '../elements/realizarLogin.elements';

class LoginPageObject {
  preencherFormularioLogin(userData) {
    cy.get(realizarLoginElements.inputFirstName).type(userData.userName);  // Nome de usuário
    cy.get(realizarLoginElements.inputPassword).type(userData.senha);  // Senha
    cy.get(realizarLoginElements.inputSubmit).click();  // Clicar no botão de login
  }
  
}

export default new LoginPageObject();


