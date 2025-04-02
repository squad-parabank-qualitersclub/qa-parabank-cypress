import UpdateDeUsuario from '../../support/pageObject/updateDeUsuario.pageObject';

describe('Feature: Update de usuário', () => {
    beforeEach(function () {  
        cy.registerAndlogin();
        cy.fixture('environment.json').then((data) => { 
            this.userData = data; // Armazena corretamente os dados no contexto do teste
        });
    });

    it('Validar Update de Usuário', function () {  
        UpdateDeUsuario.acessarUpdateDeUsuario();
        UpdateDeUsuario.preencherFormularioUpdateDeUsuario(this.userData.update); 
    });
});

