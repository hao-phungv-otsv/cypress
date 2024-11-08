import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../../support/pages/HomePage';

let homePage: HomePage

Given(`User vist home page`, () => {
    // [Given] Sets up the initial state of the system.
    homePage = new HomePage();
    homePage.open();
});

Given(`User go to {string} menu`, (arg0: string) => {
    // [Given] Sets up the initial state of the system.
    cy.get('.navbar-nav').contains('Commands').click();
    cy.get('.dropdown-menu').contains(arg0).click();
});

Given(`User is in {string} link path`, (arg0: string) => {
    // [Given] Sets up the initial state of the system.
    cy.location('pathname').should('include', arg0);
});

When(`User go back`, () => {
    // [When] Describes the action or event that triggers the scenario.
    cy.go('back')
});

Then(`User is not in {string} link path`, (arg0: string) => {
    // [Then] Describes the expected outcome or result of the scenario.
    cy.location('pathname').should('not.include', arg0)
});

When(`User go forward`, () => {
    // [When] Describes the action or event that triggers the scenario.
    cy.go('forward')
});

Then(`User go to {string} path`, (arg0: string) => {
    // [Then] Describes the expected outcome or result of the scenario.
    cy.location('pathname').should('include', arg0)
});
