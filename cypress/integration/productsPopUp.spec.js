describe("addProductsPopUp", () => {
  beforeEach(() => {
    cy.setupCurrentUser({ role: "admin" });
  });

  it("can create a new product", () => {
    cy.visit("/admin/produits");
    cy.get('[data-cy="add_product_button_add"]').click();
    cy.get('[data-cy="add_product_name"]').type("Lit bébé");
    cy.get('[data-cy="add_product_brand"]').type("bébédorbien");
    cy.get('[data-cy="add_product_caution"]').type("200");
    cy.get('[data-cy="add_product_price_category"]').type("1");
    cy.get('[data-cy="add_product_description"]').type(
      "meilleur lit pour que bébé dorme au mieux"
    );
    cy.get('[data-cy="add_product_picture"]')
      .click()
      .type("/products/lit.jpeg");
    cy.get('[data-cy="add_product_button"]').click();
    cy.visit("/admin/produits");
    cy.contains("Lit bébé").should("be.visible");
  });

  it.only("delete a product", () => {
    cy.visit("/admin/produits");
    cy.get('[data-cy="add_product_button_delete"]').click({ multiple: true });
    cy.get('[data-cy="add_product_button_delete_confirmation"]').click({
      force: true,
    });
    cy.contains("Poussette").should("not.be.visible");
  });
});
