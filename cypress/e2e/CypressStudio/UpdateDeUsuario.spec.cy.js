describe('Validar Atualização de usuario', () => {
    it('Fazer login e atualizar usuario', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')

        cy.get(':nth-child(2) > .input').clear();
        cy.get(':nth-child(2) > .input').type('john');
        cy.get(':nth-child(4) > .input').clear();
        cy.get(':nth-child(4) > .input').type('demo');
        cy.get(':nth-child(5) > .button').click();

        /* ==== Generated with Cypress Studio ==== */
        cy.get('#leftPanel > ul > :nth-child(6) > a').click();
        cy.get('#customer\\.firstName').click();
        cy.get('tbody > :nth-child(1)').click();
        cy.get('#customer\\.firstName').clear();
        cy.get('#customer\\.firstName').type('John{enter}');
        cy.get('#customer\\.lastName').click();
        cy.get('#customer\\.lastName').clear('Smith{enter}');
        cy.get('#customer\\.lastName').type('Smith{enter}');
        cy.get('#customer\\.address\\.street').click();
        cy.get('tbody > :nth-child(3)').click();
        cy.get('#customer\\.address\\.street').clear();
        cy.get('#customer\\.address\\.street').type('1431 Main St{enter}');
        cy.get('#customer\\.address\\.city').click();
        cy.get('.form2').click();
        cy.get('#customer\\.address\\.city').clear();
        cy.get('#customer\\.address\\.city').type('Beverly Hills{enter}');
        cy.get('#customer\\.address\\.state').click();
        cy.get('#customer\\.address\\.state').clear('CA{enter}');
        cy.get('#customer\\.address\\.state').type('CA{enter}');
        cy.get('tbody > :nth-child(6)').click();
        cy.get('#customer\\.address\\.zipCode').clear();
        cy.get('#customer\\.address\\.zipCode').type('90210{enter}');
        cy.get('#customer\\.phoneNumber').clear('310-447-4121{enter}');
        cy.get('#customer\\.phoneNumber').type('310-447-4121{enter}');
        cy.get('[colspan="2"] > .button').click();
        cy.get('body').click();
        cy.get('#updateProfileResult > .title').click();
        cy.get('body').click();
        /* ==== End Cypress Studio ==== */
    })
})

