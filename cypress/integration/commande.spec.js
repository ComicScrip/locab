describe("commande", () => {
  beforeEach(() => {
    cy.visit("/commande");
  });

  it("can create a new user when all fields are filled", () => {
    cy.get('[data-cy="infos_email"]').type("test@test.com");
    cy.get('[data-cy="infos_firstname"]').type("John");
    cy.get('[data-cy="infos_lastname"]').type("doe");
    cy.get('[data-cy="infos_address"]').type("3 route de labas");
    cy.get('[data-cy="infos_zip"]').type("69000");
    cy.get('[data-cy="infos_city"]').type("Lyon");
    cy.get('[data-cy="infos_submit_button"]').click();
    cy.contains("Partenaire");
  });

  it.only("can register the partner informations", () => {
    cy.get('[data-cy="infos_submit_button"]').click();
    cy.get('[data-cy="partner_name"]').type("partenaire test");
    cy.get('[data-cy="partner_phone"]').type("0102030405");
    cy.get('[data-cy="partner_firstname"]').type("Dave");
    cy.get('[data-cy="partner_lastname"]').type("Looper");
    cy.get('[data-cy="partner_lastname"]').type("Looper");
    cy.get('[data-cy="partner_adress"]').type("1 rue du test");
    cy.get('[data-cy="partner_zip"]').type("69000");
    cy.get('[data-cy="partner_city"]').type("Lyon");
    cy.get('[data-cy="partner_hour"]').type("15h00");
    cy.get('[data-cy="partner_comments"]').type("test commentaire");
    cy.get('[data-cy="partner_submit_button"]').click();
    cy.contains("paiement");
  });
});
