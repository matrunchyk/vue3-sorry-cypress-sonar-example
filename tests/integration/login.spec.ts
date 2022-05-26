/// <reference path="../support/index.d.ts" />

describe('Login flow', () => {
    beforeEach(() => {
        // Comment this and re-run tests
        sessionStorage.clear();
    });

    it('DGC-123: Can open login page', () => {
        cy.visit('/');
        cy.get('[data-cy="login"]').should('contain.text', 'Login')
        cy.get('[data-cy="login"]').click();
        cy.get('[data-cy="page-title"]').should('contain.text', 'Please log in')
        cy.get('[data-cy="create-new"]').should('not.exist');
        cy.get('[data-cy="logout"]').should('not.exist');
    });

    it('DGC-123: Validates login form', () => {
        cy.visit('/login');

        cy.get('[data-cy="username"]').type('someone')
        cy.get('[data-cy="password"]').type('someone')
        cy.get('[data-cy="login-submit"]').click()
        cy.dataCy('error-message').should('contain.text', 'Invalid credentials')
        // Screenshot?
        cy.get('[data-cy="username"]').should('have.css', 'outline', 'rgb(249, 168, 212) solid 1.5px')
    });

    it('DGC-123: Returns to home page', () => {
        cy.visit('/login');

        cy.get('[data-cy="go-back"]').click()
        cy.checkLocationPage('/');
    });

    it('DGC-123: Forgot password link works well', () => {
        cy.visit('/login');

        cy.get('[data-cy="forgot"]').click()
        cy.checkLocationPage('/forgot');
    });

    it('DGC-123: Log in works', () => {
        cy.visit('/login');

        cy.get('[data-cy="username"]').type('demo')
        cy.get('[data-cy="password"]').type('demo')
        cy.get('[data-cy="login-submit"]').click()
        cy.checkLocationPage('/');
        // Experiment: rename below data-cy to "username" (here and on the App.vue)
        cy.get('[data-cy="hello-username"]').should('contain.text', 'Hello, demo')
        cy.get('[data-cy="create-new"]').should('exist');
        cy.get('[data-cy="logout"]').should('exist');
    });
});
