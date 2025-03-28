describe.skip('Validar a criação de um novo usuário', () => {
  it('Criar novo registro no Parabank e validar login após criação', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#loginPanel > :nth-child(3) > a').click();
    cy.get('#customer\\.firstName').clear('Tatiana');
    cy.get('#customer\\.firstName').type('Tatiana');
    cy.get('#customer\\.lastName').clear('Teste');
    cy.get('#customer\\.lastName').type('Teste');
    cy.get('#customer\\.address\\.street').clear('Rua de Teste');
    cy.get('#customer\\.address\\.street').type('Rua de Teste');
    cy.get('#customer\\.address\\.city').clear('Cidade de teste');
    cy.get('#customer\\.address\\.city').type('Cidade de teste');
    cy.get('#customer\\.address\\.state').clear('Estado de teste');
    cy.get('#customer\\.address\\.state').type('Estado de teste');
    cy.get('#customer\\.address\\.zipCode').clear('Zip Code');
    cy.get('#customer\\.address\\.zipCode').type('Zip Code');
    cy.get('#customer\\.phoneNumber').clear('Telefone');
    cy.get('#customer\\.phoneNumber').type('Telefone');
    cy.get('#customer\\.ssn').clear('SSN');
    cy.get('#customer\\.ssn').type('SSN');
    cy.get('#customer\\.username').clear('tatiana.teste06');
    cy.get('#customer\\.username').type('tatiana.teste06');
    cy.get('#customer\\.password').clear('t');
    cy.get('#customer\\.password').type('teste06');
    cy.get('#repeatedPassword').clear();
    cy.get('#repeatedPassword').type('teste06');
    cy.get('[colspan="2"] > .button').click();
    cy.get('.smallText').click();
    cy.get('.title').click();
    cy.get('#rightPanel > p').click();
    /* ==== End Cypress Studio ==== */
  });
});
