describe('MoviesView', () => {
  beforeEach(() => {
    cy.visit('/movies');
  });
  describe('when click on movie card', () => {
    beforeEach(() => {
      cy
        .get('.movie-card')
        .find('a')
        .first()
        .click({ force: true });
    });
    it('should navigate to movie details', () => {
      cy.location().should(location => {
        expect(location.href).to.eq(
          'http://localhost:3000/movie-details/447365',
        );
      });
    });
  });
});
