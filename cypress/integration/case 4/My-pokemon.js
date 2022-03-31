import Mypokemon from "../../pages/Mypokemon";
import PokemonDetails from "../../pages/PokemonDetails";

let pokemonDetails = new PokemonDetails()
let mypokemon = new Mypokemon()


describe('Pokedex page', () => {
    beforeEach(() => {
        cy.Details()
    })


    it('001 Should be able to render my pokemon page', () =>{

        pokemonDetails.Hunt().click()
        cy.get('[data-cy="save-pokemon-button"]').then(($btn) => {
            if ($btn.find('active')) {
                pokemonDetails.SavePokemon().click()
                cy.get('[data-cy="pokemon-nickname-input"]').type("aldy") 
                pokemonDetails.SavePokemon().click()
                cy.contains("Pokemon saved").should('exist')

                mypokemon.Mypokemon().click()
                cy.request({
                    url: "https://pokemon.irshadibagas.com/my_pokemons",
                    followRedirect: false,
                    failOnStatusCode: false,
                }).then((resp) => {
                    expect(resp.status).to.eq(200);
                    expect(resp.redirectedToUrl).to.eq(undefined);
                })

                it('002 Should be able to release my pokemon', () =>{
                pokemonDetails.Hunt().click()
                pokemonDetails.SavePokemon().click()
                cy.get('[data-cy="pokemon-nickname-input"]').type("aldy") 
                pokemonDetails.SavePokemon().click()
                cy.contains("Pokemon saved").should('exist')

                mypokemon.Mypokemon().click()
                mypokemon.MoreButton().click()
                mypokemon.ReleaseButton().click()
                cy.contains("Pokemon released").should('exist')

                })
                it('003 Should be able to release all my pokemon', () =>{
                    pokemonDetails.Hunt().click()
                    pokemonDetails.SavePokemon().click()
                    cy.get('[data-cy="pokemon-nickname-input"]').type("aldy") 
                    pokemonDetails.SavePokemon().click()
                    cy.contains("Pokemon saved").should('exist')
    
                    mypokemon.Mypokemon().click()
                    mypokemon.MoreButton().click()
                    mypokemon.ReleaseAll().click()
                    mypokemon.ReleaseAllButton().click()
                    cy.contains("All pokemons are released").should('exist')
                    
    
    
                        
                    })
    }

    
})

})
})