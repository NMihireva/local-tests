// Pre-condions:
// Open Sign in page
//
// Execution steps:
// 	1. Enter email n.mikhireva@gmail.com
// 	2. Enter password “Nata0616”
// 	3. Click “Log in” button
// Expected results:
//     1.User icon is visible
//     2. Current URL contains “/prifile/”

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