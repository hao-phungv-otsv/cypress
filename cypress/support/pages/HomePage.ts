export default class HomePage {
  private readonly BASE_URL = 'https://example.cypress.io'

  open(): void {
      cy.visit(this.BASE_URL)
      cy.get('body').should('be.visible')
  }
}