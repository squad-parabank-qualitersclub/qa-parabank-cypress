import { realizarLoginElements } from '../elements/realizarLogin.elements';

class LoginPageObject {
  preencherFormularioLogin() {
    cy.get(realizarLoginElements.inputFirstName).type('patyrosa');  // Nome de usuário
    cy.get(realizarLoginElements.inputPassword).type('123456');  // Senha
    cy.get(realizarLoginElements.inputSubmit).click();  // Clicar no botão de login
  }
  
}

export default new LoginPageObject();


