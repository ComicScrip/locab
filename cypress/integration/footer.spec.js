/* eslint-disable prettier/prettier */
describe("footer", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays links, img", () => {
    cy.get("a").should("not.be.empty");
    cy.get("img").should("not.be.empty");
  });
});
