import LoginPage from "../pages/login.page";
import profilePage from "../pages/app/profile.page";
import ProfilePage from "../pages/app/profile.page";

describe('Authentication', () => {
    beforeEach(  ()=>{
            LoginPage.open()
        }
    )

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
    it('Sign in with valid credentials', () => {
        // cy.get('#normal_login_email')
        //     .type(Cypress.env('EMAIL'))
        // cy.get('#normal_login_password')
        //     .type(Cypress.env('PASSWORD'))
        // cy.get('.login-form-button')
        //     .click()
        LoginPage.login(Cypress.env('EMAIL'),Cypress.env('PASSWORD') )

        // cy.get('.ant-avatar-square')
        ProfilePage.iconAvatar
            .should('be.visible')
        cy.location('pathname')
            .should('include', '/profile')
    });
// Pre-condions:
// Sign in page is open
//
// Execution steps:
//     1. Enter email n.mikhireva@gmail.com
// 2. Enter password “123456”
// 3. Click “Log in” button
//
// Expected results:
//     Auth faild toast is visible
    it('Sign in with invalid credentials', () => {

        // cy.get('#normal_login_email')
        //     .type('n.mikhireva@gmail.com')
        // cy.get('#normal_login_password')
        //     .type('123456')
        // cy.get('.login-form-button')
        //     .click()
        LoginPage.login(Cypress.env('EMAIL'),'123456' )

        // cy.get('.ant-notification-notice-message')
        LoginPage.toast
            .should('have.text', 'Auth failed')
//            .should('contain.text','Auth faile')
//             частичное совпадение
    });
//     Pre-condions:
//     Sign in page is open
//
//     Execution steps:
//         1.	Enter email “test”
// ER: “’email' is not a valid email” validation message displayed
//     2.	Clear email
//     ER: “Required” validation message displayed
//     3.	3. Enter password “123456”
// 4.	Clear passwordl
//     ER: “Required” validation message displayed
    it('Credentials validation', () => {

        // cy.get('#normal_login_email')
        //     .type('test')
        LoginPage.inputEmail.type('test')

        //cy.xpath('//div[contains(@class, "ant-form-item-has-error")][.//input[@id="normal_login_email"]]//div[@class="ant-form-item-explain-error"]')
        LoginPage.emailValidation
            .should('have.text','\'email\' is not a valid email')

        //cy.get('#normal_login_email')
         LoginPage.inputEmail
             .clear()

        //cy.xpath('//div[contains(@class, "ant-form-item-has-error")][.//input[@id="normal_login_email"]]//div[@class="ant-form-item-explain-error"]')
         LoginPage.emailValidation
            .should('have.text','Required')

        //cy.get('#normal_login_password')
         LoginPage.inputPassword
            .type('123456')
            .clear()

        //cy.xpath('//div[contains(@class, "ant-form-item-has-error")][.//input[@id="normal_login_password"]]//div[@class="ant-form-item-explain-error"]')
         LoginPage.passwordValidation
            .should('have.text','Required')
    });

});