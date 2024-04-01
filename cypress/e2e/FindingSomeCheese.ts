import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor"

Given("I am on the Google search page", () => {
    cy.visit("https://www.google.com/")
    cy.get('button')
        .contains('Alle ablehnen')
        .click()
})

When("I search for {string}", (query: string) => {
    cy.get("[name=q]")
        .type(query)
        .type('{enter}')
})

Then("the page title should start with {string}", (title: string) => {
    cy.get('head title')
        .contains(title, {matchCase: false})
})
