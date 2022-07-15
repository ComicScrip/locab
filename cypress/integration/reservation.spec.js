describe("reservation", () => {
  it("shows reservation page", () => {
    cy.task("resetDB");
    cy.task("createOrderSample");
    cy.visit("/signup");
    cy.get('[data-cy="signin_email"]').type("tata@locab.com");
    cy.get('[data-cy="signin_password"]').type("locablocab");
    cy.get('[data-cy="signin_button"]').click();
    cy.visit("/");
    cy.get('[data-cy="searchWhere"]').type("Lyon");
    cy.get('[data-cy="searchBtnHomePage"]').click();
    cy.contains("Chancelière").should("be.visible");
    cy.contains("Poussette").should("be.visible");
    cy.contains("Nid d'ange").should("be.visible");
  });

  it("shows only available products", () => {
    cy.get('[data-cy="availabilityBtn"]').click();
    cy.get("body").should("not.have.css", "background", "#ededed");
    cy.url().should("include", "showUnavailable=false");
  });

  it("shows all products", () => {
    cy.get('[data-cy="availabilityBtn"]').click();
    cy.url().should("include", "showUnavailable=true");
  });

  it("can search product", () => {
    cy.get('[data-cy="searchBar"]').type("cha");
    cy.contains("Chancelière").should("be.visible");
    cy.contains("Poussette").should("not.exist");
    cy.contains("Nid d'ange").should("not.exist");
  });

  it("Add a product to cart", () => {
    cy.get('[data-cy="addProductToCartClick"]').click();
    cy.contains("Votre panier est vide").should("not.exist");
  });

  it("Delete a product to cart", () => {
    cy.get('[data-cy="deleteProductToCartClick"]').click();
    cy.contains("Votre panier est vide").should("be.visible");
  });
});
