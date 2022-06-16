describe("signInPayment", () => {
  beforeEach(() => {
    cy.visit("/signInPayment");
  });

  it("can access to informations page when all inputs are field", () => {
    cy.signup({ email: "test@test.com", role: "admin" });
    cy.visit("/signInPayment");
    cy.get('[data-cy="signin_email"]').type("test@test.com");
    cy.get('[data-cy="signin_password"]').type("verysecure");
    cy.get('[data-cy="signin_button"]').click();
    cy.url().should("include", "/commande");
  });
});

it("can access to the signup page", () => {
  cy.visit("/signInPayment");
  cy.get('[data-cy="continue_button"]').click();
  cy.url().should("include", "/signup");
});
