// Pre-condions:
// 1. Log in
// 2. Profile page is open
//
// Execution steps:
// 	1. Clock "Create day report" button
// 	2. Check any activity.
// 	3. Add 1 hour.
//  click на выпадашку
//  4. Select "5" in "What is your morale" select
//  5. Set text "%TIMESTAMP% 0000000000000000000000000"
//  6. Clich "Create" button
//
// Expected results:
//   1. %TIMESTAMP% is visible

describe('Profile', () => {
    beforeEach(() =>{
        cy.visit('/')
        window.localStorage.setItem('token', Cypress.env('TOKEN'))
        window.localStorage.setItem('userId', Cypress.env('USER_ID'))
        window.localStorage.setItem('lang', 'ru')
        cy.visit(`/profile/${Cypress.env('USER_ID')}`)
    })
    it('Daily report creation', () => {
        const timestamp = new Date().getTime()
        const description = `${timestamp} 123456789012345678901234567890`
        cy.get('[data-qa="dailyReportsBtn"]')
            .click()
        cy.get('input[value="help_classmates"]')
            .click()
        cy.get('[id="labels.help_classmates.hours"]')
            .type('1')
        cy.get('#morale')
            .click()
        cy.get('.ant-select-item[title="5"]')
            .click()
        cy.get('textarea.ant-input')
            .type(description)
        //[id="description"]
        //#description
        cy.get('[type="submit"]')
            .click()
        //[class="ant-btn ant-btn-primary"]
        // cy.contains(description)
        //     .should('be.visible')

        cy.xpath(`//div[@class="ant-row mb-4"][contains(text(), "${timestamp}")]`)
            .should('be.visible')

    });
});