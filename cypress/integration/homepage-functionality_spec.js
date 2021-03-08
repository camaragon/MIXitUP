describe('Homepage', () => {
    const baseUrl = 'http://localhost:3000';

    it('Should be able to visit the base URL and see the homepage', () => {
        cy
        .visit(baseUrl)
        .location().should((loc) => {
            expect(loc.host).to.eq('localhost:3000')
            expect(loc.origin).to.eq(baseUrl)
        })
    });

    beforeEach(() => {
        cy
        .visit(baseUrl);
    });

    it('Should be able to fetch GET the random cocktail from the API', () => {
        cy
        .intercept('GET', '/api/json/v1/1/random.php').as('getRandomCocktail')
        .get('.generate-cocktail').click()
        cy
        .wait('@getRandomCocktail')
        .then(({request, response}) => {
            expect(response.statusCode).to.eq(200)
        })
        
    })

    it('Should be able to display a random coktail when button is clicked', () => {
        cy
        .get('.generate-cocktail').click()
        .get('.cocktail-card').should('be.visible')
    })

    it('Should be able to diplay buttons and cocktail info on cocktail card', () => {
        cy
        .get('.generate-cocktail').click()
        .get('.cocktail-card').within(() => {
            cy
            .get('.cocktail-image').should('be.visible')
            .get('h3').should('be.visible')
            .get('p').should('be.visible')
            .get('button').contains('Make Drink')
            .get('button').contains('Drink Recipe')
        })
    })

    it('Should be able to take user to the drink recipe page whe the drink recipe button is clicked', () => {
        cy
        .get('.generate-cocktail').click()
        .get('.cocktail-card').within(() => {
            cy
            .get('.drink-recipe-btn').click()
        })
    })

    it('Should be able to take user to the drink recipe page whe the drink recipe button is clicked', () => {
        cy
        .get('.generate-cocktail').click()
        .get('.cocktail-card').within(() => {
            cy
            .get('.drink-recipe-btn').click()
        })
    })
})