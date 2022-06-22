describe("backProducts", () => {
  beforeEach(() => {
    cy.setupCurrentUser({ role: "admin" });
  });

  it("shows products page", () => {
    cy.visit("/admin/produits");
    cy.contains("Chaise haute");
    cy.contains("Poussette");
  });

  it("shows references page", () => {
    cy.get('[data-cy="backReferencesNavButton"]').click();
    cy.url().should("include", "/admin/references");
    cy.contains("CH-001");
    cy.contains("CH-002");
  });

  it("shows products page", () => {
    cy.get('[data-cy="backProductsNavButton"]').click();
    cy.url().should("include", "/admin/produits");
    cy.contains("Chaise haute");
    cy.contains("Poussette");
  });
});
