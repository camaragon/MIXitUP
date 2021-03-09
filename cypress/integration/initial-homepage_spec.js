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

    it('Should display a heading with a name of the app', () => {
        cy
        .get('header').within(() => {
            cy
            .get('h1').contains('MIX it UP')
        })
    })

    it('Should display user\'s profile with an image, name, level, and progress bar', () => {
        cy
        .get('header').within(() => {
            cy
            .get('.user-profile').within(() => {
                cy
                .get('p').contains('Leta Keane')
                .get('p').contains('Level')
                .get('progress').should('be.visible')
                .get('.user-image').should('be.visible')
            })
        })
    })

    it('Should display instructions to user in the header', () => {
        cy
        .get('header').within(() => {
            cy
            .get('.header-quote').contains('Level Up Your Bartending Skills!For every 3 drinks made you level up!Only select Make Drink if you really made the drink!')
        })
    })

    it('Should display a heading in the side bar', () => {
        cy
        .get('section').within(() => {
            cy
            .get('h3').contains('Made Drinks')
        })
    })

    it('Should display a message explaining no made drinks in the side bar', () => {
        cy
        .get('section').within(() => {
            cy
            .get('.no-drinks-card').within(() => {
                cy
                .get('.no-made-text').contains('You haven\'t made any drinks yet... mix it up!')
            })
        })
    })

    it('Should display instructions on how to start', () => {
        cy
        .get('main').within(() => {
            cy
            .get('h3').contains('Click Generate a Cocktail to get started!')
        })
    })

    it('Should display image of a bartender making a drink with blue flames', () => {
        cy
        .get('main').within(() => {
            cy
            .get('img').should('be.visible')
        })
    })

    it('Should display Recommended Tools button in the main section', () => {
        cy
        .get('main').within(() => {
            cy
            .get('button').contains('Recommended Tools')
        })
    })

    it('Should display Generate a Cocktail button in the main section', () => {
        cy
        .get('main').within(() => {
            cy
            .get('button').contains('Generate a Cocktail')
        })
    })

    it('Should display Start Over button in the main section', () => {
        cy
        .get('main').within(() => {
            cy
            .get('button').contains('Start Over')
        })
    })
})