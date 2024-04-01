import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor"

Given("the user is on the Homepage", () => {
    cy.visit("https://more-cars.net/")
})

When("the user wants to convert {float} {string} to {string}", (fromValue: number, fromUnit: string, toUnit: string) => {
    cy.get("#unit_converter_from_unit")
        .select(fromUnit)

    cy.get("#unit_converter_to_unit")
        .select(toUnit)

    cy.get('[name=from_value]')
        .type(fromValue.toString())

    cy.get('form')
        .first()
        .submit()
})

Then("the unit converter should display {string} in the result field", (expectedResult: string) => {
    cy.get("[name=result")
        .should('have.value', expectedResult)
})
