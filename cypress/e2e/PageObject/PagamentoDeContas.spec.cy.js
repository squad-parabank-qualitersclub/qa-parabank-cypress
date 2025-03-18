import PagamentoDeContas from '../../support/pageObject/pagamentoDeContas.pageObject';

describe('Feature: Pagamento de Contas', () => {
  before(() => {
    cy.registerAndlogin();
  });

  it('CT01: Criar e Validar a realização do novo pagamento', () => {
    cy.get('#leftPanel > ul > :nth-child(4) > a').click();
    PagamentoDeContas.preencherFormularioPagamentoDeConta();
    PagamentoDeContas.validarPagamentoDeContas();
  });
});
