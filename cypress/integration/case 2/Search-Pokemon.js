import PokemonDetails from "../../pages/PokemonDetails"


let pokemonDetails = new PokemonDetails()



describe('Pokedex page', () => {
    beforeEach(() => {
        cy.Search()
    })


    it('001 Should be able to render search pokemon page', () =>{
        
        pokemonDetails.SearchBar().should('be.visible')
        cy.request({
            url: "https://pokemon.irshadibagas.com/pokemon_details",
            followRedirect: false,
            failOnStatusCode: false,
        }).then((resp) => {
            expect(resp.status).to.eq(200);
            expect(resp.redirectedToUrl).to.eq(undefined);
        })
    
    })
    it('002 Should be able to search pokemon', () =>{

        pokemonDetails.SearchBar().type("bulbasaur")
        pokemonDetails.SearchResult().should('be.visible').wait(1000)
        pokemonDetails.Element().should('be.visible')
        pokemonDetails.Skill().should('be.visible')
        pokemonDetails.ViewPokemon().should('be.visible').wait(1000)
    })
    it('003 Search for not found pokemon', () =>{

        pokemonDetails.SearchBar().type("asal")
        pokemonDetails.SearchResult().should('not.exist')
        cy.contains("Pokemon doesn't exist").should('be.visible').wait(2000)
    })
    it('004 Clear search result', () =>{

        pokemonDetails.SearchBar().type("bulbasaur")
        pokemonDetails.SearchResult().should('be.visible').wait(2000)
        pokemonDetails.ClearIcon().click({force:true}).wait(1000)

        pokemonDetails.SearchBar().type("asal")
        pokemonDetails.SearchResult().should('not.exist').wait(2000)
        pokemonDetails.ClearIcon().click({force:true}).wait(1000)

    })
    it('005 User can navigate to pokemon details', () =>{

        pokemonDetails.SearchBar().type("bulbasaur")
        pokemonDetails.SearchResult().should('be.visible').wait(2000)
        pokemonDetails.ViewPokemon().click()
        pokemonDetails.PokemonDetailsName().should('exist').wait(2000)
    })

    })