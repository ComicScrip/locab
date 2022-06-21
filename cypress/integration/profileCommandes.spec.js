describe("commandes in profile", () => {
  beforeEach(() => {
    cy.visit("/profile/commandes");
  });

  it("asks to log in if the user isn't signed in", () => {
    cy.contains("Veuillez vous connecter pour accéder à votre compte");
  });
});
