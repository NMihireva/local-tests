import AppPage from "./app.page"

class MainPage extends AppPage{
    get headerPage() { return cy.xpath('//h1')}
    get locationPage() { return cy.location('pathname') }

}
export default new MainPage()
