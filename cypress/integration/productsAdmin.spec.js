describe("products", () => {
  beforeEach(() => {
    cy.task("resetDB");
    cy.setupCurrentUser({ role: "admin" });
  });

  it("shows products page", () => {
    cy.task("createTestProduct").then(() => {
      cy.visit("/admin/produits");
      cy.contains("Chancelière").should("be.visible");
    });
  });

  it("can find a product with search by first letter", () => {
    cy.task("createTestProduct").then(() => {
      cy.visit("/admin/produits");
      cy.get('[data-cy="input-search-back-product"]').type("C");
      cy.contains("Chancelière").should("be.visible");
    });
  });

  it("can create a new product", () => {
    cy.task("createTestPriceCategory").then(({ id }) => {
      cy.visit("/admin/produits");
      cy.get('[data-cy="add_product_button_add"]').click();
      cy.get('[data-cy="add_product_name"]').type("Lit bébé");
      cy.get('[data-cy="add_product_brand"]').type("bébédorbien");
      cy.get('[data-cy="add_product_caution"]').type("200");
      cy.get('[data-cy="add_product_price_category"]').select(id.toString());
      cy.get('[data-cy="add_product_description"]').type(
        "meilleur lit pour que bébé dorme au mieux"
      );

      const fileName = "lit.jpeg";
      cy.get(".uploadcare--widget__button_type_open").click();
      cy.get(
        ".uploadcare--tab_name_file .uploadcare--tab__action-button"
      ).click();
      cy.get('input[type="file"]');

      cy.get('input[type="file"]').attachFile(fileName);

      cy.get(
        ".uploadcare--tab_name_preview > .uploadcare--footer > .uploadcare--button_primary"
      ).should("be.visible");
      cy.get(
        ".uploadcare--tab_name_preview > .uploadcare--footer > .uploadcare--button_primary"
      ).click();

      cy.get(".uploadcare--progress").should("exist");
      cy.get(".uploadcare--link")
        .should("exist")
        .should("contain.text", fileName);

      cy.get('[data-cy="add_product_button"]').click();

      cy.contains("Lit bébé").should("be.visible");
    });
  });

  it("delete a product", () => {
    cy.task("createTestProduct");
    cy.visit("/admin/produits");
    cy.get('[data-cy="add_product_button_delete"]').click();
    cy.get('[data-cy="add_product_button_delete_confirmation"]').click();
    cy.contains("Chancelière").should("not.exist");
  });

  it("modify a product", () => {
    cy.task("createTestProduct").then((product) => {
      cy.visit(`/admin/produits/edit/${product.id}`);
      cy.get('[data-cy="modify-product-name"]').type(
        "{selectall}Pousse toi de la"
      );
      cy.get('[data-cy="modify-product-button"]').click();
      cy.contains("Pousse toi de la").should("be.visible");
    });
  });
});
