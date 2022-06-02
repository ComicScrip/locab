describe("/signup", () => {
  const email = "john.doe@gmail.com";
  beforeEach(() => {
    cy.task("deleteUserByEmail", email);
  });

  it("registers a new user if valid data is submitted", () => {
    cy.get("#name").type("johndoe");
    cy.get("#email").type(email);
    cy.get("#password").type("superpassword3000");

    cy.get("button[type=submit]").click();
    cy.contains("Votre inscription est presque terminée").should("be.visible");

    cy.get("#name").should("have.value", "");
    cy.get("#email").should("have.value", "");
    cy.get("#password").should("have.value", "");

    cy.task("getLastEmail", email).then((mailObject) => {
      expect(mailObject).not.to.be.null;
      const link = mailObject.body.match(/https?:\/\/\S+/gi)[0];
      const confirmationCodeUrlInEmail = new URL(link);
      const confirmationCodeInEmail =
        confirmationCodeUrlInEmail.searchParams.get("emailVerificationCode");
      expect(confirmationCodeUrlInEmail).not.be.null;
      cy.task("findUserByEmail", email).then((user) => {
        expect(user).to.not.be.null;
        expect(user.emailVerificationCode).to.equal(confirmationCodeInEmail);
      });
    });
  });

  it("prints an error message if email already exists in DB", () => {
    cy.task("createUser", {
      name: "janedoe",
      email,
      password: "superpassword123",
    });

    cy.get("#name").type("janedoe");
    cy.get("#email").type(email);
    cy.get("#password").type("superpassword3001");

    cy.get("button[type=submit]").click();

    cy.contains("Email déjà pris").should("be.visible");
  });
});
