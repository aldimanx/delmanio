class Mypokemon{


Mypokemon(){
   return cy.get('.css-ogw1ui')
}

MoreButton(){
    return cy.get('[data-cy="pokemon-card-more-button"]')
}
ReleaseButton(){
    return cy.get('[data-cy="pokemon-release-button"]')
}

ReleaseAll(){
    return cy.get('[data-cy="release-all-pokemon-button"]')

}
ReleaseAllButton(){
    return cy.get('[data-cy="release-pokemon-release-button"]')
}
}


export default Mypokemon