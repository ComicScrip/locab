<reference types="cypress" />;

describe("homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays a title", () => {
    cy.contains("Voyagez léger");
  });
});
