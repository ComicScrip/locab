describe("admin references - back office", () => {
  beforeEach(() => {
    cy.task("resetDB");
    cy.setupCurrentUser({ role: "admin" });
    cy.task("createOrderSample").then(() => {
      cy.visit("/admin/references");
    });
  });

  it("admin references - shows all references in db", () => {
    cy.contains("CH-001");
    cy.contains("CH-002");
  });
});
