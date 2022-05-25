import { randBetweenDate, randPost } from '@ngneat/falso';

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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// @ts-ignore
Cypress.Commands.add('dataCy', value => cy.get(`[data-cy=${value}]`));

// @ts-ignore
Cypress.Commands.add('login', (name: string) => {
  sessionStorage.setItem('user', JSON.stringify({ name }));
});

// @ts-ignore
Cypress.Commands.add('checkLocationPage', (pathname: string) => {
  cy.location().should(loc => {
    expect(loc.pathname).to.eq(pathname);
  });
});

// @ts-ignore
Cypress.Commands.add('seedPosts', (count = 10) => {
  const posts = randPost({ length: count as number });

  sessionStorage.setItem('posts', JSON.stringify(posts.map(p => ({
    uuid: p.id,
    title: p.title,
    content: p.body,
    date: randBetweenDate({ from: new Date('10/07/2020'), to: new Date() }),
  }))));
});

// @ts-ignore
Cypress.Commands.add('hasGuestLinks', () => {
  cy.get('[data-cy="create-new"]').should('not.exist');
  cy.get('[data-cy="logout"]').should('not.exist');
});
