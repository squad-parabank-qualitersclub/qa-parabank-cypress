import pagamentoDeContasPageObject from '../../support/pageObject/pagamentoDeContas.pageObject';
('../../support/pageObject/pagamentoDeContas.pageObject');

describe('Feature: Pagamento de Contas', () => {
  before(() => {
    cy.registerAndlogin();
  });

  it('CT01: Criar e Validar a realização do novo pagamento', () => {
    pagamentoDeContasPageObject.acessarPagamentoDeContas();
    pagamentoDeContasPageObject.preencherFormularioPagamentoDeConta();
    pagamentoDeContasPageObject.validarPagamentoDeContas();
  });
});
