import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

Given(`User is in {string}`, (arg0: string) => {
    // [Given] Sets up the initial state of the system.
    cy.visit(arg0);
});

Given(`User can see {int} todo items by default`, (arg0: number) => {
    // [Given] Sets up the initial state of the system.
    cy.get('.todo-list li').should('have.length', arg0)
});