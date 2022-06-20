describe("without session", () => {
  const email = "visitor@website.com";
  beforeEach(() => {
    cy.task("resetDB");
    cy.signup({ password: "verysecure1!", firstname: "jeanne" });
    cy.visit("/signup");
  });

  it("can login a customer with correct credentials", () => {
    cy.get('[data-cy="logout_button"]').should("not.exist");
    cy.get('[data-cy="signin_email"]').type(email);
    cy.get('[data-cy="signin_password"]').type("verysecure1!");
    cy.get('[data-cy="signin_button"]').click();
    cy.visit("/signup");
    cy.contains("Vous êtes connecté en tant que jeanne").should("be.visible");
  });

  it("cannot login with incorrect email", () => {
    cy.get('[data-cy="logout_button"]').should("not.exist");
    cy.get('[data-cy="signin_email"]').type("adm@website.com");
    cy.get('[data-cy="signin_password"]').type("verysecure1!");
    cy.get('[data-cy="signin_button"]').click();
    cy.contains("Ces identifiants ne correspondent à aucun utilisateur actif.");
  });

  it("cannot login with incorrect password", () => {
    cy.get('[data-cy="logout_button"]').should("not.exist");
    cy.get('[data-cy="signin_email"]').type(email);
    cy.get('[data-cy="signin_password"]').type("verysecure");
    cy.get('[data-cy="signin_button"]').click();
    cy.contains("Ces identifiants ne correspondent à aucun utilisateur actif.");
  });
});

describe("with an active session", () => {
  beforeEach(() => {
    cy.task("resetDB");
  });
  it("shows the name of the current user and a disconnect button", () => {
    cy.setupCurrentUser({ firstname: "jeanne" });
    cy.visit("/signup");
    cy.contains("Vous êtes connecté en tant que jeanne");
    cy.get('[data-cy="logout_button"]').click();
    cy.contains("SE CONNECTER");
  });
});

describe("admin login", () => {
  it("can access back-office with an admin account", () => {
    cy.setupCurrentUser({ role: "admin" });
    cy.visit("/admin");
    cy.contains("Réservation");
  });

  it("cannot access back-office without an admin account", () => {
    cy.setupCurrentUser({ role: "visitor" });
    cy.visit("/admin");
    cy.contains(
      "Vous devez vous identifier en tant qu'admin pour accéder au back office"
    );
  });
});
