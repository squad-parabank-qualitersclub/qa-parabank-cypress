import {
  pagamentoDeContasElements,
  validarPagamentoDeContasElements,
} from '../elements/pagamentoDeContas.elements';

class PagamentoDeContasPageObject {
  preencherFormularioPagamentoDeConta() {
    cy.get(pagamentoDeContasElements.inputPayeeName).type('Empresa de Teste 2');
    cy.get(pagamentoDeContasElements.inputAddress).type('Rua de Teste, 1234');
    cy.get(pagamentoDeContasElements.inputCity).type('Cidade de Teste 2');
    cy.get(pagamentoDeContasElements.inputState).type('Estado de Teste 2');
    cy.get(pagamentoDeContasElements.inputZipCode).type('123456');
    cy.get(pagamentoDeContasElements.inputPhoneNumber).type('123456788');
    cy.get(pagamentoDeContasElements.inputAccountNumber).type('123467');
    cy.get(pagamentoDeContasElements.inputVerifyAccountNumber).type('123467');
    cy.get(pagamentoDeContasElements.inputAmount).type('100.00');

    // Captura a conta selecionada dinamicamente
    cy.get(pagamentoDeContasElements.selectFromAccount)
      .invoke('val')
      .then((selectedAccount) => {
        cy.wrap(selectedAccount).as('selectedAccount'); // Salva a conta como alias

        // Seleciona a conta correta
        cy.get(pagamentoDeContasElements.selectFromAccount).select(
          selectedAccount
        );
      });

    cy.get(pagamentoDeContasElements.buttonSendPayment).click();
  }

  validarPagamentoDeContas() {
    cy.get(validarPagamentoDeContasElements.titleWelcome).should(
      'contain',
      'Bill Payment Complete'
    );

    // Recupera a conta selecionada antes do envio do pagamento
    cy.get('@selectedAccount').then((selectedAccount) => {
      cy.get(validarPagamentoDeContasElements.mensagemWelcome).should(
        'contain',
        `Bill Payment to Empresa de Teste 2 in the amount of $100.00 from account ${selectedAccount} was successful.`
      );
    });

    cy.wait(2000); // Espera adicional de 2 segundos
  }
}

export default new PagamentoDeContasPageObject();
