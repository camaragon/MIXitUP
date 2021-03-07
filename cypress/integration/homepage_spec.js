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
})