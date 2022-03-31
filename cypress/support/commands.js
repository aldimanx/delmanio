Cypress.Commands.add('forceVisit', url => {
    cy.window().then(win => {
        return win.open(url, '_self'); 
      });
});

Cypress.Commands.add('Homepage',() => {
    cy.visit('https://pokemon.irshadibagas.com/')
});

Cypress.Commands.add('Search',() => {
    cy.visit('https://pokemon.irshadibagas.com/pokemon_details')
});

Cypress.Commands.add('Details',() => {
    cy.visit('https://pokemon.irshadibagas.com/pokemon_details/bulbasaur')
});

Cypress.Commands.add('Hunt',() => {
    cy.visit('https://pokemon.irshadibagas.com/pokemon_details/bulbasaur')
    cy.get('[data-cy="pokemon-details-catch-pokemon-button"]').click()
});