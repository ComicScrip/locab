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

  it("admin orders - can search an order by its number or customer name", () => {
    cy.get("[data-cy='searchBar']").type("ART123");
    cy.contains("A366UL").should("not.exist");
    cy.get("[data-cy='searchBar']").type("{selectall}jane");
    cy.contains("A366UL").should("not.exist");
    cy.get("[data-cy='searchBar']").type("{selectall}doe");
    cy.contains("A366UL").should("be.visible");
  });

  it("admin orders - can access the order details page", () => {
    cy.get('[data-cy="detailLink"]').first().click();
    cy.contains("Information de facturation");
  });

  it("admin orders - can delete a resevation", () => {
    cy.get('[data-cy="add_product_button_delete"]').first().click();
    cy.get('[data-cy="add_product_button_delete_confirmation"]').click();
    cy.contains("ART123").should("not.exist");
  });
});
