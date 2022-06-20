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
});
