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

})