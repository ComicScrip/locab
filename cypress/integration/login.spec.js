describe("signin", () => {
  beforeEach(() => {
    cy.task("resetDB");
    cy.visit("/signup");
  });

  it("login a customer with credentials", () => {});
});
