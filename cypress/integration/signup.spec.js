describe("/signup", () => {
  const email = "admin@website.com";

  it("registers a new user if valid data is submitted", () => {
    cy.task("resetDB");
    cy.visit("/signup");
    cy.get('[data-cy="sign_up_firstName"]').type("jane");
    cy.get('[data-cy="sign_up_name"]').type("doe");
    cy.get('[data-cy="sign_up_adresse"]').type("rue de la Wild");
    cy.get('[data-cy="sign_up_codePostal"]').type("69002");
    cy.get('[data-cy="sign_up_ville"]').type("Lyon");
    cy.get('[data-cy="sign_up_telephone"]').type("06 12 34 56 78");
    cy.get('[data-cy="sign_up_email"]').type(email);
    cy.get('[data-cy="sign_up_password"]').type("Azertyuiop1!");
    cy.get('[data-cy="sign_up_passwordConfirmation"]').type("Azertyuiop1!");
    cy.get('[data-cy="sign_up_button"]').click();

    cy.contains("Merci pour votre inscription !").should("be.visible");

    cy.get('[data-cy="sign_up_firstName"]').should("have.value", "");
    cy.get('[data-cy="sign_up_name"]').should("have.value", "");
    cy.get('[data-cy="sign_up_adresse"]').should("have.value", "");
    cy.get('[data-cy="sign_up_codePostal"]').should("have.value", "");
    cy.get('[data-cy="sign_up_ville"]').should("have.value", "");
    cy.get('[data-cy="sign_up_telephone"]').should("have.value", "");
    cy.get('[data-cy="sign_up_email"]').should("have.value", "");
    cy.get('[data-cy="sign_up_password"]').should("have.value", "");
    cy.get('[data-cy="sign_up_passwordConfirmation"]').should("have.value", "");
  });

  it("cannot submit the form if required data is not present", () => {
    cy.task("resetDB");
    cy.visit("/signup");
    cy.get('[data-cy="registerForm"]').within(() => {
      cy.get("input:invalid").should("have.length", 9);
      cy.get('[data-cy="sign_up_firstName"]').type("jane");
      cy.get("input:invalid").should("have.length", 8);
      cy.get('[data-cy="sign_up_name"]').type("doe");
      cy.get("input:invalid").should("have.length", 7);
      cy.get('[data-cy="sign_up_adresse"]').type("rue de la Wild");
      cy.get("input:invalid").should("have.length", 6);
      cy.get('[data-cy="sign_up_codePostal"]').type("69002");
      cy.get("input:invalid").should("have.length", 5);
      cy.get('[data-cy="sign_up_ville"]').type("Lyon");
      cy.get("input:invalid").should("have.length", 4);
      cy.get('[data-cy="sign_up_telephone"]').type("06 12 34 56 78");
      cy.get("input:invalid").should("have.length", 3);
      cy.get('[data-cy="sign_up_email"]').type("notanemail");
      cy.get("input:invalid").should("have.length", 3);
      cy.get('[data-cy="sign_up_email"]').type(email);
      cy.get("input:invalid").should("have.length", 2);
      cy.get('[data-cy="sign_up_password"]').type("Azertyuiop1!");
      cy.get("input:invalid").should("have.length", 1);
      cy.get('[data-cy="sign_up_passwordConfirmation"]').type("Azertyuiop1!");
      cy.get("input:invalid").should("have.length", 0);
    });
  });

  it("cannot submit the form if password dont match", () => {
    cy.task("resetDB");
    cy.visit("/signup");
    cy.get('[data-cy="registerForm"]').within(() => {
      cy.get('[data-cy="sign_up_firstName"]').type("jane");
      cy.get('[data-cy="sign_up_name"]').type("doe");
      cy.get('[data-cy="sign_up_adresse"]').type("rue de la Wild");
      cy.get('[data-cy="sign_up_codePostal"]').type("69002");
      cy.get('[data-cy="sign_up_ville"]').type("Lyon");
      cy.get('[data-cy="sign_up_telephone"]').type("06 12 34 56 78");
      cy.get('[data-cy="sign_up_email"]').type(email);
      cy.get('[data-cy="sign_up_password"]').type("Azertyuiop1!");
      cy.get('[data-cy="sign_up_passwordConfirmation"]').type("Azertyuio!");
      cy.get('[data-cy="sign_up_button"]').click();
      cy.contains("Vos mots de passe ne sont pas identiques").should(
        "be.visible"
      );
    });
  });

  it("cannot register if email already exist", () => {
    cy.signup({ email: "test@test.com" });
    cy.visit("/signup");
    cy.get('[data-cy="sign_up_firstName"]').type("jane");
    cy.get('[data-cy="sign_up_name"]').type("doe");
    cy.get('[data-cy="sign_up_adresse"]').type("rue de la Wild");
    cy.get('[data-cy="sign_up_codePostal"]').type("69002");
    cy.get('[data-cy="sign_up_ville"]').type("Lyon");
    cy.get('[data-cy="sign_up_telephone"]').type("06 12 34 56 78");
    cy.get('[data-cy="sign_up_email"]').type("test@test.com");
    cy.get('[data-cy="sign_up_password"]').type("Azertyuiop1!");
    cy.get('[data-cy="sign_up_passwordConfirmation"]').type("Azertyuiop1!");
    cy.get('[data-cy="sign_up_button"]').click();
    cy.contains("Email déjà utilisé").should("be.visible");
  });
});
