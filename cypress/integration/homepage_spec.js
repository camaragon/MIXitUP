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
            cy.get('h1').contains('MIX it UP')
        })
    })

    it('Should display user\'s profile with an image, name, level, and progress bar', () => {
        cy
        .get('header').within(() => {
            cy.get('.user-profile').within(() => {
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
            cy.get('.header-quote').contains('Level Up Your Bartending Skills!For every 3 drinks made you level up!Only select Make Drink if you really made the drink!')
        })
    })
})