describe("/reset-password", () => {
  const email = "terno.davelopper@gmail.com";

  it("can send the reset password email", () => {
    cy.signup({ email });
    cy.visit("/SendEmailMdp");
    cy.get("[data-cy='email']").type(email);
    cy.get("[data-cy='sendResetLinkBtn']").click();
    cy.contains(
      "Si votre email existe dans notre base de données,vous allez recevoir un email vous expliquant les étapes à suivre pour réinitialiser votre mot de passe"
    );
  });
});
