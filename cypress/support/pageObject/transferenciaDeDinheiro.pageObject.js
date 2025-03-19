import {transferenciaDeDinheiroElements, validarTransferenciaDeDinheiroElements} from '../elements/transferenciaDeDinheiro.elements.js'

class TransferenciaDeDinheiroPageObject {

    transferenciaDeDinheiro(valor) {

        cy.get(transferenciaDeDinheiroElements.inputContaOrigem).find('option:selected').invoke('text').
        then((opcao1) => { cy.get(transferenciaDeDinheiroElements.inputContaDestino).find('option:selected').invoke('text').
            then((opcao2) => {
                        cy.get(transferenciaDeDinheiroElements.inputValor).type(valor);
        cy.get(transferenciaDeDinheiroElements.inputContaOrigem).select(opcao1);
        cy.get(transferenciaDeDinheiroElements.inputContaDestino).select(opcao2);
        cy.wrap(valor).as('valorDigitado');
        cy.wrap(opcao1).as('contaOrigemSelecionada');
        cy.wrap(opcao2).as('contaDestinoSelecionada');
        cy.get(transferenciaDeDinheiroElements.buttonTransferir).click();
        })});
    }
    validarTransferenciaDeDinheiro() {

        cy.get(validarTransferenciaDeDinheiroElements.tituloSucesso).contains('Transfer Complete!');

        cy.get('@valorDigitado').then((valorDigitado) => {
            cy.get('@contaOrigemSelecionada').then((contaOrigemSelecionada) => {
              cy.get('@contaDestinoSelecionada').then((contaDestinoSelecionada) => {
                cy.get(validarTransferenciaDeDinheiroElements.detalhesTransferencia)
                  .invoke('text')
                  .should('match', new RegExp(`\\$${valorDigitado}.00 has been transferred from account #${contaOrigemSelecionada} to account #${contaDestinoSelecionada}`));
              });
            });
          });

        cy.get(validarTransferenciaDeDinheiroElements.sugestaoAtividadeConta).contains('See Account Activity for more details.');
    }
}

export default new TransferenciaDeDinheiroPageObject();