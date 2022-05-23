/// <reference types="cypress" />

// Welcome to Cypress!
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays a title", () => {
    cy.get("h1").should("not.be.empty");
  });
});
