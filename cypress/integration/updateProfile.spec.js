describe("infoperso", () => {
  beforeEach(() => {
    cy.visit("/profile/infoperso");
  });
  describe("with an active session", () => {
    beforeEach(() => {
      cy.setupCurrentUser({ name: "Dave Loper" });
    });

    it("has an english translation", () => {
      cy.visitInLanguage("/profile/infoperso", "en");
      cy.get('[data-cy="switch-to-en"]').click();
      cy.contains("firstName");
      cy.contains("lastName");
      cy.contains("email");
      cy.contains("address");
      cy.contains("city");

      cy.contains("Save").click();
      cy.contains("Your changes have been saved");
    });

    it("is accessible form the menu", () => {
      cy.visitInLanguage("/", "fr");
      cy.get('[data-cy="currentUserMenu"]').click();
      cy.get('[data-cy="currentUserMenu"]').contains("Profil").click();
      cy.contains("Mon profil");
    });

    it("cannot update the email", function () {
      cy.visit("/profile/infopersp");
      cy.get('input[type="email"]').should("be.disabled");
    });

    it("can update the name", function () {
      cy.get("@currentUser").then((currentUser) => {
        cy.visit("/profile/infoperso");
        cy.get("#name").should("have.value", currentUser.name);
        cy.get("#name").type("{selectall}test123");
        cy.get("form").submit();
        cy.contains("Vos modifications ont bien été prises en comptes");
        cy.task("findUserByEmail", currentUser.email).then((user) => {
          expect(user.name).to.equal("test123");
        });
      });
    });
  });
  describe("without session", () => {
    it("redirects to login", function () {
      cy.visit("/profile/infoperso");
      cy.url().should("contain", "login");
    });
  });
});
