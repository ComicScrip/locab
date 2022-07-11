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
    lastname = "doe",
    firstname = "jeanne",
    address = "rue de la Wild",
    zip = "69002",
    city = "Lyon",
    email = "visitor@website.com",
    password = "verysecure",
    role = "visitor",
    phone = "0612345678",
  } = {}) => {
    cy.dataSession({
      name: "userInDb",
      setup: () => {
        cy.task("deleteUserByEmail", email);
        cy.task("createUser", {
          lastname,
          firstname,
          address,
          zip,
          city,
          email,
          password,
          phone,
          role,
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

Cypress.Commands.add(
  "login",
  ({ email = "visitor@website.com", password = "verysecure" } = {}) => {
    cy.dataSession({
      name: "userSession",
      setup: () => {
        cy.request({ url: "/api/auth/csrf" })
          .then(({ body: { csrfToken } }) =>
            cy.request({
              url: "/api/auth/callback/credentials",
              method: "POST",
              body: {
                csrfToken,
                username: email,
                password,
              },
            })
          )
          .then(() => cy.getCookie("next-auth.session-token").should("exist"))
          .then((cookie) =>
            cy
              .request({ url: "/api/currentUserProfile" })
              .then(({ body: user }) => ({
                cookie,
                user,
              }))
          );
      },
      validate: (saved) => {
        return cy
          .request({
            url: "/api/currentUserProfile",
            failOnStatusCode: false,
            headers: {
              Cookie: `next-auth.session-token=${saved.cookie.value}`,
            },
          })
          .then(
            ({ body: user }) =>
              user.email === saved.user.email && user.role === saved.user.role
          );
      },
      recreate: (saved) => {
        cy.setCookie("next-auth.session-token", saved.cookie.value);
      },
      dependsOn: ["userInDb"],
    });
  }
);

Cypress.Commands.add(
  "loginProfile",
  ({ email = "visitor@website.com", password = "verysecure" } = {}) => {
    cy.dataSession({
      name: "userSession",
      setup: () => {
        cy.request({ url: "/api/auth/csrf" })
          .then(({ body: { csrfToken } }) =>
            cy.request({
              url: "/api/auth/callback/credentials",
              method: "POST",
              body: {
                csrfToken,
                username: email,
                password,
              },
            })
          )
          .then(() => cy.getCookie("next-auth.session-token").should("exist"))
          .then((cookie) =>
            cy
              .request({ url: "/api/currentUserProfile" })
              .then(({ body: user }) => ({
                cookie,
                user,
              }))
          );
      },
      validate: (saved) => {
        return cy
          .request({
            url: "/api/currentUserProfile",
            failOnStatusCode: false,
            headers: {
              Cookie: `next-auth.session-token=${saved.cookie.value}`,
            },
          })
          .then(
            ({ body: user }) =>
              user.email === saved.user.email && user.role === saved.user.role
          );
      },
      recreate: (saved) => {
        cy.setCookie("next-auth.session-token", saved.cookie.value);
      },
    });
  }
);

Cypress.Commands.add(
  "setupCurrentUser",
  ({
    lastname = "doe",
    firstname = "jeanne",
    address = "rue de la Wild",
    zip = "69002",
    city = "Lyon",
    email = "visitor@website.com",
    password = "verysecure",
    role = "admin",
    phone = "0612345678",
  } = {}) => {
    cy.dataSession({
      name: "currentUser",
      setup: () => {
        cy.signup({
          lastname,
          firstname,
          address,
          zip,
          city,
          email,
          password,
          phone,
          role,
        });
        cy.login({ email });
        cy.get("@userSession").then((session) => session.user);
      },
      validate: () => false,
    });
  }
);
