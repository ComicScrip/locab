/* eslint-disable prettier/prettier */
describe("footer", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays links, Image", () => {
    cy.get("a").should("not.be.empty");
    cy.get("Image").should("not.be.empty");
  });
});
