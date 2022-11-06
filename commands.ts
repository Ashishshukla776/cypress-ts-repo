/// <reference types="cypress" />
// ***********************************************
export {};

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to type a few random words into input elements
       * @param count=3
       * @example cy.get('input').admin_login()
       */
       admin_login(): Chainable<Element>
    }
    interface Chainable {
      /**
       * Custom command to type a few random words into input elements
       * @param count=3
       * @example cy.get('input').admin_login()
       */
       url_login(): Chainable<Element>
    }
  }
}

Cypress.Commands.add('admin_login',() => {
    let baseUrl = Cypress.env("apiUrl")
      cy.request({
        method: 'POST',
        url: `${baseUrl}v1/admin/auth/`,
        body: {
          email: Cypress.env("username"),
           password: Cypress.env("Password") },
      }).then(({ body }) => {
        Cypress.env('authToken', body.result.auth)
      })
  })

  Cypress.Commands.add('url_login',() => {
    cy.log("Demo user login")
  })