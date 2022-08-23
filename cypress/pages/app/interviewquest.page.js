import appPage from "./app.page";

class InterviewQPage extends appPage {
    get headerInterviewQPage() { return cy.xpath('//h1')}
    get locationInterviewQPage() { return cy.location('pathname') }
}
export default new InterviewQPage()