describe("/reset-password", () => {
  const email = "john.doe@gmail.com";

  it("can send the reset password email", () => {
    cy.signup({ email });
    cy.visit("/reset-password");
    cy.get("[data-cy='email']").type(email);
    cy.get("[data-cy='sendResetLinkBtn']").click();
    cy.contains(
      "Un message avec un lien de réinitialisation vous a été envoyé, merci de vérfier votre boite mail"
    );
  });
});
