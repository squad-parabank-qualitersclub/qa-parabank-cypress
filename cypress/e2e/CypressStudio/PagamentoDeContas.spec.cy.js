describe.skip('Validar o pagamento de contas', () => {
  beforeEach(() => {
    // 0. Pré-condição: Login do usuário padrão
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    cy.get('input[name="username"]').type('john');
    cy.get('input[name="password"]').type('demo');
    cy.get('input[value="Log In"]').click();
  });

  it('Realizar o envio do pagamento no Parabank e validar as informações do formulário', () => {
    // 1. Visitar a página de pagamento de contas
    cy.visit('https://parabank.parasoft.com/parabank/billpay.htm');

    // 2. Preencher o formulário de pagamento
    /* ==== Generated with Cypress Studio ==== */
    // Navegar até a página de pagamento de contas
    cy.get('#leftPanel > ul > :nth-child(4) > a').click();

    // Preencher o nome
    cy.get(':nth-child(1) > [width="20%"] > .input').clear('Empresa de Teste');
    cy.get(':nth-child(1) > [width="20%"] > .input').type('Empresa de Teste 2');

    // Preencher o endereço
    cy.get(':nth-child(2) > [width="20%"] > .input').clear('Rua de Teste, 123');
    cy.get(':nth-child(2) > [width="20%"] > .input').type('Rua de Teste, 1234');

    // Preencher a cidade
    cy.get(':nth-child(3) > [width="20%"] > .input').clear('Cidade de Teste');
    cy.get(':nth-child(3) > [width="20%"] > .input').type('Cidade de Teste 2');

    // Preencher o estado
    cy.get(':nth-child(4) > [width="20%"] > .input').clear('Estado de Teste');
    cy.get(':nth-child(4) > [width="20%"] > .input').type('Estado de Teste 2');

    // Preencher o código postal
    cy.get(':nth-child(5) > [width="20%"] > .input').clear('123456');
    cy.get(':nth-child(5) > [width="20%"] > .input').type('123456');

    // Preencher o número de telefone
    cy.get('input[name="payee.phoneNumber"]').click();
    cy.get('input[name="payee.phoneNumber"]').clear('12345688');
    cy.get('input[name="payee.phoneNumber"]').type('123456788');

    // Preencher o número da conta
    cy.get(':nth-child(8) > :nth-child(2) > .input').clear('12347');
    cy.get(':nth-child(8) > :nth-child(2) > .input').type('123467');

    // Preencher o número de verificação da conta
    cy.get(':nth-child(9) > [width="20%"] > .input').clear('12346');
    cy.get(':nth-child(9) > [width="20%"] > .input').type('123467');

    // Preencher o valor do pagamento
    cy.get(':nth-child(11) > [width="20%"] > .input').clear('1');
    cy.get(':nth-child(11) > [width="20%"] > .input').type('100.00');

    // Clicar no botão para enviar o pagamento
    cy.get(':nth-child(14) > :nth-child(2) > .button').click();
    /* ==== End Cypress Studio ==== */

    // 3. Validar a mensagem de sucesso e dados do pagamento
    /* ==== Generated with Cypress Studio ==== */
    // Clicar no link para ver detalhes do pagamento
    cy.get('.smallText').click();

    // Clicar no painel de resultados
    cy.get('#rightPanel').click();

    // Verificar o nome do beneficiário nos resultados
    cy.get('#billpayResult > :nth-child(2)').click();

    // Verificar o valor do pagamento nos resultados
    cy.get('#billpayResult > :nth-child(3)').click();
    /* ==== End Cypress Studio ==== */
  });
});
