describe("backProducts", () => {
  beforeEach(() => {
    cy.task("resetDB");
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

  it.only("can find a product with search by first letter", () => {
    cy.task("createTestProduct").then(() => {
      cy.visit("/admin/produits");
      cy.get('[data-cy="input-search-back-product"]').type("C");

      cy.contains("Chancelière").should("be.visible");
    });
  });
});

describe("addProductsPopUp", () => {
  beforeEach(() => {
    cy.task("resetDB");
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

    const fileName = "lit.jpeg";
    cy.get(".uploadcare--widget__button_type_open").click();
    cy.get(
      ".uploadcare--tab_name_file .uploadcare--tab__action-button"
    ).click();
    cy.get('input[type="file"]');

    cy.get('input[type="file"]').attachFile(fileName);

    cy.get(".uploadcare--progress").should("exist");
    cy.get(".uploadcare--link")
      .should("exist")
      .should("contain.text", fileName);

    cy.get('[data-cy="add_product_button"]').click();

    cy.contains("Lit bébé").should("be.visible");
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
