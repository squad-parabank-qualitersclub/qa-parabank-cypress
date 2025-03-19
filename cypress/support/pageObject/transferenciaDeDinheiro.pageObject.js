import {transferenciaDeDinheiroElements, validarTransferenciaDeDinheiroElements} from '../elements/transferenciaDeDinheiro.elements.js'

class TransferenciaDeDinheiroPageObject {
    transferenciaDeDinheiro(valor) {
        cy.get(transferenciaDeDinheiroElements.inputValor).type(valor);
        cy.wrap(valor).as('valorTransferido');
        let optionOrigem;
        cy.get(transferenciaDeDinheiroElements.inputContaOrigem).find('option').first().invoke('val').then(
            (option) => {
            optionOrigem = option;
                cy.get(transferenciaDeDinheiroElements.inputContaOrigem).select(optionOrigem);
                cy.wrap(optionOrigem).as('contaOrigemTransferencia');
            }
        );
        let optionDestino;
        cy.get(transferenciaDeDinheiroElements.inputContaDestino).find('option').last().invoke('val').then(
            (option) => {
            optionDestino = option
                cy.get(transferenciaDeDinheiroElements.inputContaDestino).select(optionDestino);
                cy.wrap(optionDestino).as('contaDestinoTransferencia');
            }
        );
        cy.get(transferenciaDeDinheiroElements.buttonTransferir).click();
    }
    validarTransferenciaDeDinheiro() {

        cy.get(validarTransferenciaDeDinheiroElements.tituloSucesso).should('have.text', 'Transfer Complete!');

        cy.get('@valorTransferido').then((valorTransferido) => {
            cy.get('@contaOrigemTransferencia').then((contaOrigemTransferencia) => {
                cy.get('@contaDestinoTransferencia').then((contaDestinoTransferencia) => {
                    const mensagemEsperadaDetalhes = `$${valorTransferido} has been transferred from account #${contaOrigemTransferencia} to account #${contaDestinoTransferencia}. `;
                    cy.get(validarTransferenciaDeDinheiroElements.detalhesTransferencia).should('have.text', mensagemEsperadaDetalhes);
                });
            });
        });

        cy.get(validarTransferenciaDeDinheiroElements.sugestaoAtividadeConta).should('have.text', 'See Account Activity for more details.');
    }
}

export default new TransferenciaDeDinheiroPageObject();