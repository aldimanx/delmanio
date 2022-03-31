class PokemonLists {

PokemonIcon(){
    return cy.get('[data-cy="app-icon"]')
}
Description(){
    return cy.contains('The Pokédex contains list for every Pokemon in every generation.')
}

PokedexEntries(){
    return cy.get('.css-1engwfa')
}

Scroll1(){
    return cy.get(':nth-child(2) > [data-cy="pokedex-pokemon-button"]')
}
Scroll2(){
    return  cy.get(':nth-child(4) > [data-cy="pokedex-pokemon-button"]')
}
Scroll3(){
    return cy.get(':nth-child(6) > [data-cy="pokedex-pokemon-button"]')
}
Scroll4(){
    return cy.get(':nth-child(8) > [data-cy="pokedex-pokemon-button"]')
}
Scroll5(){
    return cy.get(':nth-child(10) > [data-cy="pokedex-pokemon-button"]')
}
NextButton(){
    return cy.get('[data-cy="next-page-button"]')
}
BackButton(){
    return cy.get('[data-cy="previous-page-button"]')
}
}

export default PokemonLists