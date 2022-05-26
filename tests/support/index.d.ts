/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        login(name: string): Chainable<void>;

        /**
         * Custom command to select DOM element by data-cy attribute.
         * @example cy.dataCy('greeting')
         */
        dataCy(value: string): Chainable<Element>

        checkLocationPage(pathname: string): Chainable<void>

        seedPosts(count?: number): Chainable<void>
    }
}

