import dayjs from "dayjs";

describe("reservation", () => {
  it("shows a message asking to search for a location when no location was selected", () => {
    cy.task("resetDB");
    cy.task("prepareReservation");
    cy.visit("/reservation");
    cy.contains(
      "Nous avons besoin de connaître votre destination pour vous proposer le matériel disponible aux dates choisies"
    );
  });

  it("shows reservation page with availbale items by default", () => {
    cy.visit("/");
    cy.get("#selectbox").click().contains("Lyon").click();
    cy.get('[data-cy="searchFromDate"]').type(
      dayjs(new Date()).format("YYYY-MM-DD")
    );
    cy.get('[data-cy="searchBtnHomePage"]').click();
    cy.contains("Chancelière").should("be.visible");
    cy.contains("Poussette").should("be.visible");
    cy.contains("Nid d'ange").should("be.visible");
    cy.contains("Berceau").should("not.exist");
  });

  it("shows unavailable products when checked", () => {
    cy.task("resetDB");
    cy.task("prepareReservation");
    cy.visit("/");
    cy.get("#selectbox").click().type("Deauvil{enter}");
    cy.get('[data-cy="searchFromDate"]').type(
      dayjs(new Date()).format("YYYY-MM-DD")
    );
    cy.get('[data-cy="searchBtnHomePage"]').click();
    cy.get('[data-cy="availabilityBtn"]').click();
    cy.get('[data-cy="unavailableItem"]').should("exist");
  });

  it("can search product", () => {
    cy.task("resetDB");
    cy.task("prepareReservation");
    cy.visit("/");
    cy.get("#selectbox").click().contains("Lyon").click();
    cy.get('[data-cy="searchFromDate"]').type(
      dayjs(new Date()).format("YYYY-MM-DD")
    );
    cy.get('[data-cy="searchBtnHomePage"]').click();
    cy.get('[data-cy="searchBar"]').type("cha");
    cy.contains("Chancelière").should("be.visible");
    cy.contains("Poussette").should("not.exist");
    cy.contains("Nid d'ange").should("not.exist");
  });

  it("Can add a product to cart", () => {
    cy.task("resetDB");
    cy.task("prepareReservation").then(({ chanceliere }) => {
      cy.visit("/");
      cy.get("#selectbox").click().contains("Lyon").click();
      cy.get('[data-cy="searchFromDate"]').type(
        dayjs(new Date()).format("YYYY-MM-DD")
      );
      cy.get('[data-cy="searchBtnHomePage"]').click();
      cy.get(`[data-cy="addProductToCartClick-${chanceliere.id}"]`).click();
      cy.contains("Votre panier est vide").should("not.exist");
    });
  });

  it("Can delete a product from cart", () => {
    cy.task("resetDB");
    cy.task("prepareReservation").then(({ chanceliere }) => {
      cy.visit("/");
      cy.get("#selectbox").click().contains("Lyon").click();
      cy.get('[data-cy="searchFromDate"]').type(
        dayjs(new Date()).format("YYYY-MM-DD")
      );
      cy.get('[data-cy="searchBtnHomePage"]').click();
      cy.get(`[data-cy="addProductToCartClick-${chanceliere.id}"]`).click();
      cy.get(`[data-cy="addProductToCartClick-${chanceliere.id}"]`).click();
      cy.contains("Votre panier est vide").should("exist");
    });
  });

  it("Can place an order", () => {
    cy.task("resetDB");
    cy.task("prepareReservation").then(({ chanceliere }) => {
      cy.visit("/");
      cy.get("#selectbox").click().contains("Lyon").click();
      cy.get('[data-cy="searchFromDate"]').type(
        dayjs(new Date()).format("YYYY-MM-DD")
      );
      cy.get('[data-cy="searchBtnHomePage"]').click();
      cy.get(`[data-cy="addProductToCartClick-${chanceliere.id}"]`).click();
      cy.contains("VALIDER MON PANIER").click();
      cy.url().should("include", "/commande");
      cy.get('[data-cy="infos_email"]').type("test@gmail.com");
      cy.get('[data-cy="infos_firstname"]').type("John");
      cy.get('[data-cy="infos_lastname"]').type("Doe");
      cy.get('[data-cy="infos_address"]').type("17 rue delandine");
      cy.get('[data-cy="infos_phone"]').type("0677554433");
      cy.get('[data-cy="infos_zip"]').type("69002");
      cy.get('[data-cy="infos_city"]').type("Lyon");
      cy.contains("CONTINUER VERS LA LIVRAISON").click();
      cy.get('[data-cy="partner_name"]').type("Ibis hotel");
      cy.get('[data-cy="partner_phone"]').type("0388709988");
      cy.get('[data-cy="partner_firstname"]').type("Martin");
      cy.get('[data-cy="partner_lastname"]').type("Dupont");
      cy.get('[data-cy="partner_adress"]').type("1 rue de la gare");
      cy.get('[data-cy="partner_zip"]').type("69000");
      cy.get('[data-cy="partner_city"]').type("Lyon");
      cy.get('[data-cy="partner_hour"]').type("10:00");
      cy.get('[data-cy="partner_comments"]').type("etage 5, chambre 67");
      cy.contains("CONTINUER VERS LE PAIEMENT").click();
      cy.get('[data-cy="payment_checkbox_cgv"]').click();
      cy.get('[data-cy="payment_checkbox_accept"]').click();
      cy.contains("CONFIRMER LA COMMANDE").click();
      cy.contains(
        "Votre commande a bien été validée. Nous vous remercions de votre confiance."
      );
    });
  });
});
