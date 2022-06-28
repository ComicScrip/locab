describe("profile", function () {
  describe("withSession", function () {
    beforeEach(() => {
      cy.setupCurrentUser();
      cy.visit("/profile/infoperso");
    });

    it("can save my profile", function () {
      cy.get('[data-cy="email"]').type("{selectall}{backspace}");
      cy.get('[data-cy="phone"]').clear().type("06 14 15 16 14 17");
      cy.get('[data-cy="address"]').clear().type("12 rue de la flotte");
      cy.get('[data-cy="validate-btn"]').click();
    });
  });
});
