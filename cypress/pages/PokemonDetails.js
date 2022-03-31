class PokemonDetails {

DetailsPage(){
    return cy.get(':nth-child(3) > .chakra-icon')
    
}
Element(){
    return cy.get('.css-3j35ct')
}
Skill(){
    return cy.get('.css-1julmzj')
}
ViewPokemon(){
    return cy.get('[data-cy="pokemon-search-view-pokemon-button"]')
}

PokemonDetailsName(){
    return cy.get('[data-cy="pokemon-details-pokemon-name"]')
}
SearchBar(){
    return cy.get('[data-cy="search-pokemon-input"]')
}
SearchResult(){
    return cy.get('[data-cy="pokemon-card-pokemon-name"]')
}
ClearIcon(){
    return cy.get('[data-cy="clear-search-input-button"] > svg > path')
}
Hp(){
    return cy.get(':nth-child(1) > .css-1j59w0l')
}
Attack(){
    return cy.get(':nth-child(2) > .css-1j59w0l')
}
Defense(){
    return cy.get(':nth-child(3) > .css-1j59w0l')
}
SpAttack(){
    return cy.get(':nth-child(4) > .css-1j59w0l')
}
SpDefense(){
    return cy.get(':nth-child(5) > .css-1j59w0l')
}
Speed(){
    return cy.get(':nth-child(6) > .css-1j59w0l')
}
MoveList(){
    return cy.get('[data-cy="pokemon-details-move-list-button"]')
}
BackButton(){
    return cy.get('.chakra-modal__footer > .chakra-button')
}
Hunt(){
    return cy.get('[data-cy="pokemon-details-catch-pokemon-button"]')
}
SavePokemon(){
    return cy.get('[data-cy="save-pokemon-button"]')
}
InputName(){
    return cy.get('[data-cy="pokemon-nickname-input"]')
}
ReturnButton(){
    return cy.get('[data-cy="return-button"]')
}
}

export default PokemonDetails