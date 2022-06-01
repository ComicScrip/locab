/// <reference types="cypress" />

// Welcome to Cypress!
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("reservation", () => {
  beforeEach(() => {
    cy.visit("/reservation");
  });

  it("shows all products in db", () => {
    cy.contains("Poussette");
    cy.contains("Lit à barreaux");
  });

  it("shows only available products", () => {
    cy.get('[data-cy="availabilityBtn"]').click();
    cy.get("body").should("not.have.css", "background", "#ededed");
  });

  it("can search product", () => {
    cy.get('[data-cy="searchBar"]').type("pou");
    cy.contains("Lit à barreaux").should("not.exist");
  });
});
