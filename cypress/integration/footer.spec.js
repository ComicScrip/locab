/* eslint-disable prettier/prettier */
describe("footer", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.visit("blog");
    cy.visit("aboutUs");
    cy.visit("contact");
  });

  it("displays all links and Image", () => {
    cy.get("a").should("not.be.empty");
    cy.get("Image").should("not.be.empty");
  });
});
