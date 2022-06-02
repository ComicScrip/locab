// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add(
  "signup",
  ({
    email = "visitor@website.com",
    role = "visitor",
    password = "verysecure",
    name = "visitor",
  } = {}) => {
    cy.dataSession({
      name: "userInDb",
      setup: () => {
        cy.task("deleteUserByEmail", email);
        cy.task("createUser", {
          email,
          password,
          role,
          name,
        }).then((user) => {
          return Promise.resolve(user);
        });
      },
      validate: (saved) => {
        return cy.task("findUserByEmail", saved.email).then((user) => {
          if (user?.email === email && user?.role === role)
            return Promise.resolve(!!user);
          else return Promise.resolve(false);
        });
      },
    });
  }
);
