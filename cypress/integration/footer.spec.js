describe("footer", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays a title", () => {
    cy.get("h1").should("not.be.empty");
  });
});
