describe('Authentication', () => {
    it('Sign in with valid credentials', () => {
        cy.visit('/user/login')

        cy.get('#normal_login_email')
            .type('n.mikhireva@gmail.com')
        cy.get('#normal_login_password')
            .type('Nata0616')
        cy.get('.login-form-button')
            .click()
        cy.get('.ant-avatar-square')
            .should('be.visible')
        cy.location('pathname')
            .should('include', '/profile')
    });
});