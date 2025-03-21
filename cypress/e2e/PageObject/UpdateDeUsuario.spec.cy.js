
import  UpdateDeUsuario  from '../../support/pageObject/updateDeUsuario.pageObjet'

describe('Feature: Update de usuario', () => {
    before(() => {
        cy.registerAndlogin();
    });

    it('Validar  UpdateDeUsuario ', () => {
        UpdateDeUsuario.acessarUpdateDeUsuario();
        UpdateDeUsuario.preencherFormularioUpdateDeUsuario();
       
    });
});
