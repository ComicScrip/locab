describe("without session", () => {
  const email = "visitor@website.com";
  beforeEach(() => {
    cy.task("resetDB");
    cy.signup({ password: "verysecure1!" });
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
    cy.contains(
      "Ces identifiants ne corresspondent à aucun utilisateur actif."
    );
  });

  it("cannot login with incorrect password", () => {
    cy.get('[data-cy="logout_button"]').should("not.exist");
    cy.get('[data-cy="signin_email"]').type(email);
    cy.get('[data-cy="signin_password"]').type("verysecure");
    cy.get('[data-cy="signin_button"]').click();
    cy.contains(
      "Ces identifiants ne corresspondent à aucun utilisateur actif."
    );
  });
});

describe("with an active session", () => {
  const email = "visitor@website.com";
  beforeEach(() => {
    cy.task("resetDB");
    cy.signup({ password: "verysecure1!" });
    cy.visit("/signup");
  });
  it("shows the name of the current user and a disconnect button", () => {
    cy.get('[data-cy="signin_email"]').type(email);
    cy.get('[data-cy="signin_password"]').type("verysecure1!");
    cy.get('[data-cy="signin_button"]').click();
    cy.visit("/signup");
    cy.contains("Vous êtes connecté en tant que jeanne");
    cy.get('[data-cy="logout_button"]').click();
    cy.contains("SE CONNECTER");
  });
});

describe("admin login", () => {
  const email = "admin@website.com";
  beforeEach(() => {
    cy.task("resetDB");
  });
  it.only("can access back-office with an admin account", () => {
    cy.signup({ role: "admin" });
    cy.visit("/admin");
    cy.get('[data-cy="admin_logInBtn"]').click();
    cy.get('[data-cy="signin_email"]').type(email);
    cy.get('[data-cy="signin_password"]').type("verysecure");
    cy.get('[data-cy="signin_button"]').click();
    cy.visit("/admin");
    cy.contains("Réservation");
  });
});
