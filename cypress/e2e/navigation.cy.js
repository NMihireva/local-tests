import MainPage from "../pages/app/main.page";
import CoursesPage from "../pages/app/challenges.page";
import InterviewquestPage from "../pages/app/interviewquest.page";
import challengesPage from "../pages/app/challenges.page";
import ChallengesPage from "../pages/app/challenges.page";

describe('Navigation', function () {
    before(() => {
        cy.login(Cypress.env('TOKEN'), Cypress.env('USER_ID'))
        cy.reload()
    })

    it('Courses page open', () => {
        MainPage.navbar.linkCourses.click()
        MainPage.locationPage.should('include', 'course')
        MainPage.headerPage.should("be.visible")
        MainPage.headerPage.should('have.text', 'Interactive Courses')
    });

    it('Interview Questions page open', () => {
        MainPage.navbar.linkInterviewQuestions.click()
        MainPage.locationPage.should('include', 'flash')
        MainPage.headerPage.should("be.visible")
        MainPage.headerPage.should('have.text', 'Interview practice cards')
    });

    it('Diary page open', () => {
        MainPage.navbar.linkDiary.click()
        MainPage.locationPage.should('include', 'diary')
        MainPage.headerPage.should("be.visible")
        MainPage.headerPage.should('have.text', 'Daily reports')
    });

    it('Groups page open', () => {
        MainPage.navbar.linkGroups.click()
        MainPage.locationPage.should('include', 'group')
        MainPage.headerPage.should("be.visible")
        MainPage.headerPage.should('have.text', 'Groups')
    });

    it('Challenges page open', () => {
        MainPage.navbar.linkChallenges.click()
        MainPage.locationPage.should('include', 'challenge')
        ChallengesPage.headerChallengesPage.should("be.visible")
        ChallengesPage.headerChallengesPage.should('have.text', 'Challenges')
    });

    it('Goals page open', () => {
        MainPage.navbar.linkGoals.click()
        MainPage.locationPage.should('include', 'goal')
        MainPage.headerPage.should("be.visible")
        MainPage.headerPage.should('have.text', 'Goals')
    });


});