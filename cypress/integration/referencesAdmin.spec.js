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

  it("admin references - can search a reference by its number", () => {
    cy.get('[data-cy="searchBar"]').type("CH-002");
    cy.contains("CH-001").should("not.exist");
  });

  it("admin references - can create a new reference", () => {
    cy.get("[data-cy='add_product_button_add']").click();
    cy.get('[data-cy="add_reference_reference"]').type("CH111");
    cy.get('[data-cy="add_reference_product"]').select("Chancelière");
    cy.get('[data-cy="add_reference_condition"]').type("Neuf");
    cy.get('[data-cy="add_reference_purchatedate"]').type("2022-02-02");
    cy.get('[data-cy="add_reference_premise"]').select("Ursule - Lyon");
    cy.get('[data-cy="add_product_button"]').click();
    cy.contains("CH111");
  });

  it("admin references - can delete a reference", () => {
    cy.get('[data-cy="add_product_button_delete"]').first().click();
    cy.get('[data-cy="add_product_button_delete_confirmation"]').click();
    cy.contains("CH-001").should("not.exist");
  });

  it("admin references - can update a reference", () => {
    cy.get('[data-cy="modify_button"]').first().click();
    cy.get('[data-cy="modify-reference-number"]').type(
      "{selectall}NEW-REF-001"
    );
    cy.get('[data-cy="validation-btn"]').click();
    cy.contains("CH-001").should("not.exist");
  });
});
