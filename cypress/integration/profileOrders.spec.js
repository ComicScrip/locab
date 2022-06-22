describe("without session", () => {
  it("asks to log in if the user isn't signed in", () => {
    cy.visit("/profile/orders");
    cy.contains("Veuillez vous connecter pour accéder à votre compte");
  });
});

describe("with an active session", () => {
  beforeEach(() => {
    cy.setupCurrentUser({ firstname: "jeanne" });
    cy.visit("/profile/orders");
  });

  it("can access the profile page if the user is signed in", () => {
    cy.contains("Mes commandes");
  });

  it.only("shows my previous orders", () => {
    cy.contains("Commande n°ZRT123");
  });
});
