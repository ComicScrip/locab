describe("reservation", () => {
  it("shows a message asking to search for a location when no location was selected", () => {
    cy.task("resetDB");
    cy.task("prepareReservation");
    cy.visit("/reservation");
    cy.contains(
      "Merci de selectionner un lieu plus haut pour trouver du materiel"
    );
  });

  it("shows reservation page with availbale items by default", () => {
    cy.task("resetDB");
    cy.task("prepareReservation");
    cy.visit("/");
    cy.get('[data-cy="searchWhere"]').select("Lyon");
    cy.get('[data-cy="searchBtnHomePage"]').click();
    cy.url().should("include", "showUnavailable=false");
    cy.contains("Chancelière").should("be.visible");
    cy.contains("Poussette").should("be.visible");
    cy.contains("Nid d'ange").should("be.visible");
    cy.contains("Berceau").should("not.exist");
  });

  it("shows unavailable products when checked", () => {
    cy.task("resetDB");
    cy.task("prepareReservation");
    cy.visit("/reservation");
    cy.get('[data-cy="selectWhere"]').select("Bordeaux");
    cy.get('[data-cy="availabilityBtn"]').click();
    cy.get('[data-cy="unavailableItem"]').should("exist");
    cy.url().should("include", "showUnavailable=true");
  });

  it("can search product", () => {
    cy.task("resetDB");
    cy.task("prepareReservation");
    cy.visit("/reservation");
    cy.get('[data-cy="selectWhere"]').select("Lyon");
    cy.get('[data-cy="searchBar"]').type("cha");
    cy.contains("Chancelière").should("be.visible");
    cy.contains("Poussette").should("not.exist");
    cy.contains("Nid d'ange").should("not.exist");
  });

  it("Can add a product to cart", () => {
    cy.task("resetDB");
    cy.task("prepareReservation").then(({ chanceliere }) => {
      cy.visit("/reservation");
      cy.get('[data-cy="selectWhere"]').select("Lyon");
      cy.get(`[data-cy="addProductToCartClick-${chanceliere.id}"]`).click();
      cy.contains("Votre panier est vide").should("not.exist");
    });
  });

  it("Can delete a product from cart", () => {
    cy.task("resetDB");
    cy.task("prepareReservation").then(({ chanceliere }) => {
      cy.visit("/reservation");
      cy.get('[data-cy="selectWhere"]').select("Lyon");
      cy.get(`[data-cy="addProductToCartClick-${chanceliere.id}"]`).click();
      cy.get(`[data-cy="addProductToCartClick-${chanceliere.id}"]`).click();
      cy.contains("Votre panier est vide").should("exist");
    });
  });

  it.only("Can place an order", () => {
    cy.task("resetDB");
    cy.task("prepareReservation").then(({ chanceliere }) => {
      cy.visit("/reservation");
      cy.get('[data-cy="selectWhere"]').select("Lyon");
      cy.get(`[data-cy="addProductToCartClick-${chanceliere.id}"]`).click();
      cy.contains("VALIDER MON PANIER").click();
      cy.url().should("include", "/commande");
      cy.get('[data-cy="infos_email"]').type("user@gmail.com");
      cy.get('[data-cy="infos_firstname"]').type("John");
      cy.get('[data-cy="infos_lastname"]').type("Doe");
      cy.get('[data-cy="infos_address"]').type("17 rue delandine");
      cy.get('[data-cy="infos_phone"]').type("0677554433");
      cy.get('[data-cy="infos_zip"]').type("69002");
      cy.get('[data-cy="infos_city"]').type("Lyon");
    });
  });
});
