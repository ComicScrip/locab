describe("without session", () => {
  it("asks to log in if the user isn't signed in", () => {
    cy.visit("/profile/orders");
    cy.contains("Veuillez vous connecter pour accéder à votre compte");
  });
});

describe("with an active session", () => {
  beforeEach(() => {
    cy.login({ email: "visitor@locab.com", password: "locablocab" });
    cy.visit("/profile/orders");
  });

  it("can access the profile page if the user is signed in", () => {
    cy.contains("Mes commandes");
  });

  it("shows my previous orders", () => {
    cy.contains("Commande n°ZRT123");
  });

  it("shows my orders depending on the date it was made", () => {
    cy.get('[data-cy="dateSelect"]').select("6 derniers mois");
    cy.contains("Commande n°R54363");
    cy.get('[data-cy="dateSelect"]').select("3 derniers mois");
    cy.contains("Commande n°4366UL").should("not.exist");
    cy.get('[data-cy="dateSelect"]').select("Dernier mois");
    cy.contains("Commande n°R54363").should("not.exist");
  });
});
