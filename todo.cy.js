/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  let baseurl = Cypress.env("apiUrl");
  it("Test case for login and get Authorizaton token", () => {
    cy.url_login();
    
    cy.request({
      method: "POST",
      url: `${baseurl}v1/auth/`,
      body: {
        email: Cypress.env("username"),
        password: Cypress.env("Password")
      },
      failOnStatusCode: false
    }).then (({body}) => {
      Cypress.env("authToken", body.result.auth);
      expect(body).has.property("statusCode",200);
      expect(body).has.property("success", true);
      expect(body).has.property("error", null);
      expect(body).has.property("result");
      expect(body.result).has.property("message",body.result.message);
      expect(body.result).has.property("auth",body.result.auth);
      expect(body.result).has.property("username",body.result.username);
      expect(body.result).has.property("user_id",body.result.user_id);
    });
  });
 
})
