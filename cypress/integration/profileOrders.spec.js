describe("orders - without session", () => {
  it("asks to log in if the user isn't signed in", () => {
    cy.visit("/profile/orders");
    cy.contains("Veuillez vous connecter pour accéder à votre compte");
  });
});

describe("orders - with an active session", () => {
  beforeEach(() => {
    cy.task("resetDB");
    cy.setupCurrentUser({ role: "visitor" }).then((user) => {
      cy.task("createOrderSample", { user });
      cy.visit("/profile/orders");
    });
  });

  it("can access the profile page if the user is signed in", () => {
    cy.contains("Mes commandes");
  });

  it("order - shows all my orders", () => {
    cy.contains("ART123");
  });

  it("order - shows only the orders made according to the selected filter", () => {
    cy.get('[data-cy="dateSelect"]').select("last3months");
    cy.contains("A366UL").should("not.exist");
    cy.get('[data-cy="dateSelect"]').select("lastmonth");
    cy.contains("A54363").should("not.exist");
  });
});
