describe("admin orders - back office", () => {
  beforeEach(() => {
    cy.task("resetDB");
    cy.setupCurrentUser({ role: "admin" });
  });

  it("shows orders page", () => {
    cy.task("createOrderSample").then(() => {
      cy.visit("/admin/reservations");
      cy.contains("ART123").should("be.visible");
    });
  });
});
