describe("navbarbackoffice", () => {
  it("displays a navbar", () => {
    cy.setupCurrentUser({ role: "admin" });
    cy.visit("/admin");
    cy.contains("Réservation");
  });
});
