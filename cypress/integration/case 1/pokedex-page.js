import PokemonLists from "../../pages/PokemonLists"
import PokemonDetails from "../../pages/PokemonDetails"


  let pokemonLists = new PokemonLists()
  let pokemonDetails = new PokemonDetails()

const Homepage = "https://pokemon.irshadibagas.com/"

describe('Pokedex page', () => {
    beforeEach(() => {
        cy.Homepage()
    })
        

    it('001 Should be able to render pokedex page', () => {
        
        pokemonLists.PokemonIcon().should('be.visible')
        pokemonLists.Description().should('be.visible')
        pokemonLists.PokedexEntries().its('length').should('eq',10).wait(1000)
        pokemonLists.Scroll1().scrollIntoView().wait(1000)
        pokemonLists.Scroll2().scrollIntoView().wait(1000)
        pokemonLists.Scroll3().scrollIntoView().wait(1000)
        pokemonLists.Scroll4().scrollIntoView().wait(1000)
        pokemonLists.Scroll5().scrollIntoView().wait(1000)
     

    })

    it('002 Navigate between pokedex paged pagination',()=> {

        cy.reload()
        cy.wait(1000)
        pokemonLists.NextButton().click()
        pokemonLists.PokedexEntries().its('length').should('eq',10).wait(1000)
        pokemonLists.Scroll1().scrollIntoView().wait(1000)
        pokemonLists.Scroll2().scrollIntoView().wait(1000)
        pokemonLists.Scroll3().scrollIntoView().wait(1000)
        pokemonLists.Scroll4().scrollIntoView().wait(1000)
        pokemonLists.Scroll5().scrollIntoView().wait(1000)
        pokemonLists.BackButton().click().wait(1000)

        pokemonLists.BackButton().should('be.disabled')


        cy.request({
            url: Homepage,
            followRedirect: false,
            failOnStatusCode: false,
        }).then((resp) => {
            expect(resp.status).to.eq(200);
            expect(resp.redirectedToUrl).to.eq(undefined);
        })
    })

        it('003 Should be able to navigate to pokemon details',()=> {
        
            pokemonDetails.DetailsPage().click()
            cy.url().should('include', '/pokemon_details')


    })
})