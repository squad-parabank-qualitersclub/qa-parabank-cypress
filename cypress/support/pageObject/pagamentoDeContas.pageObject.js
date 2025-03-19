import {
  pagamentoDeContasElements,
  validarPagamentoDeContasElements,
} from '../elements/pagamentoDeContas.elements';

class PagamentoDeContasPageObject {
  acessarPagamentoDeContas() {
    cy.get(pagamentoDeContasElements.linkPagamentoDeContas).click();
  }

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
  }

  validarPagamentoDeContas() {
    cy.get(pagamentoDeContasElements.selectFromAccount)
      .find('option') // Pega todas as opções disponíveis no dropdown
      .then(($options) => {
        const availableOptions = [...$options]
          .map((opt) => opt.value)
          .filter((val) => val); // Filtra opções vazias
        const randomAccount =
          availableOptions[Math.floor(Math.random() * availableOptions.length)]; // Escolhe um aleatório

        cy.log('Conta selecionada:', randomAccount); // Log para depuração
        cy.get(pagamentoDeContasElements.selectFromAccount).select(
          randomAccount
        );

        cy.get(pagamentoDeContasElements.buttonSendPayment).click();

        cy.get(validarPagamentoDeContasElements.mensagemWelcome).should(
          'contain',
          `Bill Payment to Empresa de Teste 2 in the amount of $100.00 from account ${randomAccount} was successful.`
        );

        cy.wait(2000); // Espera adicional de 2 segundos

        cy.get(validarPagamentoDeContasElements.titleWelcome).should(
          'contain',
          'Bill Payment Complete'
        );
      });
  }
}

export default new PagamentoDeContasPageObject();
