describe("admin orders - back office", () => {
  beforeEach(() => {
    cy.task("resetDB");
    cy.setupCurrentUser({ role: "admin" });
    cy.task("createOrderSample").then(() => {
      cy.visit("/admin/reservations");
    });
  });

  it("admin orders - shows orders page", () => {
    cy.contains("ART123").should("be.visible");
  });

  it("admin orders - can search an order by its number", () => {
    cy.get("[data-cy='searchBar']").type("ART123");
    cy.contains("A366UL").should("not.exist");
  });

  it.only("admin orders - can access the order details page", () => {
    cy.get('[data-cy="detailLink"]').click({ multiple: true });
    cy.contains("Information de facturation");
  });
});
