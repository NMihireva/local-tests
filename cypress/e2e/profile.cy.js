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

import ProfilePage from "../pages/app/profile.page";

describe('Profile', () => {
    beforeEach(() => {
        cy.login(Cypress.env('TOKEN'), Cypress.env('USER_ID'))
        cy.intercept(
            'GET',
            '/course/coursesProgress/*',
            {
                statusCode: 200,
                body:
        {
            "message": "Get courses progress",
            "success": true,
            "fail": false,
            "payload": [
            {
                "_id": "624b80ae37ef734e036690c1",
                "completedLessons": 81,
                "totalLessons": 82,
                "course": {
                    "_id": "5ff2005cacc2d5003ae26bc7",
                    "name": "QA Manual"
                }
            },
            {
                "_id": "6263a84339590055d5dfe3cf",
                "completedLessons": 42,
                "totalLessons": 42,
                "course": {
                    "_id": "5c140b2b42f6ea23059cbe8f",
                    "name": "JavaScript Syntax"
                }
            },
            {
                "_id": "6296b4784c2d34d1526f57da",
                "completedLessons": 17,
                "totalLessons": 17,
                "course": {
                    "_id": "5f449251891af4003c44e957",
                    "name": "HTML, CSS Syntax"
                }
            },
            {
                "_id": "6296bc1e4c2d34d1526fa09d",
                "completedLessons": 49,
                "totalLessons": 49,
                "course": {
                    "_id": "5f533d699a51f5003cb0fcab",
                    "name": "Express JS"
                }
            },
            {
                "_id": "6296bfd04c2d34d1526fb60a",
                "completedLessons": 17,
                "totalLessons": 12,
                "course": {
                    "_id": "6257846e1224311e20f842e9",
                    "name": "JS2 Module"
                }
            },
            {
                "_id": "6298098e5c89603ede08b7ca",
                "completedLessons": 112,
                "totalLessons": 112,
                "course": {
                    "_id": "5d1cbf67086fc30038bf1859",
                    "name": "JavaScript Practice"
                }
            },
            {
                "_id": "62a291daf7cf07e7452c9c3d",
                "completedLessons": 14,
                "totalLessons": 14,
                "course": {
                    "_id": "5f70329bbed3ac003cb1b06c",
                    "name": "Git and GitHub"
                }
            },
            {
                "_id": "62b29d735dc879799dfd5e07",
                "completedLessons": 62,
                "totalLessons": 62,
                "course": {
                    "_id": "5e8f4bf674a4cd003c2a713c",
                    "name": "Python Syntax"
                }
            },
            {
                "_id": "62f7bc52a00ef320b98f496c",
                "completedLessons": 4,
                "totalLessons": 4,
                "course": {
                    "_id": "62d182a3f64df852198549f8",
                    "name": "API Testing for QA"
                }
            },
            {
                "_id": "62fc4065b25b8db3d8f518ce",
                "completedLessons": 54,
                "totalLessons": 54,
                "course": {
                    "_id": "5fcc749061045d003aa18fba",
                    "name": "React JS"
                }
            }
        ]
        }
                    }
        )
        // cy.intercept(
        //     'GET',
        //     '/course/coursesProgress/*',
        // {
        //     statusCode: 200,
        //     body: {
        //         "message": "Get courses progress",
        //         "success": true,
        //         "payload": [
        //             {
        //                 "_id": "5ff4976d89f2b2003a2bf0a0",
        //                 "completedLesson": 28,
        //                 "totalLesson": 41,
        //                 "course": {
        //                     "_id": "5ff2005cacc2d5003ae26bc7",
        //                     "name": "QA Manual"
        //                 }
        //             }
        //         ]
        //
        //     }
        // }
        // )
        cy.visit(`/profile/${Cypress.env('USER_ID')}`)
    })
    it.skip ('Daily report creation', () => {
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
    it ('Courses in progress', ()=>{
        ProfilePage.headerCoursesProgress.should("be.visible")
        ProfilePage.coursesProgress.should('have.text', '99%')
    })

});