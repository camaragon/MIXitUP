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

    it('Should be able to display a random cocktail when generate cocktail button is clicked', () => {
        cy
        .get('.generate-cocktail').click()
        .get('.cocktail-card').should('be.visible')
    })

    it('Should be able to display a random bartending tip when generate cocktail button is clicked', () => {
        cy
        .get('.generate-cocktail').click()
        .get('.bartend-tips').should('be.visible')
    })

    it('Should be able to display buttons and cocktail info on cocktail card', () => {
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

    
    it('Should be able to make drink and see it move to the made drinks section', () => {
        cy
        .get('.generate-cocktail').click()
        .get('.cocktail-card').within(() => {
            cy
            .get('.make-drink-btn').click()
        })
        cy.get('section').within(() => {
            cy
            .get('.made-drink-card').should('be.visible')
        })
    })
    
    it('Should display a made drink card with name and image', () => {
        cy
        .get('.generate-cocktail').click()
        .get('.cocktail-card').within(() => {
            cy
            .get('.make-drink-btn').click()
        })
        .get('section').within(() => {
            cy
            .get('.made-drink-card').within(() => {
                cy
                .get('h3').should('be.visible')
                .get('.made-image').should('be.visible')
            })
        })
    })
    
    it('Should be able to display multiple made drink cards', () => {
        cy
        .get('.generate-cocktail').click()
        .get('.cocktail-card').within(() => {
            cy
            .get('.make-drink-btn').click()
        })
        .get('.generate-cocktail').click().wait(500)
        .get('.cocktail-card').within(() => {
            cy
            .get('.make-drink-btn').click()
        })
        .get('section').within(() => {
            cy
            .get('.made-drink-card')
            .should(($made_drink_card) => {
                expect($made_drink_card).to.have.length(2)
            })
        })
    })
    
    it('Should alert the user if they\'re trying to make a drink they already made', () => {
        cy
        .get('.generate-cocktail').click()
        .get('.cocktail-card').within(() => {
            cy
            .get('.make-drink-btn').click()
            .get('.make-drink-btn').click()
        })
        .get('.same-drink-error').contains('You\'ve already made this drink!')
    })
    
    it('Should see the progress bar move when a drink is made', () => {
        cy
        .get('.generate-cocktail').click()
        .get('.cocktail-card').within(() => {
            cy
            .get('.make-drink-btn').click()
        })
        .get('progress[value=1]').should('be.visible')
    })

    it('Should be able to reset made drinks and user progress when the Start Over button is clicked', () => {
        cy
        .get('.generate-cocktail').click()
        .get('.cocktail-card').within(() => {
            cy
            .get('.make-drink-btn').click()
        })
        .get('.made-drink-card').should('be.visible')
        .get('progress[value=1]').should('be.visible')
        .get('.start-over-btn').click()
        .get('progress[value=0]').should('be.visible')
        .get('.no-drinks-card').should('be.visible')
    })
    
    it('Should have a link to the bartending tools site attatched to reccomened tools button', () => {
        cy
        .get('a').should('have.attr', 'href', 'https://mycustombottleopener.com/10-essential-bar-tools-that-every-bartender-should-have/')
    })

    it('Should be able to take user to the drink recipe page when the drink recipe button is clicked', () => {
        cy
        .get('.generate-cocktail').click()
        .get('.cocktail-card').within(() => {
            cy
            .get('.drink-recipe-btn').click()
        })
    })

})