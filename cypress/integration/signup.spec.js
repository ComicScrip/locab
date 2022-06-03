describe("/signup", () => {
  const email = "admin@website.com";
  beforeEach(() => {
    cy.task("resetDB");
    cy.visit("/signup");
  });

  it("registers a new user if valid data is submitted", () => {
    cy.get('[data-cy="name"]').type("admin");
    cy.get('[data-cy="email"]').type(email);
    cy.get('[data-cy="password"]').type("superpassword3000");
    cy.get('[data-cy="passwordConfirmation"]').type("superpassword3000");

    cy.get("button[type=submit]").click();

    cy.contains("Merci pour votre inscription !").should("be.visible");

    cy.get('[data-cy="name"]').should("have.value", "");
    cy.get('[data-cy="email"]').should("have.value", "");
    cy.get('[data-cy="password"]').should("have.value", "");
    cy.get('[data-cy="passwordConfirmation"]').should("have.value", "");
  });
});
