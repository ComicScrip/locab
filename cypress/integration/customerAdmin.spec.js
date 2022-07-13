describe("users", () => {
  beforeEach(() => {
    cy.task("resetDB");
    cy.setupCurrentUser({ role: "admin" });
    cy.signup({ email: "jeanne@jeanne.com", firstname: "jeanne" });
  });

  it("shows customers page", () => {
    cy.visit("/admin/customers");
    cy.contains("jeanne").should("be.visible");
  });

  it("can find a customer with search by first letter", () => {
    cy.visit("/admin/customers");
    cy.get('[data-cy="input-search-back-customer"]').type("j");
    cy.contains("jeanne").should("be.visible");
  });

  it("delete a customer", () => {
    cy.visit("/admin/customers");
    cy.get('[data-cy="add_customer_button_delete"]').first().click();
    cy.get('[data-cy="add_product_button_delete_confirmation"]').click();
    cy.contains("jeanne,").should("not.exist");
  });

  it("modify a customer", () => {
    cy.visit("admin/customers");
    cy.get('[data-cy="modify_customer_link"]').first().click();
    cy.get('[data-cy="modify-customer-firstname"]').type("{selectall}Toto");
    cy.get('[data-cy="modify-customer-button"]').click();
    cy.contains("Jeanne").should("not.exist");
  });

  it("can create a new customer", () => {
    cy.visit("/admin/customers");
    cy.get('[data-cy="add_customer_button_add"]').click();
    cy.get('[data-cy="add_customer_firstname"]').type("Gerard");
    cy.get('[data-cy="add_customer_lastname"]').type("Depardieux");
    cy.get('[data-cy="add_customer_email"]').type("ivrogne@vigne.fr");
    cy.get('[data-cy="add_customer_address"]').type("12 place de la soif");
    cy.get('[data-cy="add_customer_phone"]').type("0669718326");
    cy.get('[data-cy="add_customer_city"]').type("Beurrr");
    cy.get('[data-cy="add_customer_zip"]').type("69000");
    cy.get('[data-cy="add_customer_password"]').type("Azerty1!");
    cy.get('[data-cy="add_customer_button"]').click();
    cy.contains("Gerard").should("be.visible");
  });
});
