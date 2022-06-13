describe("/signup", () => {
  const email = "admin@website.com";
  beforeEach(() => {
    cy.task("resetDB");
    cy.visit("/signup");
  });

  it("registers a new user if valid data is submitted", () => {
    cy.get('[data-cy="sign_up_firstName"]').type("jane");
    cy.get('[data-cy="sign_up_name"]').type("doe");
    cy.get('[data-cy="sign_up_adresse"]').type("rue de la Wild");
    cy.get('[data-cy="sign_up_codePostal"]').type("69002");
    cy.get('[data-cy="sign_up_ville"]').type("Lyon");
    cy.get('[data-cy="sign_up_telephone"]').type("06 12 34 56 78");
    cy.get('[data-cy="sign_up_email"]').type(email);
    cy.get('[data-cy="sign_up_password"]').type("Azertyuiop1!");
    cy.get('[data-cy="sign_up_passwordConfirmation"]').type("Azertyuiop1!");
    cy.get('[data-cy="sign_up_button"]').click();

    cy.contains("Merci pour votre inscription !").should("be.visible");

    cy.get('[data-cy="sign_up_firstName"]').should("have.value", "");
    cy.get('[data-cy="sign_up_name"]').should("have.value", "");
    cy.get('[data-cy="sign_up_adresse"]').should("have.value", "");
    cy.get('[data-cy="sign_up_codePostal"]').should("have.value", "");
    cy.get('[data-cy="sign_up_ville"]').should("have.value", "");
    cy.get('[data-cy="sign_up_telephone"]').should("have.value", "");
    cy.get('[data-cy="sign_up_email"]').should("have.value", "");
    cy.get('[data-cy="sign_up_password"]').should("have.value", "");
    cy.get('[data-cy="sign_up_passwordConfirmation"]').should("have.value", "");
  });
});
