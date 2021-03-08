describe('Cocktail Recipe', () => {
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

    it('Should be able to take user to the drink recipe page when the drink recipe button is clicked', () => {
        cy
        .get('.generate-cocktail').click()
        .get('.cocktail-card').within(() => {
            cy
            .get('.drink-recipe-btn').click()
        })
    })

    it('Should display an enlarged image of the drink on the recipe page', () => {
        cy
        .get('.generate-cocktail').click()
        .get('.cocktail-card').within(() => {
            cy
            .get('.drink-recipe-btn').click()
        })
        .get('.recipe-image').should('be.visible')
    })

    it('Should display a section with the recipe info', () => {
        cy
        .get('.generate-cocktail').click()
        .get('.cocktail-card').within(() => {
            cy
            .get('.drink-recipe-btn').click()
        })
        .get('.recipe-info').should('be.visible')
    })

    it('Should display the name of the drink in the recipe', () => {
        cy
        .get('.generate-cocktail').click()
        .get('.cocktail-card').within(() => {
            cy
            .get('.drink-recipe-btn').click()
        })
        .get('.recipe-info').within(() => {
             cy.get('.recipe-name').should('be.visible')
        })
    })

    it('Should display the category of the drink in the recipe', () => {
        cy
        .get('.generate-cocktail').click()
        .get('.cocktail-card').within(() => {
            cy
            .get('.drink-recipe-btn').click()
        })
        .get('.recipe-info').within(() => {
             cy.get('.recipe-category').should('be.visible')
        })
    })

    it('Should display the glass type of the drink in the recipe', () => {
        cy
        .get('.generate-cocktail').click()
        .get('.cocktail-card').within(() => {
            cy
            .get('.drink-recipe-btn').click()
        })
        .get('.recipe-info').within(() => {
             cy.get('.recipe-glass').should('be.visible')
        })
    })

    it('Should display the ingredients of the drink in the recipe', () => {
        cy
        .get('.generate-cocktail').click()
        .get('.cocktail-card').within(() => {
            cy
            .get('.drink-recipe-btn').click()
        })
        .get('.recipe-info').within(() => {
             cy.get('.recipe-ingredients').should('be.visible')
        })
    })

    it('Should display the instructions of how to make the drink in the recipe', () => {
        cy
        .get('.generate-cocktail').click()
        .get('.cocktail-card').within(() => {
            cy
            .get('.drink-recipe-btn').click()
        })
        .get('.recipe-info').within(() => {
             cy.get('.recipe-instructions').should('be.visible')
        })
    })

    it.only('Should return the user back to the home page when the Go Back button is clicked', () => {
        cy
        .get('.generate-cocktail').click()
        .get('.cocktail-card').within(() => {
            cy
            .get('.drink-recipe-btn').click()
        })
        .get('.recipe-info').within(() => {
             cy.get('button').click()
        })
    })


})