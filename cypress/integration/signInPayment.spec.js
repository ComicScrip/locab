describe("signInPayment", () => {
  beforeEach(() => {
    cy.visit("/signInPayment");
  });

  it.only("can access to informations page when all inputs are filled", () => {
    cy.task("resetDB");
    cy.signup({
      email: "test@test.com",
      role: "visitor",
      password: "locablocab",
    });
    cy.visit("/signInPayment");
    cy.get('[data-cy="signin_email"]').type("test@test.com");
    cy.get('[data-cy="signin_password"]').type("locablocab");
    cy.get('[data-cy="signin_button"]').click();
    cy.url().should("include", "/commande");
  });
});

it("can access to the informations page without log in", () => {
  cy.visit("/signInPayment");
  cy.get('[data-cy="continue_button"]').click();
  cy.url().should("include", "/commande");
});

it("can access to the signup page", () => {
  cy.visit("/signInPayment");
  cy.get('[data-cy="continue_button_incription"]').click();
  cy.url().should("include", "/signup");
});
