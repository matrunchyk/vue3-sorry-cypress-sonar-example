/// <reference path="../support/index.d.ts" />

describe('Create post flow', () => {
  beforeEach(() => {
    // Comment this and re-run tests
    sessionStorage.clear();
  });

  it('DGC-123: Redirects to login if not authenticated', () => {
    cy.visit('/create-new');
    cy.checkLocationPage('/login');
  });

  it('DGC-123: Opens create a new post page', () => {
    cy.login('Hurray');
    cy.visit('/create-new');
    cy.screenshot();
    cy.get('[data-cy="title"]').type('A new post');
    cy.get('[data-cy="content-editable"]').type('A new content');
    cy.get('[data-cy="content"]').should('contain.text', 'A new content');
  });

  it('DGC-123: Redirects to a home page on Cancel', () => {
    cy.login('Hurray');
    cy.visit('/create-new');
    cy.get('[data-cy="cancel"]').click();
    cy.checkLocationPage('/');
  });

  it('DGC-123: Adds a new article to the blog', () => {
    cy.login('Hurray');
    cy.visit('/create-new');
    cy.get('[data-cy="title"]').type('Post title');
    cy.get('[data-cy="content-editable"]').type('post content');
    cy.get('[data-cy="create"]').click();
    cy.checkLocationPage('/');

    cy.get('[data-cy="post-0"]').should('exist');
    cy.get('[data-cy="post-0-title"]').should('have.text', 'Post title');
    cy.get('[data-cy="post-0-content"]').should('have.text', 'post content');
    cy.get('[data-cy="post-0-date"]').should('have.text', 'less than a minute ago');
  });

  it('DGC-123: Removes an article from the blog as auth user', () => {
    cy.seedPosts(10);
    cy.login('Hurray');
    cy.visit('/');

    cy.screenshot();
    cy.get('[data-cy-type="post"]').should('have.length', 10);
    cy.get('[data-cy="remove-post-0"]').click();
    cy.get('[data-cy-type="post"]').should('have.length', 9);
  });

  it('DGC-123: Cannot remove an article from the blog as NON auth user', () => {
    cy.seedPosts(10);
    cy.visit('/');

    cy.get('[data-cy-type="post"]').should('have.length', 10);
    cy.get('[data-cy="remove-post-0"]').should('not.exist');
  });
  // Sorting better to check using unit tests
});
