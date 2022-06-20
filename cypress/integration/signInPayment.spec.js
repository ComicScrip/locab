describe("signInPayment", () => {
  beforeEach(() => {
    cy.visit("/signInPayment");
  });

  it("can access to informations page when all inputs are field", () => {
    cy.signup({ email: "test@test.com", role: "admin" });
    cy.visit("/signInPayment");
    cy.get('[data-cy="signin_email"]').type("salut@test.com");
    cy.get('[data-cy="signin_password"]').type("verysecure");
    cy.get('[data-cy="signin_button"]').click();
    cy.url().should("include", "/commande");
  });
});

it.only("can access to the informations page without log in", () => {
  cy.visit("/signInPayment");
  cy.get('[data-cy="continue_button"]').click();
  cy.url().should("include", "/commande");
});

it("can access to the signup page", () => {
  cy.visit("/signInPayment");
  cy.get('[data-cy="continue_button_incription"]').click();
  cy.url().should("include", "/signup");
});
