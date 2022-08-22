import MainPage from "../pages/app/main.page";

describe('Navigation', function () {
    before(() => {
        cy.login(Cypress.env('TOKEN'), Cypress.env('USER_ID'))
        cy.reload()
    })

    it('Courses page open', () => {
        MainPage.navbar.linkCourses.click()
        // cy.xpath("//h1")
        //     .should('include', "Interactive Courses")
        cy.location('pathname')
            .should('include', 'course')
    });

    it('Interview Questions page open', () => {
        MainPage.navbar.linkInterviewQuestions.click()
        cy.location('pathname')
            .should('include', 'flash')
    });

    it('Diary page open', () => {
        MainPage.navbar.linkDiary.click()
        cy.location('pathname')
            .should('include', 'diary')
    });

    it('Challenges page open', () => {
        MainPage.navbar.linkChallenges.click()
        cy.location('pathname')
            .should('include', 'challenge')
    });
    it('Groups page open', () => {
        MainPage.navbar.linkGroups.click()
        cy.location('pathname')
            .should('include', 'group')
    });
    it('Goals page open', () => {
        MainPage.navbar.linkGoals.click()
        cy.location('pathname')
            .should('include', 'goal')
    });


});