describe("/profile/infoperso", () => {
  beforeEach(() => {
    cy.task("resetDB");
    cy.setupCurrentUser({ firstname: "John" });
  });

  it("can update the name", function () {
    cy.get("@currentUser").then((currentUser) => {
      cy.visit("/profile/infoperso");
      cy.get('[data-cy ="firstName"]').should(
        "have.value",
        currentUser.firstname
      );
      cy.get('[data-cy ="firstName"]').type("{selectAll}test123");
      cy.get('[data-cy="validate-btn"]').click();
      cy.contains("Vos modifications ont bien été prises en compte");
    });
  });
});
