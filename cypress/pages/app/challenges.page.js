import appPage from "./app.page";

class ChallengesPage extends appPage {
    get headerChallengesPage() { return cy.xpath('//div[contains(text(),"Challenges")]')}
}
export default new ChallengesPage()