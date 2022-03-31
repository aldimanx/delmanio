import PokemonDetails from "../../pages/PokemonDetails"


let pokemonDetails = new PokemonDetails()



describe('Pokedex page', () => {
    beforeEach(() => {
        cy.Details()
    })

    it('001 Should be able to render pokemon details page', () =>{
        
        pokemonDetails.PokemonDetailsName().should('exist')
        pokemonDetails.Skill().should('exist')
        pokemonDetails.Element().should('exist')
        pokemonDetails.Hp().should('exist')
        pokemonDetails.Attack().should('exist')
        pokemonDetails.Defense().should('exist')
        pokemonDetails.SpAttack().should('exist')
        pokemonDetails.SpDefense().should('exist')
        pokemonDetails.Speed().should('exist')



        
        cy.request({
            url: "https://pokemon.irshadibagas.com/pokemon_details/bulbasaur",
            followRedirect: false,
            failOnStatusCode: false,
        }).then((resp) => {
            expect(resp.status).to.eq(200);
            expect(resp.redirectedToUrl).to.eq(undefined);
        })
    })

        it('002 Should be able to open move modal', () =>{
            
            pokemonDetails.MoveList().click()
            cy.contains('Pokemon Moves').should('exist').wait(1000)
            pokemonDetails.BackButton().click()
    
        
    })
   /// stuck still need to learn for condition things
        it('003 hunt pokemon',() => {
         
         pokemonDetails.Hunt().click()
            cy.get('[data-cy="save-pokemon-button"]').then(($btn) => {
                if ($btn.find('active')) {
                    pokemonDetails.SavePokemon().click()
                    cy.get('[data-cy="pokemon-nickname-input"]').type("aldy") 
                    pokemonDetails.SavePokemon().click()
                    cy.contains("Pokemon saved").should('exist')
                return 
                    
             
                }               
                })
         
         
         
         
    
  
            
            })
                
    
    





})
        