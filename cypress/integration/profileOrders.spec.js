describe("orders - without session", () => {
  it("asks to log in if the user isn't signed in", () => {
    cy.task("resetDB");
    cy.visit("/profile/orders");
    cy.contains("Veuillez vous connecter pour accéder à votre compte");
  });
});

describe("orders - with an active session", () => {
  it("can access the profile page if the user is signed in", () => {
    cy.task("resetDB");
    cy.setupCurrentUser({ email: "toto@alaplage.com" });
    cy.visit("/profile/orders");
    cy.contains("Mes commandes");
  });
});
