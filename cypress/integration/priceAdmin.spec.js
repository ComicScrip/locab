describe("price", () => {
  beforeEach(() => {
    cy.task("resetDB");
    cy.setupCurrentUser({ role: "admin" });
  });

  it("shows price page", () => {
    cy.task("createTestPriceCategory").then(() => {
      cy.visit("/admin/prix");
      cy.contains("cat_a").should("be.visible");
    });
  });

  it("can find a price with search by first letter", () => {
    cy.task("createTestPriceCategory").then(() => {
      cy.visit("/admin/prix");
      cy.get('[data-cy="input-search-back-price"]').type("C");
      cy.contains("cat_a").should("be.visible");
    });
  });

  it("can create a new price", () => {
    cy.task("createTestPriceCategory").then(() => {
      cy.visit("/admin/prix");
      cy.get('[data-cy="add_price_button_add"]').click();
      cy.get('[data-cy="add_price_price"]').type("cat_test");
      cy.get('[data-cy="add_price_one_day"]').type(1.1);
      cy.get('[data-cy="add_price_two_days"]').type(2.1);
      cy.get('[data-cy="add_price_three_days"]').type(3.1);
      cy.get('[data-cy="add_price_four_days"]').type(4.1);
      cy.get('[data-cy="add_price_five_days"]').type(5.1);
      cy.get('[data-cy="add_price_six_days"]').type(6.1);
      cy.get('[data-cy="add_price_seven_days"]').type(7.1);
      cy.get('[data-cy="add_price_eight_days"]').type(8.1);
      cy.get('[data-cy="add_price_nine_days"]').type(9.1);
      cy.get('[data-cy="add_price_ten_days"]').type(9.2);
      cy.get('[data-cy="add_price_eleven_days"]').type(9.3);
      cy.get('[data-cy="add_price_twelve_days"]').type(9.4);
      cy.get('[data-cy="add_price_thirteen_days"]').type(9.5);
      cy.get('[data-cy="add_price_fourteen_days"]').type(9.6);
      cy.get('[data-cy="add_price_fifteen_days"]').type(9.7);
      cy.get('[data-cy="add_price_sixteen_days"]').type(9.8);
      cy.get('[data-cy="add_price_button"]').click();
      cy.contains("cat_test").should("be.visible");
    });
  });

  it("delete a price", () => {
    cy.task("createTestPriceCategory");
    cy.visit("/admin/prix");
    cy.get('[data-cy="add_price_button_delete"]').click();
    cy.get('[data-cy="add_product_button_delete_confirmation"]').click();
    cy.contains("cat_test").should("not.exist");
  });

  it("modify a price", () => {
    cy.task("createTestPriceCategory").then((price) => {
      cy.visit(`/admin/prix/edit/${price.id}`);
      cy.get('[data-cy="modify-price-name"]').type("{selectall}cat_test_yes");
      cy.get('[data-cy="modify-price-button"]').click();
      cy.contains("cat_test_yes").should("be.visible");
    });
  });
});
